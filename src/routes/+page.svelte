<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import StepCard from '$lib/components/StepCard.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FeaturedClasses from '$lib/components/FeaturedClasses.svelte';

	const testimonials = [
		{
			id: 1,
			quote:
				'Chef Jules made cooking fun and approachable. I now cook dinner with confidence every night!',
			name: 'Sarah M.',
			role: 'Beginner Cook'
		},
		{
			id: 2,
			quote: 'I’ve never baked a cake before, and now I’m the go-to birthday baker for my family!',
			name: 'Josh L.',
			role: 'Baking Basics Student'
		},
		{
			id: 3,
			quote: 'The Thai cooking class was incredible — I finally understand how to balance flavors!',
			name: 'Priya R.',
			role: 'Thai Cuisine Enthusiast'
		},
		{
			id: 4,
			quote:
				'Jules teaches with such patience and passion. Her classes gave me the skills and confidence I was missing.',
			name: 'Daniel T.',
			role: 'Home Chef'
		},
		{
			id: 5,
			quote:
				'A perfect introduction to cooking. Chef Jules made everything simple without talking down to us.',
			name: 'Melina V.',
			role: 'Class Attendee'
		}
	];
</script>

<main class="bg-orange-50">
	<!-- Hero section -->
	<section id="home" class="relative h-2/3 w-screen py-12">
		<div
			class="absolute inset-0 z-10 flex h-full w-full flex-col justify-center bg-zinc-900/50 from-white from-40% to-transparent to-60% text-white sm:px-6 md:bg-gradient-to-r md:text-neutral-800"
		>
			<div
				class="flex h-full w-full flex-col items-center justify-center space-y-6 text-center sm:h-[16vh] sm:w-[60%] sm:justify-between"
			>
				<div class="w-full">
					<h4 class="pb-4 font-serif text-3xl font-bold md:text-4xl">Cook with Confidence</h4>
					<p class="sm:w-[80%]">
						Join <strong class="font-serif font-bold italic">Chef Jules' </strong> hands-on classes and
						discover the joy of cooking.
					</p>
				</div>
				<div class="flex w-[70%] justify-center">
					<a
						href="#classes"
						class="rounded-lg bg-teal-600 px-[30px] py-[8px] font-bold text-white hover:bg-teal-700"
						>View Classes</a
					>
				</div>
			</div>
		</div>
		<div class="relative h-screen overflow-hidden">
			<img
				src="https://cdn.jsdelivr.net/gh/lucasw4/image-hosting/ChatGPT%20Image%20Apr%2023,%202025,%2007_39_10%20PM.png
"
				alt=""
				class="h-full w-full object-cover"
			/>
		</div>
	</section>

	<!-- Divider -->
	<div class="my-12 flex justify-center">
		<div class="h-1 w-16 rounded-full bg-teal-600"></div>
	</div>

	<!-- About Section -->
	<section id="about" class="mx-auto max-w-4xl px-4 py-12">
		<!-- Top Row: Image + Vertically Centered Heading -->
		<div class="mb-6 flex items-center gap-4">
			<img
				src="https://cdn.jsdelivr.net/gh/lucasw4/image-hosting/ChatGPT%20Image%20Apr%2023,%202025,%2007_39_10%20PM.png
"
				alt="Chef Jules"
				class="h-24 w-24 rounded-md object-cover sm:h-28 sm:w-28"
			/>
			<div class="flex flex-col justify-center">
				<h2 class="font-serif text-3xl font-bold tracking-tight text-gray-900">Meet Chef Jules</h2>
			</div>
		</div>

		<!-- Bottom Text Block -->
		<div class="space-y-4">
			<p class="text-base leading-relaxed text-gray-600">
				Hi, I'm Chef Jules — a professionally trained chef with a passion for helping home cooks
				master the kitchen. My cooking classes are built around simple techniques, fresh
				ingredients, and a lot of joy. Whether you're learning to boil pasta or bake bread, I’m here
				to help you thrive.
			</p>
			<a
				href="/about"
				class="inline-block font-medium text-teal-600 transition hover:text-yellow-700 hover:underline"
			>
				Learn more about my journey →
			</a>
		</div>
	</section>

	<!-- Divider -->
	<div class="flex justify-center bg-white py-12">
		<div class="h-1 w-16 rounded-full bg-teal-600"></div>
	</div>

	<!-- Featured Classes Section -->
	<FeaturedClasses />

	<!-- Divider -->
	<div class="flex justify-center pb-12">
		<div class="h-1 w-16 rounded-full bg-teal-600"></div>
	</div>

	<!-- Testimonials -->
	<section id="reviews" class="mx-auto max-w-6xl px-4 py-12">
		<h2 class="mb-10 text-center font-serif text-3xl font-bold">What Students Are Saying</h2>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as t}
				<div class="rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm">
					<p class="mb-4 text-gray-700 italic">"{t.quote}"</p>
					<div class="text-sm font-semibold text-gray-900">— {t.name}, {t.role}</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Divider -->
	<div class="flex justify-center bg-white py-12">
		<div class="h-1 w-16 rounded-full bg-teal-600"></div>
	</div>

	<!-- How to boook section -->
	<section id="howto" class="mx-auto max-w-6xl px-4 py-12">
		<h2 class="mb-4 text-center font-serif text-3xl font-bold">How to Book a Class</h2>
		<div class="grid gap-8 sm:grid-cols-3">
			<StepCard
				step={1}
				title="Browse Classes"
				description="Explore a variety of classes for different skill levels and cuisines."
			/>
			<StepCard
				step={2}
				title="Book Your Spot"
				description="Reserve your place in one of the cooking classes"
			/>
			<StepCard
				step={3}
				title="Cook and Learn"
				description="Join Chef Jules in the kitchen and learn how to cook amazing meals."
			/>
		</div>
	</section>

	<!-- Reserve Spot Divider -->
	<section id="reserve">
		<div
			class="flex flex-col items-center justify-center space-y-4 border-16 border-teal-600 bg-white py-6"
		>
			<h4 class="font-serif text-2xl font-semibold text-zinc-900">Reserve Your Spot Now</h4>
			<a href="#classes" class="">
				<button
					class="focus:ring-opacity-75 rounded-lg bg-teal-500 px-4 py-2 font-sans font-semibold text-white hover:bg-teal-600 focus:ring-teal-400 focus:outline-none"
					>View Classes</button
				>
			</a>
		</div>
	</section>

	<!-- Divider -->
	<div class="flex justify-center bg-white pt-12 pb-6">
		<div class="h-1 w-16 rounded-full bg-teal-600"></div>
	</div>

	<!-- Contact Section -->
	<section id="contact">
		<ContactForm />
	</section>

	<!-- CTA Section -->
	<section class="relative h-1/3 w-full">
		<img
			src="https://cdn.jsdelivr.net/gh/lucasw4/image-hosting@main/cutting-board-hero.jpg"
			alt=""
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 z-10 bg-black/50"></div>
		<div
			class="absolute top-1/3 left-0 z-20 flex w-full flex-col items-center justify-center font-serif text-white"
		>
			<h3 class="w-full text-center text-2xl font-semibold tracking-wide">Cook with Confidence</h3>
			<div class="flex h-full w-1/3 flex-col items-center sm:justify-between">
				<h5 class="mb-2 hidden text-lg font-semibold sm:visible">Book with Chef Jules now</h5>
				<button
					class="focus:ring-opacity-75 rounded-lg bg-red-500 px-4 py-2 font-sans font-semibold hover:bg-red-600 focus:ring-red-400 focus:outline-none"
					>Book Now</button
				>
			</div>
		</div>
	</section>

	<Footer />
</main>
