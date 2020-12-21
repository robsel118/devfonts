<script lang="ts">
	import { Select, SelectItem } from "carbon-components-svelte";
	import "carbon-components-svelte/css/g10.css";
	import CodeMirror from "./components/CodeMirror.svelte";
	import { generateFontFace } from "./utils/fonts";
	import { modes } from "./utils/modes";
	import { themes } from "./utils/themes";
	import { theme, mode } from "./stores";

	$: style = generateFontFace();
</script>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(:root){
		font-size: 18px;
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
		href={`https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/${$theme}.css`} />
</svelte:head>

<main {style}>
	<Select bind:selected={$theme} light labelText="Theme">
		{#each themes as theme}
			<SelectItem value={theme} text={theme} />
		{/each}
	</Select>
	<Select bind:selected={$mode} light labelText="Mode">
		{#each modes as mode}
			<SelectItem value={mode} text={mode} />
		{/each}
	</Select>

	<div class="grid">
		<CodeMirror
			value="const foo => 'bar'"
			mode={$mode}
			font="Fira Code"
			theme={$theme} />
		<CodeMirror
			value="const foo => 'bar'"
			mode={$mode}
			font="Source Code Pro"
			theme={$theme} />
		<CodeMirror
			value="const foo => 'bar'"
			mode={$mode}
			font="Fira Code"
			theme={$theme} />
		<CodeMirror
			value="const foo => 'bar'"
			mode={$mode}
			font="Source Code Pro"
			theme={$theme} />
	</div>
</main>
