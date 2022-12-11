import type { PresentationBuilder } from "./PresentationBuilder";
import type { Slide } from "../Slide";
import { PdfDocument } from "../Formats/PdfDocument";

export class PdfDocumentBuilder implements PresentationBuilder{
  private pdfDocument = new PdfDocument()
  addSlide(slide: Slide): void {
    this.pdfDocument.AddPage(slide.getSlideContent());
  }

  getPdfDocument(): PdfDocument {
    return this.pdfDocument
  }

}