import type {IComponent} from "./Component/IComponent";

export class ContextMenu {
  duplicate(component: IComponent) {
    component.clone()
    component.render();
  }
}
