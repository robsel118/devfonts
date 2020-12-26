<script lang="ts">
	import { Select, SelectItem } from "carbon-components-svelte";
	import "carbon-components-svelte/css/g10.css";
	import FontPreviewer from "./components/FontPreviewer.svelte";
	import { generateFontFace } from "./utils/fonts";
	import { modes } from "./utils/modes";
	import { themes } from "./utils/themes";
	import { theme, mode } from "./stores";
	import { fontFamilies } from "./utils/fonts";
	$: styles = generateFontFace();
</script>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	:global(:root) {
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

{@html `<style>${styles}</style>`}

<main>
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
		{#each fontFamilies as fontFamily}
			<FontPreviewer font={fontFamily} />
		{/each}
	</div>
</main>
