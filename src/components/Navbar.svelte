<script lang="ts">
	import { onMount } from 'svelte';

	let navEl: HTMLElement;

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 3) {
				navEl.classList.add('bg-midnight-800');
			} else {
				navEl.classList.remove('bg-midnight-800');
			}
		});
	});
</script>

<nav
	class="transition duration-300 fixed top-0 left-0 right-0 z-50 bg-opacity-[0.85] backdrop-blur-sm"
	bind:this={navEl}
>
	<div class="mx-auto max-w-7xl px-2 md:px-6">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center md:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<a
						class="transition duration-100 block rounded-md py-1 px-2 focus:outline-none md:-ml-2 focus:border-b"
						href="/"
					>
						<span class="text-xl leading-6 font-bold tracking-wide">🌙 Crescent</span>
					</a>
				</div>
				<div class="hidden flex-1 md:ml-4 lg:block">
					<div class="flex space-x-3">
						<a
							class="transition duration-100 flex items-center whitespace-nowrap rounded-md p-2 font-medium text-base text-bone focus:outline-none focus:border-b hover:bg-midnight-600 focus:border-b-bone"
							href="/"
						>
							Products
						</a>
						<a
							class="transition duration-100 flex items-center whitespace-nowrap rounded-md p-2 font-medium text-base text-bone focus:outline-none focus:border-b hover:bg-midnight-600 focus:border-b-bone"
							href="/"
						>
							Enterprise
						</a>
						<a
							class="transition duration-100 flex items-center whitespace-nowrap rounded-md p-2 font-medium text-base text-bone focus:outline-none focus:border-b hover:bg-midnight-600 focus:border-b-bone"
							href="/"
						>
							Resources
						</a>
						<a
							class="transition duration-100 flex items-center whitespace-nowrap rounded-md p-2 font-medium text-base text-bone focus:outline-none focus:border-b hover:bg-midnight-600 focus:border-b-bone"
							href="/"
						>
							Contact
						</a>
					</div>
				</div>
				<div class="hidden items-center space-x-3 pr-2 md:ml-6 md:pr-0 lg:ml-0 lg:flex">
					<!-- Right Button -->
				</div>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
				<button
					class="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-white"
					type="button"
					aria-expanded="false"
					><span class="sr-only">Open main menu</span><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						class="block h-6 w-6"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/></svg
					></button
				>
			</div>
		</div>
	</div>
</nav>
