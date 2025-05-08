<script>
	let name = '';
	let email = '';
	let message = '';
	let submitted = false;

	function handleSubmit() {
		submitted = true;
		name = email = message = '';
	}
</script>

<section class="mx-auto max-w-2xl bg-white px-4 py-12">
	<h2 class="mb-4 text-center font-serif text-3xl font-bold">Get in Touch with Chef Jules</h2>
	<p class="mb-10 text-center text-gray-600">
		Have questions about a class or just want to get in touch? Send me a message!
	</p>

	{#if submitted}
		<div class="border-teal 200 mb-6 rounded border bg-teal-50 p-4 text-center text-green-700">
			Thank you! I'll be in touch shortly.
		</div>
	{/if}

	<form on:submit|preventDefault={handleSubmit} class="space-y-6">
		<div>
			<label for="name" class="mb-1 block text-sm font-medium text-gray-700">Name</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				required
				class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
			/>

			<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
			<input
				type="text"
				id="email"
				bind:value={email}
				required
				class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
			/>
			<label for="message" class="mb-1 block text-sm font-medium text-gray-700">Message</label>
			<textarea
				id="message"
				rows="4"
				bind:value={message}
				required
				class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
			></textarea>
			<button
				type="submit"
				class="mt-4 rounded-md bg-teal-600 px-6 py-2 font-semibold text-white transition hover:bg-teal-700"
				>Send Message</button
			>
		</div>
	</form>
</section>
