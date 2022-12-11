import { MonacoEditor } from "../types/scriptedEditorTypes";
import { ScriptCommand } from "../types/scriptTypes";

type OnRunCommand = (index: number, time: number) => void;

export class RunContext {
  runId = 0;
  editor: MonacoEditor;
  script: ScriptCommand[];
  sync = true;
  private moveIndexHandlers: OnRunCommand[] = [];

  constructor(editor: MonacoEditor, script: ScriptCommand[]) {
    this.editor = editor;
    this.script = script;
  }

  subscribe(type: "run-command", handler: OnRunCommand): void {
    if (type === "run-command") {
      this.moveIndexHandlers.push(handler);
      return;
    }
  }

  unsubscribe(type: "run-command", handler: OnRunCommand): void {
    if (type === "run-command") {
      const i = this.moveIndexHandlers.indexOf(handler);
      if (i === -1) return;
      this.moveIndexHandlers.splice(i, 1);
      return;
    }
  }

  emit(type: "run-command", data: { index: number; time: number }) {
    if (type === "run-command") {
      this.moveIndexHandlers.forEach((handler) => handler(data.index, data.time));
    }
  }

  getCheckCanceledFunction() {
    const runId = this.runId;
    return () => this.runId !== runId;
  }

  cancelCurrentRun() {
    this.runId++;
  }

  /**
   * Also cancels the current run if there is a current run in process.
   */
  startNewRun() {
    this.runId++;
  }
}
