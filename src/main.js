import App from './App.svelte';
import { data } from '../data/film.json';

const app = new App({
	target: document.body,
	props: {
		filmStatic: data
	}
});

export default app;