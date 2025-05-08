<script>
	import { featuredClasses } from '$lib/data/classes.js';
</script>

<section class="mx-auto max-w-6xl px-4 py-12">
	<h1 class="mb-10 text-center font-serif text-3xl font-bold">Jule's Classes</h1>

	<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each featuredClasses as course}
			<div class="overflow-hidden rounded-lg bg-white shadow-md">
				<img src={course.image} alt={course.title} class="h-48 w-full object-cover" />
				<div class="flex flex-grow flex-col p-6">
					<h3 class="mb-2 text-xl font-semibold">{course.title}</h3>
					<p class="mb-4 text-gray-600">{course.description}</p>

					<!-- Class Details -->
					<ul class="mb-4 space-y-1 text-sm text-gray-500">
						<li><strong>Level:</strong> {course.level}</li>
						<li><strong>Duration:</strong> {course.duration}</li>
						<li><strong>Price:</strong> {course.price}</li>
					</ul>
					<a
						href={`/classes/${course.id}`}
						class="inline-block rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white transition hover:bg-teal-700"
					>
						Book Now
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>
