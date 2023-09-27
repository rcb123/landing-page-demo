<script lang="ts">
</script>

<div class="px-6 pt-8 pb-6 md:pt-24 md:pb-20 overflow-x-clip">
	<section class="mx-auto relative pb-[55px] md:pb-0 max-w-screen-xl">
		<div
			class="grid grid-cols-1 gap-x-4 gap-y-16 pt-16 pb-11 md:grid-cols-2 md:px-6 md:pt-32 md:pb-8"
		>
			<!-- Hero Content -->
			<div>
				<h1 class="text-5xl font-bold mb-4">
					<span class="gradient-text">Crescent:</span><br />AI-Driven Software Development Evolved
				</h1>

				<p>
					Harness the transformative power of AI in every phase of your software lifecycle. From
					inception to deployment, Crescent streamlines, optimizes, and elevates. Welcome to the
					future of intuitive software creation.
				</p>
			</div>

			<div class="relative place-items-stretch grid h-full overflow-hidden overflow-x-auto">
				<div
					class="code place-self-center border rounded-lg border-neutral-800 w-full h-auto flex flex-col gap-1 bg-[#161A1D] pt-3 pb-6"
				>
					<div class="flex flex-row gap-3 px-6 py-2">
						<div class="flex items-center justify-center w-3 h-3 rounded-full bg-[#ef4444]" />
						<div class="flex items-center justify-center w-3 h-3 rounded-full bg-[#eab208]" />
						<div class="flex items-center justify-center w-3 h-3 rounded-full bg-[#22c55e]" />
					</div>
					<div class="">
						<pre data-prefix="$"><code>npm i crescent</code></pre>
						<pre data-prefix=">" class="text-[#cc9bfd]"><code>installing...</code></pre>
						<pre data-prefix=">" class="text-[#a69bfd]"><code>Done!</code></pre>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.code pre[data-prefix]:before {
		content: attr(data-prefix);
		content: attr(data-prefix);
		display: inline-block;
		text-align: right;
		width: 2.15rem;
		opacity: 0.5;
	}

	.code pre:before {
		content: '';
		margin-right: 2ch;
	}

	.gradient-text {
		background: linear-gradient(122.25deg, hsl(270, 97%, 80%) 12%, hsl(242, 97%, 80%) 70.98%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
