<script>
	import { getContext, getAllContexts } from 'svelte';
	let sun = '/icons8-sun-100.png';
	let night = '/icons8-night-100.png';
	let system = '/icons8-engineering-100.png';

	const saveThemePreference = getContext('saveThemePreference');
	/* a function to change theme via context */
	/**
	 * @param {string} theme
	 */
	function handleClick(theme) {
		saveThemePreference(theme);
	}
</script>

<div
	class="flex flex-col items-center justify-center min-h-screen bg-white dim:bg-slate-900 dark:bg-russian"
>
	<div class="bg-white dark:bg-bastille rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
		<h1 class="text-slate-900 dark:text-white mt-5 text-2xl font-bold tracking-tight text-center">
			Theme Selector
		</h1>
		<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
			Tiny theme switch made with Svelte and Tailwind
		</p>

		<div class="my-8 space-x-4 flex justify-center items-center">
			<button
				on:click={() => handleClick('light')}
				class="w-16 h-16 inline-flex items-center justify-center p-2 bg-primary dark:bg-indigo-500 rounded-md
				shadow-lg"
			>
				<img src={sun} alt="Light Mode" />
			</button>

			<button
				on:click={() => handleClick('dark')}
				class="w-16 h-16 inline-flex items-center justify-center p-2 bg-primary dark:bg-indigo-500 rounded-md
				shadow-lg"
			>
				<img src={night} alt="Dark Mode" />
			</button>
			<button
				on:click={() => handleClick('system')}
				class="w-16 h-16 inline-flex items-center justify-center p-2 bg-primary dark:bg-indigo-500 rounded-md
				shadow-lg"
			>
				<img src={system} alt="Dark Mode" />
			</button>
		</div>
		<footer class="text-xs text-slate-500 text-center m-0">
			All icons by
			<a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
		</footer>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
