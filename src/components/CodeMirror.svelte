<script lang="ts">
  import { TooltipIcon } from "carbon-components-svelte";
  import Paste24 from "carbon-icons-svelte/lib/Paste24";
  import { mode, theme, snippet } from "../stores";
  import { onMount } from "svelte";
  import type { Font } from "../utils/fonts";

  let editor;
  let cm;

  export let font: Font;

  onMount(() => {
    cm = new CodeMirror.fromTextArea(editor, {
      value: $snippet,
      lineNumbers: true,
      mode: $mode,
      theme: $theme,
      lineWrapping: false,
      viewportMargin: Infinity,
      scrollbarStyle: "null",
    });

    cm.setValue($snippet);
    cm.getWrapperElement().className += " cm-custom";

    document.addEventListener(
      "mode-loaded",
      () => {
        cm.setOption("mode", $mode);
        cm.refresh();
      },
      false
    );
  });

  function addScript(mode) {
    const scriptSrc = `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.2/mode/${mode}/${mode}.min.js`;
    if (
      document
        .getElementsByTagName("head")[0]
        .querySelector(`script[src="${scriptSrc}"]`)
    )
      return;

    var script = document.createElement("script");
    script.setAttribute(
      "src",
      `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.2/mode/${mode}/${mode}.min.js`
    );
    script.setAttribute("type", "text/javascript");
    script.setAttribute(
      "onLoad",
      'document.dispatchEvent(new CustomEvent("mode-loaded"))'
    );
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function copyToEditors(){
    if(cm)
      snippet.set(cm.getValue())
  }



  $: cm && cm.setOption("theme", $theme);
  $: cm && addScript($mode);
  $: cm && cm.setValue($snippet);
</script>

<style lang="scss">
  .wrapper {
    border-radius: 12px;
    overflow: hidden;
    position: relative;

    &:hover {
      .fab {
        opacity: 1;
      }
    }
    .fab {
      z-index: 9;
      position: absolute;
      bottom: 10px;
      right: 10px;
      // opacity: 0;
      transition: opacity 0.2s ease-in-out;
      cursor: pointer;
      stroke: white;
    }
  }

  :global(div.CodeMirror.cm-custom) {
    padding: 0.5rem;
    font-family: var(--ff);
    height: 100%;
    width: 100%;
  }

  :glboal(.cm-custom) {
    width: 100%;
  }
</style>

<div class="wrapper" style="--ff: {font.familyName}, monospace">
  <textarea bind:this={editor}>This text area will not appear</textarea>
  <div class="fab">
    <TooltipIcon tooltipText="Copy code to all editors" direction="left" align="end" on:click={copyToEditors}>
      <Paste24 />
    </TooltipIcon>
  </div>
</div>
