<script>
	export let step = 1;
	export let title = '';
	export let description = '';
</script>

<div class="flex flex-col items-center text-center">
	<div
		class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white"
	>
		{step}
	</div>
	<h3 class="mb-2 font-serif text-xl font-semibold">{title}</h3>
	<p class="text-sm text-zinc-700">{description}</p>
</div>
