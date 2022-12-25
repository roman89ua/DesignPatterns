import type { IComponent } from './IComponent';

export class Shape implements IComponent {
  render(): void {
    console.log('Shape renders');
  }
}
