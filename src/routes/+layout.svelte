<script lang="ts">
	import '../app.css';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let themeStore = writable('system');
	let theme: string = '';

	themeStore.subscribe((value: string) => {
		theme = value;
	});

	const saveThemePreference = (theme: string) => {
		if (theme === 'system') {
			localStorage.removeItem('theme');
		} else {
			localStorage.setItem('theme', theme);
		}
		applyTheme();
	};

	const applyTheme = () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			themeStore.set('dark');
		} else {
			themeStore.set('light');
		}
	};

	onMount(() => {
		applyTheme();
	});

	setContext('saveThemePreference', saveThemePreference);
</script>

<div class={`${theme}`}>
	<slot />
</div>
