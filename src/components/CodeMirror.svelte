<script lang="ts">
  import { onMount } from 'svelte';
  let editor;
  let cm;
  export let mode: string;
  export let value: string;
  export let theme: string;
	onMount(() => {
		cm = new CodeMirror.fromTextArea(editor, {
			value: value,
			lineNumbers: true,
			mode: mode,
			theme: theme,
			lineWrapping: false,
    });
    
    cm.setValue("function myScript(){return 100;}\n");
    document.addEventListener('mode-loaded', ()=>{
      cm.setOption('mode', mode);
      cm.refresh();
      console.log(cm)
    }, false);
  });
  
  $: cm && cm.setOption('theme', theme);
  

  function addScript( mode ) {
		console.log(mode +' added')
		var script = document.createElement( 'script' );
		script.setAttribute( 'src', `https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.58.2/mode/${mode}/${mode}.min.js` );
		script.setAttribute( 'type', "text/javascript" );
		script.setAttribute( 'onLoad', 'document.dispatchEvent(new CustomEvent("mode-loaded"))' );
		document.getElementsByTagName('head')[0].appendChild(script);
    
	}
	$: cm && addScript(mode)

</script>

<textarea class="test" bind:this={editor}></textarea>