export interface IObserver {
  // !push implementation
  // update<T>(value: T): void;
  update(): void;
}
