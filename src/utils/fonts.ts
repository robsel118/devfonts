<<<<<<< HEAD


interface Font {
=======
export interface Font {
>>>>>>> hotfix
  displayName: string;
  familyName: string;
  ligatures: boolean;
  price: number | string;
  url: string;
  src: string;
  extensions: string[];
}

<<<<<<< HEAD
const firaCode: Font = {
  displayName: 'Fira Code',
  familyName: 'Fira Code',
  ligatures: true,
  price: 0,
  url: "https://github.com/tonsky/FiraCode",
  src: "../../fonts/FiraCode-Regular",
  extensions: ["woff", "woff2"]
}

export const generateFontFace = (): string => {
  let styles = "";

  [firaCode].forEach(font => {

    const src = font.extensions.reduce((acc, extension, index) =>
    {
      acc += `url(${font.src}.${extension}) format('${extension}')`;
      acc += (index + 1) === font.extensions.length ? ";" : ",";
      return acc;
    }
    , "")
=======
export const fontFamilies: Font[] = [
  {
    displayName: "Fira Code",
    familyName: "Fira Code",
    ligatures: true,
    price: 0,
    url: "https://github.com/tonsky/FiraCode",
    src: "fonts/Fira_Code/FiraCode-Regular",
    extensions: ["woff", "woff2"],
  },
  {
    displayName: "Source Code Pro",
    familyName: "Source Code Pro",
    ligatures: false,
    price: 0,
    url: "https://fonts.google.com/specimen/Source+Code+Pro",
    src: "fonts/Source_Code_Pro/SourceCodePro_Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Consolas",
    familyName: "Consolas",
    ligatures: false,
    price: 0,
    url: "https://freefontsdownload.net/free-consolas-font-33098.htm",
    src: "fonts/Consolas/Consolas",
    extensions: ["ttf"],
  },
  {
    displayName: "Monoid",
    familyName: "Monoid Regular",
    ligatures: true,
    price: 0,
    url: "https://github.com/larsenwork/monoid",
    src: "fonts/Monoid/Monoid-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Hasklig",
    familyName: "Hasklig",
    ligatures: true,
    price: 0,
    url: "https://github.com/i-tu/Hasklig",
    src: "fonts/Hasklig/Hasklig-Regular",
    extensions: ["otf"],
  },
  {
    displayName: "Ubuntu Mono",
    familyName: "Ubuntu Mono",
    ligatures: false,
    price: 0,
    url: "https://fonts.google.com/specimen/Ubuntu+Mono?query=Ubuntu",
    src: "fonts/UbuntuMono/UbuntuMono-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Roboto Mono",
    familyName: "Roboto Mono",
    ligatures: false,
    price: 0,
    url: "https://fonts.google.com/specimen/Roboto+Mono",
    src: "fonts/Roboto_Mono/RobotoMono-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Lilex",
    familyName: "Lilex",
    ligatures: true,
    price: 0,
    url: "https://github.com/mishamyrt/Lilex",
    src: "fonts/Lilex/Lilex-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Fantasque Sans",
    familyName: "Fantasque Sans Mono",
    ligatures: true,
    price: 0,
    url: "https://github.com/belluzj/fantasque-sans",
    src: "fonts/Fantasque_Sans/FantasqueSansMono-Regular",
    extensions: ["woff", "woff2"],
  },
  {
    displayName: "Cascadia Code",
    familyName: "Cascadia Code",
    ligatures: true,
    price: 0,
    url: "https://github.com/microsoft/cascadia-code",
    src: "fonts/Cascadia_Code/CascadiaCode",
    extensions: ["woff2"],
  },
  {
    displayName: "Iosevka",
    familyName: "Iosevka",
    ligatures: false,
    price: 0,
    url: "https://github.com/be5invis/Iosevka",
    src: "fonts/Iosevka/Iosevka-regular",
    extensions: ["woff2"],
  },
  {
    displayName: "IBM Plex Mono",
    familyName: "IBM Plex Mono",
    ligatures: false,
    price: 0,
    url: "https://github.com/IBM/plex",
    src: "fonts/IBM_Plex_Mono/IBMPlexMono-Regular",
    extensions: ["woff", "woff2"],
  },
];

const formats = {
  woff: "woff",
  woff2: "woff2",
  ttf: "truetype",
  otf: "opentype",
};

/**
 * 
 * o0O s5S z2Z !|l1Iij {([|})] .,;: ``''"" 
a@#* vVuUwW <>;^°=-~ öÖüÜäÄßµ \/\/ 
the quick brown fox jumps over the lazy dog
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
0123456789 &-+@ for (int i=0; i<j; ++i) { }
 * 
 */
export const generateFontFace = (): string => {
  let styles = "";

  fontFamilies.forEach((font) => {
    const src = font.extensions.reduce((acc, extension, index) => {
      acc += `url(${font.src}.${extension}) format('${formats[extension]}')`;
      acc += index + 1 === font.extensions.length ? ";" : ",";
      return acc;
    }, "");
    
>>>>>>> hotfix
    styles += `
    @font-face {
      font-family: '${font.familyName}';
      src: ${src}
      font-weight: 400;
      font-style: normal;
<<<<<<< HEAD
    }`
  })
  return styles;
}
=======
    }\n`;
  });

  return styles;
};
>>>>>>> hotfix
