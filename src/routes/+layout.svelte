<script>
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen cl-bg-gradient">
	<div class="text-bone pt-[147px] md:pt-[64px]">
		<slot />
	</div>
</div>

<style>
	.cl-bg-gradient {
		background: radial-gradient(165% 30% at 50% 40%, #f7f7f72b 0.41%, rgba(15, 14, 42, 0) 100%),
			#0f0e2a;
	}
</style>
