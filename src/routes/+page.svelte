<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="h-screen">
	<!-- Navbar -->
	<Navbar />

	<!-- About section -->
	<section class="relative h-2/3 w-screen">
		<div
			class="absolute inset-0 flex h-full w-full flex-col justify-center bg-gradient-to-r from-white from-40% to-transparent to-60% px-6 text-neutral-800"
		>
			<div class="flex h-[16vh] w-[60%] flex-col justify-between">
				<div>
					<h4 class="font-serif text-4xl font-bold">Cook with Confidence</h4>
					<p class="w-[80%]">
						Cook with <strong class="font-serif font-bold italic">Chef Jules </strong> and learn how
						to make <strong class="font-serif">delicious</strong> meals in a fun environment!
					</p>
				</div>
				<div class="flex w-[70%] justify-center">
					<a href="#" class="rounded-lg bg-teal-600 p-[8px] text-white hover:bg-teal-700"
						>View Classes</a
					>
				</div>
			</div>
		</div>
		<img
			src="https://cdn.jsdelivr.net/gh/lucasw4/image-hosting/ChatGPT%20Image%20Apr%2023,%202025,%2007_39_10%20PM.png
"
			alt=""
			class="h-full object-cover"
		/>
	</section>
	<!-- Hero section -->
	<section class="relative h-1/3 w-full">
		<img
			src="https://cdn.jsdelivr.net/gh/lucasw4/image-hosting@main/cutting-board-hero.jpg"
			alt=""
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 z-10 bg-black/50"></div>
		<div class="absolute top-1/4 left-8 z-20 flex items-center font-serif text-white">
			<h3 class="w-2/3 text-7xl font-semibold tracking-wide">Cook with Confidence</h3>
			<div class="me-16 flex h-full w-1/3 flex-col items-center justify-between">
				<h5 class="mb-2 text-lg font-semibold">Book with Chef Jules now</h5>
				<button
					class="focus:ring-opacity-75 rounded-lg bg-red-500 px-4 py-2 font-sans font-semibold hover:bg-red-600 focus:ring-red-400 focus:outline-none"
					>Book Now</button
				>
			</div>
		</div>
	</section>

	<!-- About section -->
	<section></section>
</main>
