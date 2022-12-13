import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Editor, { EditorProps } from "@monaco-editor/react";
import styles from "./ScriptedEditor.module.scss";
import { MonacoEditor } from "./types/scriptedEditorTypes";
import { ScriptCommand } from "./types/scriptTypes";
import { runScript } from "./run/runScript";
import { ScriptCommands } from "./ScriptCommands/ScriptCommands";
import React from "react";
import { useColorMode } from "../../utils/colorMode";
import { RunContext } from "./run/RunContext";

const MemoizedEditor = React.memo(Editor);

const FONT_SIZE = 20;
const LINE_HEIGHT_FACTOR = 1.5;
const LINE_HEIGHT = FONT_SIZE * LINE_HEIGHT_FACTOR;
const V_PADDING = 24;

interface Props {
  initialCode: string;
  script: ScriptCommand[] | string;
}

export const ScriptedEditor = (props: Props) => {
  const initialCode = useMemo(() => {
    const lines = props.initialCode.split("\n");
    while (lines[0] === "") {
      lines.shift();
    }
    while (lines[lines.length - 1] === "") {
      lines.pop();
    }
    return lines.join("\n");
  }, []);

  const [_editor, setEditor] = useState<MonacoEditor | null>(null);
  const [script, setScript] = useState<ScriptCommand[] | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Array.isArray(props.script)) {
      setScript(props.script);
      return;
    }
    const el = document.querySelector(`[data-script-id="${props.script}"]`)!;
    setScript(JSON.parse(el.getAttribute("data-script")!));
  }, []);

  const runContext = useMemo(
    () => (_editor && script ? new RunContext(_editor, script) : null),
    [_editor, script],
  );
  const runContextRef = useRef(runContext);
  runContextRef.current = runContext;

  const startScript = useCallback(
    async (index: number, delayMs: number) => {
      if (!runContext) return;
      runContext.startNewRun();

      const { editor } = runContext;
      if (editor.getValue() !== initialCode) {
        editor.setValue(initialCode);
      }

      runScript({ index, delayMs, runContext });
    },
    [runContext],
  );

  async function applyHeightToContainer(runContext: RunContext) {
    const container = containerRef.current!;
    const editorWrapper = editorWrapperRef.current!;

    let height = 0;

    await runScript({
      index: 0,
      runContext,
      forceSync: true,
      onEachStep: () => {
        height = Math.max(height, calculateHeight(runContext.editor.getValue()));
      },
    });

    console.log({ height });
    runContext.editor.layout({ height, width: container.offsetWidth });
    editorWrapper.style.height = height + "px";
  }

  // Run script on mount
  useEffect(() => {
    if (!runContext) return;
    applyHeightToContainer(runContext).then(() => startScript(0, 1000));
    return () => runContext.cancelCurrentRun();
  }, [runContext]);

  const options = useMemo<EditorProps["options"]>(
    () => ({
      fontSize: FONT_SIZE,
      lineHeight: LINE_HEIGHT_FACTOR,
      lineNumbers: "off",
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: V_PADDING, bottom: V_PADDING },
    }),
    [],
  );

  const calculateHeight = useCallback((code: string) => {
    return code.split("\n").length * LINE_HEIGHT + V_PADDING * 2;
  }, []);

  const cancelCurrentRun = useCallback(() => {
    runContext?.cancelCurrentRun();
  }, [runContext]);

  const [mode] = useColorMode();

  return (
    <div ref={containerRef} onMouseDown={cancelCurrentRun} onKeyDown={cancelCurrentRun}>
      <div ref={editorWrapperRef} style={{ minHeight: calculateHeight(initialCode) }}>
        <MemoizedEditor
          defaultValue={initialCode}
          className={styles.editor}
          theme={mode === "dark" ? "vs-dark" : "light"}
          language="javascript"
          options={options}
          onMount={setEditor}
        />
      </div>
      {runContext && (
        <ScriptCommands moveToIndex={(index) => startScript(index, 1000)} runContext={runContext} />
      )}
    </div>
  );
};

export function withScriptedEditor<T extends { children: any }>(Component: React.ComponentType<T>, getChildren: (props: T) => string) {
  return (props: T) => {
    const children = getChildren(props);
    const searchStr = "// @script ";

    const allLines = children.split("\n");

    const lines = allLines.filter(line => !line.startsWith(searchStr))
    const scriptLine = allLines.find(line => line.startsWith(searchStr));
    
    if (!scriptLine) {
      return <Component {...props} />;
    }

    const initialCode = lines.join("\n");
    const scriptId = scriptLine.split(searchStr)[1].trim();
    
    return <ScriptedEditor initialCode={initialCode} script={scriptId} />;
  }
};