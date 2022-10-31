'use strict'

export default class History {
  #states ; //EditorState[]

  constructor() {
    this.#states = [];
  }

  push(state) {
    this.#states.push(state) ;
  }

  pop () {
    return this.#states.pop();
  }
}
