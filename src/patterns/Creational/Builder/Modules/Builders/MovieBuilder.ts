import { Movie } from "../Formats/Movie";
import type { PresentationBuilder } from "./PresentationBuilder";
import type { Slide } from "../Slide";

export class MovieBuilder implements PresentationBuilder{
  private movie = new Movie();

  addSlide(slide: Slide): void {
    this.movie.assFrame(slide.getSlideContent(), 3);
  }

  getMovieFile() {
    return this.movie;
  }
}