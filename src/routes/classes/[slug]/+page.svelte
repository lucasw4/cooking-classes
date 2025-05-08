<script lang="ts">
	export let data: {
		id: string;
		title: string;
		description: string;
		longDescription: string;
		image: string;
		level: string;
		duration: string;
		price: string;
		sessions: { date: string; time: string }[];
	};

	console.log(data);
</script>

{#if data}
	<section class="mx-auto max-w-4xl px-4 py-16">
		<img src={data.image} alt={data.title} class="mb-8 h-64 w-full rounded-lg object-cover" />

		<h1 class="mb-4 text-4xl font-bold">{data.title}</h1>
		<p class="mb-6 text-lg text-gray-600">{data.longDescription}</p>

		<ul class="mb-6 space-y-1 text-sm text-gray-500">
			<li><strong>Level:</strong> {data.level}</li>
			<li><strong>Duration:</strong> {data.duration}</li>
			<li><strong>Price:</strong> {data.price}</li>
		</ul>

		{#if data.sessions?.length}
			<h2 class="mb-2 text-xl font-semibold">Upcoming Sessions</h2>
			<ul class="space-y-2">
				{#each data.sessions as session}
					<li class="flex items-center justify-between rounded-md border p-4">
						<span>{session.date} @ {session.time}</span>
						<a
							href={'https://square.link/u/MtvBMRnK'}
							class="rounded bg-yellow-500 px-4 py-1 text-sm text-white transition hover:bg-yellow-600"
						>
							Book
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</section>
{:else}
	<p class="py-16 text-center">Sorry, this class couldn't be loaded.</p>
{/if}
