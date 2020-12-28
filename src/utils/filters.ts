import type{ Font } from './fonts';



export class Filter {

  fonts: Font[];

  constructor(fonts: Font[]) {
    this.fonts = fonts
  }
  
  byLigatures(isFiltered: boolean) {
    if (isFiltered)
        this.fonts = this.fonts.filter(font => font.ligatures);
    return this;
  }

  byFreeFonts(isFiltered: boolean) {
    if (isFiltered)
        this.fonts = this.fonts.filter(font => font.price === 0);
    return this;
  }

  getFonts() {
    return this.fonts;
  }
}

