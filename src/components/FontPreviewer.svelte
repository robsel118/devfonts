<script lang="ts">
    import CodeMirror from "./CodeMirror.svelte";
    import type { Font } from "../utils/fonts";

    export let font: Font;
</script>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        max-width: 450px;
        width: 100%;
    }
</style>

<div class="wrapper">
    <h1 style="font-family: {font.familyName}">{font.displayName}</h1>
    <CodeMirror {font} />
</div>
