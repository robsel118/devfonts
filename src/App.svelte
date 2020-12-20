<script lang="ts">
	import { Select, SelectItem } from "carbon-components-svelte";
	import "carbon-components-svelte/css/g10.css";
	import CodeMirror from "./components/CodeMirror.svelte";
	import { generateFontFace } from "./utils/fonts";

	let modes = ["javascript", "css", "clojure"];
	let selectedMode = "javascript";

	let themes = ['dracula', 'ayu-dark', 'idea']
	let selectedTheme = 'dracula';

	$: style = generateFontFace();

	
</script>

<style>


	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		font-family: Fira Code, Arial, Helvetica, sans-serif;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<svelte:head>
	<link
		rel="stylesheet"
		href={`https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/${selectedTheme}.css`} />
</svelte:head>
<main {style}>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
	<Select bind:selected={selectedTheme} light labelText="Carbon theme">
		{#each themes as theme}
			<SelectItem value={theme} text={theme} />
		{/each}
	</Select>
	<Select bind:selected={selectedMode} light labelText="Carbon theme">
		{#each modes as mode}
			<SelectItem value={mode} text={mode} />
		{/each}
	</Select>

	<p>you have chose {selectedMode}</p>
	<CodeMirror value="const foo => 'bar'" mode={selectedMode} font="Fira Code" theme={selectedTheme}/>
</main>
