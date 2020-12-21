

interface Font {
  displayName: string;
  familyName: string;
  ligatures: boolean;
  price: number | string;
  url: string;
  src: string;
  extensions: string[];
}

const fonts: Font [] = [
  {
    displayName: 'Fira Code',
    familyName: 'Fira Code',
    ligatures: true,
    price: 0,
    url: "https://github.com/tonsky/FiraCode",
    src: "../../fonts/FiraCode-Regular",
    extensions: ["woff", "woff2"]
  },
  {
    displayName: 'Source Code Pro',
    familyName: 'Source Code Pro',
    ligatures: false,
    price: 0,
    url: "https://fonts.google.com/specimen/Source+Code+Pro",
    src: "../../fonts/SourceCodePro_Regular",
    extensions: ["tff"]
  }
]

export const generateFontFace = (): string => {
  let styles = "";

  fonts.forEach(font => {

    const src = font.extensions.reduce((acc, extension, index) =>
    {
      acc += `url(${font.src}.${extension}) format('${extension}')`;
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
    }`
  })
  return styles;
}