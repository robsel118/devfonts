<script lang="ts">
	import "carbon-components-svelte/css/g10.css";
	import FontPreviewer from "./components/FontPreviewer.svelte";
	import Menu from "./components/Menu.svelte";
	import { generateFontFace } from "./utils/fonts";

	import { theme, pinnedFonts } from "./stores";
	import { fontFamilies } from "./utils/fonts";
	import { Filter } from "./utils/filters";
	let filterByLigatures: false;
	let filterByFreeFonts: false;
	let filterByPinnedFonts: false;

	$: fontList = new Filter(fontFamilies)
		.byLigatures(filterByLigatures)
		.byFreeFonts(filterByFreeFonts)
		.byPinnedFonts(filterByPinnedFonts, $pinnedFonts)
		.getFonts();

	$: styles = generateFontFace();
</script>

<style>
	main {
		padding: 2em;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: 1200px;
		}
	}

	.list {
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

{@html `<style ✂prettier:content✂="JHtzdHlsZXN9"></style>`}

<main>
	<Menu bind:filterByPinnedFonts bind:filterByLigatures bind:filterByFreeFonts/>
	<div class="list">
		{#each fontList as fontFamily}
			<FontPreviewer font={fontFamily} />
		{/each}
	</div>
</main>
