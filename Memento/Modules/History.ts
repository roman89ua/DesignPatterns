"use strict";

import { EditorState } from "./EditorState";

export class History {
  _states: EditorState[] = [];

  constructor() {
    this._states = [];
  }

  push(state: EditorState) {
    this._states.push(state);
  }

  pop() {
    const result = this._states.pop();
    return result || new EditorState("");
  }
}
