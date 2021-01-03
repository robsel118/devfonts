import _ from 'lodash';

export interface Font {
  displayName: string;
  familyName: string;
  ligatures: boolean;
  price: number | string;
  url: string;
  src: string;
  extensions: string[];
}

const fonts: Font[] = [
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
    displayName: "Inconsolata",
    familyName: "Inconsolata",
    ligatures: false,
    price: 0,
    url: "https://fonts.google.com/specimen/Inconsolata",
    src: "fonts/Inconsolata/Inconsolata-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Anonymous Pro",
    familyName: "Anonymous Pro",
    ligatures: false,
    price: 0,
    url: "https://fonts.google.com/specimen/Anonymous+Pro",
    src: "fonts/AnonymousPro/AnonymousPro-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "JetBrains Mono",
    familyName: "JetBrains Mono",
    ligatures: true,
    price: 0,
    url: "https://github.com/JetBrains/JetBrainsMono",
    src: "fonts/JetBrainsMono/JetBrainsMono-Regular",
    extensions: ["woff2"],
  },
  {
    displayName: "Mononoki",
    familyName: "Mononoki",
    ligatures: false,
    price: 0,
    url: "https://github.com/madmalik/mononoki",
    src: "fonts/Mononoki/Mononoki-Regular",
    extensions: ["woff", "woff2"],
  },
  {
    displayName: "Victor Mono",
    familyName: "Victor Mono",
    ligatures: true,
    price: 0,
    url: "https://rubjo.github.io/victor-mono/",
    src: "fonts/VictorMono/VictorMono-Regular",
    extensions: ["woff", "woff2"],
  },
  {
    displayName: "Code Saver",
    familyName: "coder-saver",
    ligatures: false,
    price: 0,
    url: "https://fonts.adobe.com/fonts/code-saver/",
    src: "fonts/CodeSaver/CodeSaver-Regular",
    extensions: ["otf"],
  },
  {
    displayName: "Julia Mono",
    familyName: "Julia Mono",
    ligatures: true,
    price: 0,
    url: "https://juliamono.netlify.app/",
    src: "fonts/JuliaMono/JuliaMono-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Calling Code",
    familyName: "Calling Code",
    ligatures: false,
    price: 0,
    url: "https://www.dafont.com/calling-code.font",
    src: "fonts/CallingCode/CallingCode-Regular",
    extensions: ["otf"],
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
    ligatures: true,
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
  {
    displayName: "Office Code Pro",
    familyName: "Office Code Pro",
    ligatures: false,
    price: 0,
    url: "https://github.com/nathco/Office-Code-Pro",
    src: "fonts/OfficeCodePro/OfficeCodePro-Regular",
    extensions: ["woff", "woff2"],
  },
  {
    displayName: "Hack",
    familyName: "Hack",
    ligatures: false,
    price: 0,
    url: "https://sourcefoundry.org/hack/",
    src: "fonts/Hack/Hack-Regular",
    extensions: ["ttf"],
  },
  {
    displayName: "Menlo",
    familyName: "Menlo",
    ligatures: false,
    price: 0,
    url: "https://www.cufonfonts.com/font/menlo",
    src: "fonts/Menlo/Menlo-Regular",
    extensions: ["woff"],
  },
];

const formats = {
  woff: "woff",
  woff2: "woff2",
  ttf: "truetype",
  otf: "opentype",
};

export const codeSnippet = "o0O s5S z2Z !|l1Iij {([|})] .,;: ``''\"\" \n" +
  "a@#* vVuUwW <>;^°=-~ öÖüÜäÄßµ \/\/ \nthe quick brown fox jumps over the lazy dog" +
  "\nTHE QUICK BROWN FOX JUMPS OVER THE LAZY DOG\n0123456789 &-+@ for (int i=0; i<=j; ++i) { }\n" +
  "\n\nfonts.forEach(font => {\n" +
  "\n\tconst { name, price } = font;\n" +
  "\n\tif (price >= 20) {\n" +
  "\t\tconsole.log(`${name} is a deluxe font`);\n" +
  "\t}else if(price === 0)\n" +
  "\t\tconsole.log(`${name} is a free font`);\n" +
  "\t}\n" +
  "})"

export const generateFontFace = (): string => {
  let styles = "";

  fonts.forEach((font) => {
    const src = font.extensions.reduce((acc, extension, index) => {
      acc += `url(${font.src}.${extension}) format('${formats[extension]}')`;
      acc += index + 1 === font.extensions.length ? ";" : ",";
      return acc;
    }, "");

    styles += `
    @font-face {
      font-family: '${font.familyName}';
      src: ${src}
      font-weight: 400;
      font-style: normal;
      font-variant-ligatures: liga;
    }\n`;
  });

  return styles;
};

export const fontFamilies = _.sortBy(fonts, "displayName");