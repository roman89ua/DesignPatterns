export class Slide {
  private readonly _slideContent: string;
  constructor(newSlideContent: string) {
    this._slideContent = newSlideContent
  }
  getSlideContent(): string {
    return this._slideContent;
  }
}
