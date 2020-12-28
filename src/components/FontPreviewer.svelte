<script lang="ts">
    import CodeMirror from "./CodeMirror.svelte";
    import type { Font } from "../utils/fonts";

    export let font: Font;
</script>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        max-width: 30vw;
        padding-bottom: 3rem;
        width: 100%;
    }

    .header {
        justify-content: space-between;
    }
    .font-title {
        font-size: 2rem;
    }
    .chip {
        border: 1px solid blue;
        border-radius: 30px;
        padding: 0.25rem 0.5rem;
    }

    .details {
        gap: 1.5rem;
        margin: 1rem 0;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>

<div class="wrapper">
    <div class="flex-row header">
        <p class="font-title" style="font-family: {font.familyName}">
            {font.displayName}
        </p>
        <a href={font.url}>Get Font</a>
    </div>
    <div class="flex-row details">
        <p class="chip">
            {#if font.price === 0}free{:else}{font.price}${/if}
        </p>
        {#if font.ligatures}
            <p class="chip">Ligatures</p>
        {/if}
    </div>
    <CodeMirror {font} />
</div>
