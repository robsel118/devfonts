<script>
    import {
        Select,
        SelectItem,
        Checkbox,
        Toggle,
    } from "carbon-components-svelte";
    import { modes } from "../utils/modes";
    import { themes } from "../utils/themes";
	import { theme, mode } from "../stores";


    export let filterByLigatures;
	export let filterByFreeFonts;
	export let filterByPinnedFonts;
</script>

<style>
    .menu {
        display: grid;
        gap: 1.5rem;
        margin: 2rem 0;
        padding: 1rem 0;
        border-bottom: 1px solid #ddd;
    }


	@media (min-width: 640px) {

		.menu {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

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
    <Toggle
        labelText="Display only pinned fonts"
        bind:toggled={filterByPinnedFonts} />
</div>
