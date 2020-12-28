<script lang="ts">
	import { Select, SelectItem } from "carbon-components-svelte";
	import "carbon-components-svelte/css/g10.css";
<<<<<<< HEAD
	import CodeMirror from "./components/CodeMirror.svelte";
	import { generateFontFace } from "./utils/fonts";

	let modes = ["javascript", "css", "clojure"];
	let selectedMode = "javascript";

	let themes = ['dracula', 'ayu-dark', 'idea']
	let selectedTheme = 'dracula';

	$: style = generateFontFace();

	
=======
	import FontPreviewer from "./components/FontPreviewer.svelte";
	import { generateFontFace } from "./utils/fonts";
	import { modes } from "./utils/modes";
	import { themes } from "./utils/themes";
	import { theme, mode } from "./stores";
	import { fontFamilies } from "./utils/fonts";
	$: styles = generateFontFace();
>>>>>>> hotfix
</script>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

<<<<<<< HEAD
	h1 {
		font-family: Fira Code, Arial, Helvetica, sans-serif;
=======
	:global(:root) {
		font-size: 18px;
>>>>>>> hotfix
	}
	@media (min-width: 640px) {
		main {
			max-width: 1024px;
		}
	}

	.grid {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}
</style>

<svelte:head>
	<link
		rel="stylesheet"
<<<<<<< HEAD
		href={`https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/${selectedTheme}.css`} />
</svelte:head>
<main>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
	<Select bind:selected={selectedTheme} light labelText="Carbon theme">
=======
		href={`https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/${$theme}.css`} />
</svelte:head>

{@html `<style>${styles}</style>`}

<main>
	<Select bind:selected={$theme} light labelText="Theme">
>>>>>>> hotfix
		{#each themes as theme}
			<SelectItem value={theme} text={theme} />
		{/each}
	</Select>
<<<<<<< HEAD
	<Select bind:selected={selectedMode} light labelText="Carbon theme">
=======

	<Select bind:selected={$mode} light labelText="Mode">
>>>>>>> hotfix
		{#each modes as mode}
			<SelectItem value={mode} text={mode} />
		{/each}
	</Select>

<<<<<<< HEAD
	<p>you have chose {selectedMode}</p>
	<CodeMirror value="const foo = 'bar'" mode={selectedMode} theme={selectedTheme}/>
=======
	<div class="grid">
		{#each fontFamilies as fontFamily}
			<FontPreviewer font={fontFamily} />
		{/each}
	</div>
>>>>>>> hotfix
</main>
