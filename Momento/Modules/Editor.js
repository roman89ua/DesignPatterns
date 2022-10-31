'use strict'
import EditorState from "./EditorState.js";

class Editor {
  #content;

  constructor() {
    this.#content = '';
  }

  getContent() {
    return this.#content;
  }

  setContent(newValue) {
    this.#content = newValue;
  }

  createState() {
    return new EditorState(this.getContent());
  }

  restore(state) {
    this.setContent(state.content);
  }
}

export default  Editor;
