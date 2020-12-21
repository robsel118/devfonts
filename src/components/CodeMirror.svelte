<script lang="ts">
  import { onMount } from "svelte";
  let editor;
  let cm;

  export let mode: string;
  export let value: string;
  export let theme: string;
  export let font: string;

  onMount(() => {
    cm = new CodeMirror.fromTextArea(editor, {
      value: value,
      lineNumbers: true,
      mode: mode,
      theme: theme,
      lineWrapping: false,
    });

    cm.setValue(value);
    cm.getWrapperElement().style["font-family"] = `${font}, monospace`;

    document.addEventListener(
      "mode-loaded",
      () => {
        cm.setOption("mode", mode);
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

  $: cm && cm.setOption("theme", theme);
  $: cm && addScript(mode);
</script>

<style lang="scss">
  .wrapper {
    max-width: 450px;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
  }
</style>

<div class="wrapper">
  <textarea style="font-family: {font}" bind:this={editor}>This text area will
    not appear</textarea>
</div>
