<script lang="ts">
	import { Select, SelectItem, Checkbox } from "carbon-components-svelte";
	import "carbon-components-svelte/css/g10.css";
	import FontPreviewer from "./components/FontPreviewer.svelte";
	import { generateFontFace } from "./utils/fonts";
	import { modes } from "./utils/modes";
	import { themes } from "./utils/themes";
	import { theme, mode } from "./stores";
	import { fontFamilies } from "./utils/fonts";
	import { Filter } from "./utils/filters";

	let filterByLigatures: false;
	let filterByFreeFonts: false;

	$: fontList = new Filter(fontFamilies)
		.byLigatures(filterByLigatures)
		.byFreeFonts(filterByFreeFonts)
		.getFonts();

	$: styles = generateFontFace();
</script>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: 1200px;
		}

		.menu {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}
	.menu {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
		padding: 1rem 0;
		border-bottom: 1px solid #ddd;
	}
</style>

<svelte:head>
	<link
		rel="stylesheet"
		href={`https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.52.2/theme/${$theme}.css`} />
</svelte:head>

{@html `<style>${styles}</style>`}

<main>
	<div class="menu">
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

		<Checkbox labelText="Ligatures" bind:checked={filterByLigatures} />
		<Checkbox labelText="Free Fonts" bind:checked={filterByFreeFonts} />
	</div>

	<div class="list">
		{#each fontList as fontFamily}
			<FontPreviewer font={fontFamily} />
		{/each}
	</div>
</main>
