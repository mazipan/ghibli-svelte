<script>
	import ListFilm from './ListFilm.svelte';
	export let filmStatic;
</script>

<style>
	.app{
		margin: auto;
    max-width: 800px;
	}
	header{
		display: flex;
    flex-direction: row;
    align-items: center;
		justify-content: space-between;

		background-color: var(--theme);
		margin-bottom: 1em;
    color: #fff;
    font-weight: 700;
    max-width: 800px;
    padding: 10px;
	}

	a{
		color: #fff;
	}

</style>

<div class="app">
	<header>
		<h1>👻 Ghibli Svelte</h1>
		<a href="https://github.com/mazipan/ghibli-svelte">Github</a>
	</header>

	<ListFilm {filmStatic}></ListFilm>
</div>
