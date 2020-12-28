<script lang="ts">
    import { Tag, TooltipIcon } from "carbon-components-svelte";
    import Pin24 from "carbon-icons-svelte/lib/Pin24";
    import PinFilled24 from "carbon-icons-svelte/lib/PinFilled24";
    import CodeMirror from "./CodeMirror.svelte";
    import type { Font } from "../utils/fonts";
    import { pinnedFonts } from "../stores";
    import _ from "lodash";

    export let font: Font;
    $: isPinned = _.includes($pinnedFonts, font.displayName);

    function onPinClick() {
        if (isPinned) {
            pinnedFonts.remove(font.displayName);
        } else {
            pinnedFonts.add(font.displayName);
        }
    }
</script>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        max-width: clamp(450px, 40em, 90%);
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

<div class="wrapper" >
    <div class="flex-row header">
        <a href={font.url}><p
                class="font-title"
                style="font-family: {font.familyName}, monospace">
                {font.displayName}
            </p></a>

        <TooltipIcon
            tooltipText={`${isPinned ? 'Remove' : 'Add'} font to the compare list`}
            direction="left"
            align="end"
            on:click={onPinClick}>
            {#if isPinned}
                <PinFilled24 />
            {:else}
                <Pin24 />
            {/if}
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
