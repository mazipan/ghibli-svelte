<script>
	// import { onMount } from 'svelte';
	import ListFilm from './ListFilm.svelte';
	export let filmStatic;

	// simple router change detection
	// async function hashchange() {
	// 	const path = window.location.hash.slice(1);
	// 	console.log('path: ', path)
	// }

	// onMount(hashchange);
</script>

<style>
	header{
		background-color: var(--theme);
		padding: 1em;
		margin-bottom: 1em;
	}
	h1 {
		color: #fff;
	}
</style>

<header>
	<h1>👻 Ghibli Svelte</h1>
</header>

<ListFilm {filmStatic}></ListFilm>

<!-- <svelte:window on:hashchange={hashchange}/> -->
