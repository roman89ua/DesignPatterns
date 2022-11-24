export interface IIterator<T> {
  current: () => T,
  hasNext: () => boolean,
  goNext: () => void;
}
