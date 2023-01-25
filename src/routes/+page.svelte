<script>
	let sun = '/icons8-sun-100.png';
	let dim = '/icons8-sunset-100.png';
	let night = '/icons8-night-100.png';
	let system = '/icons8-engineering-100.png';
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
	<div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
		<h1 class="text-slate-900 dark:text-white mt-5 text-2xl font-bold tracking-tight text-center">
			Theme Selector
		</h1>
		<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
			Tiny theme switch made with Svelte and Tailwind (wip)
		</p>

		<div class="my-8 space-x-4 flex justify-between items-center">
			<button
				class="w-16 h-16 inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
			>
				<img src={sun} alt="Light Mode" />
			</button>
			<button
				class="w-16 h-16 inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
			>
				<img src={dim} alt="Dim Mode" />
			</button>
			<button
				class="w-16 h-16 inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
			>
				<img src={night} alt="Dark Mode" />
			</button>
			<button
				class="w-16 h-16 inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
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
	button {
		background-color: red;
	}
</style>
