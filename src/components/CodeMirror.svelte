<script lang="ts">
  import { mode, theme } from "../stores";
  import { onMount } from "svelte";
  import type { Font } from "../utils/fonts";
  import { codeSnippet } from "../utils/fonts";

  let editor;
  let cm;

  export let font: Font;

  onMount(() => {
    cm = new CodeMirror.fromTextArea(editor, {
      value: codeSnippet,
      lineNumbers: true,
      mode: $mode,
      theme: $theme,
      lineWrapping: false,
      viewportMargin: Infinity,
      scrollbarStyle: 'null',
    });

    cm.setValue(codeSnippet);
    cm.getWrapperElement().style["font-family"] = `${font.familyName}, monospace`;
    cm.getWrapperElement().style["padding"] = "0.75rem 0.5rem";
    cm.getWrapperElement().style["height"] = "100%";
    cm.getWrapperElement().style["width"] = "100%";

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

  $: cm && cm.setOption("theme", $theme);
  $: cm && addScript($mode);
</script>

<style lang="scss">

  .wrapper {  
    border-radius: 12px;
    overflow: hidden;
  }
</style>

<div class="wrapper">
  <textarea bind:this={editor}>This text area will
    not appear</textarea>
</div>
