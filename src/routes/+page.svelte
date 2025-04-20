<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="">
	<Navbar />
	<div class="relative h-[60vh] w-full">
		<img
			src="https://cdn.jsdelivr.net/gh/lucasw4/image-hosting@main/cutting-board-hero.jpg"
			alt=""
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 z-10 bg-black/50"></div>
		<div class="absolute top-[13vh] left-5 z-20 w-2/3 text-7xl font-semibold text-white">
			Cooking is a way of life, or someshit idk im not a philosopher
		</div>
	</div>
</main>
