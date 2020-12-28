import { writable } from 'svelte/store';
import { codeSnippet } from './utils/fonts';
import _ from 'lodash';


export const mode = writable("javascript");
export const theme = writable("dracula");
export const snippet = writable(codeSnippet)

function createPinnedFonts() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    add: (font: string): void => {
      update(fonts => _.union(fonts, [font]));
    },
    remove: (font: string): void => {
      update(fonts => _.without(fonts, font));
    }
  }
}

export const pinnedFonts = createPinnedFonts();
