'use strict'

export default class EditorState{
  #content; //: string

  constructor(content) {
    this.#content = content;
  }

  get content() {
    return this.#content;
  }
}
