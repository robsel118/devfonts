import { writable } from 'svelte/store';

export const mode = writable("javascript");
export const theme = writable("dracula");