"use strict";

import { EditorState } from "./EditorState";

export class Editor {
  #content: string;

  constructor() {
    this.#content = "";
  }

  getContent() {
    return this.#content;
  }

  setContent(newValue: string) {
    this.#content = newValue;
  }

  createState() {
    return new EditorState(this.getContent());
  }

  restore(state: EditorState) {
    this.setContent(state.content);
  }
}
