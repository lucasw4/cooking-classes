<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-100 px-4 py-10 text-gray-700">
	<div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
		<!-- Branding -->
		<div class="text-center sm:text-left">
			<h3 class="font-serif text-xl font-bold text-gray-800">Chef Jules</h3>
			<p class="text-sm text-gray-500">Cooking with confidence, one class at a time.</p>
		</div>

		<!-- Navigation -->
		<nav class="flex gap-6 text-sm">
			<a href="/" class="hover:text-yellow-600">Home</a>
			<a href="#about" class="hover:text-yellow-600">About</a>
			<a href="#classes" class="hover:text-yellow-600">Classes</a>
			<a href="#products" class="hover:text-yellow-600">Products</a>
		</nav>

		<!-- Social (optional) -->
		<div class="flex gap-4">
			<a href="https://instagram.com" target="_blank" aria-label="Instagram">
				<svg
					class="h-5 w-5 text-gray-500 hover:text-yellow-600"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
					/>
				</svg>
			</a>
			<!-- Add other social icons as needed -->
		</div>
	</div>

	<!-- Copyright -->
	<div class="mt-8 text-center text-xs text-gray-400">
		© {currentYear} Chef Jules. All rights reserved.
	</div>
</footer>
