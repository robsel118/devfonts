import { writable } from 'svelte/store';
import { codeSnippet } from './utils/fonts';
export const mode = writable("javascript");
export const theme = writable("dracula");
export const snippet = writable(codeSnippet)