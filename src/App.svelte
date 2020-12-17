<script lang="ts">
	import { generateFontFace } from './utils/fonts';
	export let name: string;

	$: style = generateFontFace();
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		font-family: Fira Code, Arial, Helvetica, sans-serif;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main >
	<h1 {style}>Hello => {name}!</h1>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
</main>
