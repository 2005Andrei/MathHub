import { useEffect, useRef, useState } from "react";
import { RunContext } from "./run/RunContext";
import { ScriptedEditor } from "./ScriptedEditor";
import { ScriptedEditorControls } from "./ScriptedEditorControls";
import { calculateHeight } from "./scriptedEditorUtils";

interface Props {
  language: string;
  initialCode: string;
  scriptId: string;
  expectedMaxLines: number;
  loop: boolean;
}

export function LazyScriptedEditor(props: Props) {
  const { expectedMaxLines, scriptId } = props;

  const [runContext, setRunContext] = useState<RunContext | null>(null);
  const [render, setRender] = useState(true);
  const [height, setHeight] = useState(() => calculateHeight(expectedMaxLines));

  const onMaxLinesCalculated = (lines: number) => {
    if (lines !== expectedMaxLines) {
      console.warn(
        `Expected lines did not match for ${scriptId}.\n` +
          `\tExpected ${expectedMaxLines} but got ${lines}`,
      );
      setHeight(calculateHeight(lines));
    }
  };

  const ref = useRef<HTMLDivElement>(null);
  const renderRef = useRef(render);
  renderRef.current = render;

  useEffect(() => {
    if (!expectedMaxLines) {
      console.warn(`No expected number of lines for script ${scriptId}`);
    }
  }, []);

  useEffect(() => {
    const el = ref.current!;
    const callback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      if (!entry) {
        console.warn("Received 0 entries from IntersectionObserver");
        return;
      }
      if (renderRef.current === entry.isIntersecting) return;
      setRender(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(callback, {
      root: document,
      rootMargin: "64px",
    });
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <>
      <div style={{ height }} ref={ref}>
        {render && (
          <ScriptedEditor
            {...props}
            onMaxLinesCalculated={onMaxLinesCalculated}
            setRunContext={setRunContext}
            language={props.language}
            loop={props.loop}
          />
        )}
      </div>
      <ScriptedEditorControls
        initialCode={props.initialCode}
        scriptId={props.scriptId}
        runContext={runContext}
        loop={props.loop}
      />
    </>
  );
}
