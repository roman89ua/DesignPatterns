import type { IComponent } from './IComponent';

export class Group implements IComponent {
  private componentsList: Array<IComponent> = [];

  add(newComponent: IComponent): void {
    this.componentsList.push(newComponent);
  }

  render(): void {
    this.componentsList.forEach((comp) => comp.render());
  }
}
