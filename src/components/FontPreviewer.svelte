<script lang="ts">
    import { Tag, TooltipIcon } from "carbon-components-svelte";
    import Compare32 from "carbon-icons-svelte/lib/Compare32";
    import CodeMirror from "./CodeMirror.svelte";
    import type { Font } from "../utils/fonts";

    export let font: Font;
</script>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        max-width: 45%;
        padding-bottom: 3rem;
        width: 100%;
    }

    .header {
        justify-content: space-between;
    }
    .font-title {
        font-size: 2rem;
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
        <a href={font.url}><p
                class="font-title"
                style="font-family: {font.familyName}, monospace">
                {font.displayName}
            </p></a>

        <TooltipIcon tooltipText="Add font to the compare list">
            <Compare32 />
        </TooltipIcon>
    </div>
    <div class="flex-row details">
        <Tag type="green">
            {#if font.price === 0}free{:else}{font.price}${/if}
        </Tag>
        {#if font.ligatures}
            <Tag type="purple">Ligatures</Tag>
        {/if}
    </div>
    <CodeMirror {font} />
</div>
