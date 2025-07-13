<script lang="ts">
	import { gsap } from "gsap"
	import { ScrollTrigger } from "gsap/ScrollTrigger"
	import "../app.css"
	import { ScrollSmoother } from "gsap/ScrollSmoother"

	let { children } = $props()
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	$effect(() => {
		// on first load, we need to create the smoother
		ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			effects: false,
		})
	})
</script>

<div id="smooth-wrapper" class="h-full w-full">
	<div id="smooth-content" class="h-full w-full">
		{@render children()}
	</div>
</div>
