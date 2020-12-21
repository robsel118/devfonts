

interface Font {
  displayName: string;
  familyName: string;
  ligatures: boolean;
  price: number | string;
  url: string;
  src: string;
  extensions: string[];
}

export const fontFamilies: Font [] = [
  {
    displayName: 'Fira Code',
    familyName: 'Fira Code',
    ligatures: true,
    price: 0,
    url: "https://github.com/tonsky/FiraCode",
    src: "../../fonts/Fira_Code/FiraCode-Regular",
    extensions: ["woff", "woff2"]
  },
  {
    displayName: 'Source Code Pro',
    familyName: 'Source Code Pro',
    ligatures: false,
    price: 0,
    url: "https://fonts.google.com/specimen/Source+Code+Pro",
    src: "../../fonts/Source_Code_Pro/SourceCodePro_Regular",
    extensions: ["ttf"]
  },
  {
    displayName: 'Consolas',
    familyName: 'Consolas',
    ligatures: false,
    price: 0,
    url: "https://freefontsdownload.net/free-consolas-font-33098.htm",
    src: "../../fonts/Consolas/Consolas",
    extensions: ["ttf"]
  },
  {
    displayName: 'Monoid',
    familyName: 'Monoid Regular',
    ligatures: true,
    price: 0,
    url: "https://github.com/larsenwork/monoid",
    src: "../../fonts/Monoid/Monoid-Regular",
    extensions: ["ttf"]
  }
]

export const generateFontFace = (): string => {
  let styles = "";

  fontFamilies.forEach(font => {

    const src = font.extensions.reduce((acc, extension, index) =>
    {
      acc += `url(${font.src}.${extension}) format('${extension === 'ttf'? 'truetype' : extension}')`;
      acc += (index + 1) === font.extensions.length ? ";" : ",";
      return acc;
    }
    , "")
    styles += `
    @font-face {
      font-family: '${font.familyName}';
      src: ${src}
      font-weight: 400;
      font-style: normal;
    }\n`
  })

  return styles;
}