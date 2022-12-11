import { Presentation } from "./Modules/Presentation";
import { Slide } from "./Modules/Slide";
import { PdfDocumentBuilder } from "./Modules/Builders/PdfDocumentBuilder";
import { MovieBuilder } from "./Modules/Builders/MovieBuilder";

export class Builder {
  constructor() {
    console.log("BUILDER DESIGN PATTERN!!!");

    const presentation = new Presentation();

    presentation.addSlide(new Slide("Slide #1"));
    presentation.addSlide(new Slide("Slide #2"));
    presentation.addSlide(new Slide("Slide #3"));

    const pdfBuilder = new PdfDocumentBuilder();
    presentation.exportTo(pdfBuilder);
    pdfBuilder.getPdfDocument();

    const movieBuilder = new MovieBuilder();
    presentation.exportTo(movieBuilder);
    movieBuilder.getMovieFile();
  }
}