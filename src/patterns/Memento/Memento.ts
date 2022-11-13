import { Editor } from "./Modules/Editor";
import { History } from "./Modules/History";

export const Memento = class {
  constructor() {
    console.log("MEMENTO");
    const editor = new Editor();
    const history = new History();

    editor.setContent("1");
    history.push(editor.createState());

    editor.setContent("2");
    history.push(editor.createState());

    editor.setContent("3");
    history.push(editor.createState());

    editor.setContent("4");
    history.push(editor.createState());

    editor.setContent("5");
    history.push(editor.createState());

    editor.setContent("6");
    history.push(editor.createState());

    editor.restore(history.pop());
    editor.restore(history.pop());
    editor.restore(history.pop());
    editor.restore(history.pop());
    editor.restore(history.pop());
    editor.restore(history.pop());

    console.log(editor.getContent());
  }
};
