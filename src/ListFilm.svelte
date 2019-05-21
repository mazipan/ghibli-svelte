<script>
export let filmStatic;
let items;

$: fetch(`https://ghibliapi.herokuapp.com/films`)
		.then(r => r.json())
		.then(data => {
			let hash = new Map();
			data.concat(filmStatic).map(function(obj) {
				hash.set(obj.id, Object.assign(hash.get(obj.id) || {}, obj))
			});

			items = Array.from(hash.values());
		});
</script>

{#if items}
	<div class="wrapper">
		{#each items as item, i}
			<div class="item">
				<img alt={item.title} src={item.image} class="img"/>
				<h2>{item.title} ({item.release_date})</h2>
			</div>
		{/each}
	</div>
{:else}
	<p class="loading">loading...</p>
{/if}

<style>
.wrapper{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.item{
	margin: 1em .5em;
  width: 182px;
}
.img{
	display: block;
	border-radius: .5em;
	width: 182px;
	height: 268px;
}
</style>