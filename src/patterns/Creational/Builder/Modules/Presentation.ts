import type { Slide } from "./Slide";
// import { ExportFormat } from "./Formats/ExportFormat";
// import { PdfDocument } from "./Formats/PdfDocument";
// import { Movie } from "./Formats/Movie";
import type { PresentationBuilder } from "./Builders/PresentationBuilder";

export class Presentation {
  private listOfSlides: Slide[] = [];

  addSlide(slide: Slide) {
    this.listOfSlides.push(slide);
  }


// todo PROBLEM

//   public exportTo(targetFormat: ExportFormat) {
//     if(targetFormat === ExportFormat.PDF){
//       const pdfDocument = new PdfDocument();
//       this.listOfSlides.forEach(slide => {
//         pdfDocument.AddPage(slide.getSlideContent())
//       })
//     } else if(targetFormat === ExportFormat.MOVIE) {
//       const moviePresentation = new Movie();
//       this.listOfSlides.forEach(slide => {
//         moviePresentation.assFrame(slide.getSlideContent(), 3)
//       })
//     }
//   }


//Solution

  public exportTo(builder: PresentationBuilder){
    this.listOfSlides.forEach(slide => {
      builder.addSlide(slide)
    })
  }
}