<script lang="ts">
	import "../app.css"
	import { gsap } from "gsap"
	import wlca from "../lib/assets/wlca.jpg"
	import wlca_donbosco from "../lib/assets/wlca_donbosco.jpg"
	import wlca_foundation from "../lib/assets/wlca_foundation_anniversary.jpg"
	import wlca_foundation2 from "../lib/assets/wlca_foundation_anniversary2.jpg"
	import choir from "../lib/assets/wlca_choir.jpg"
	import { ScrollTrigger } from "gsap/ScrollTrigger"
	import TextPlugin from "gsap/TextPlugin"

	gsap.registerPlugin(TextPlugin)

	const t1 = "Have you ever thought, what if all children gets good education?"
	const t2 = "Let's begin with our story."
	const t4 = "Unfortunately... This joy did not last."
	const t5 = "But set backs makes us stronger. Fast forward to today..."

	const fromToTween = (optFrom: GSAPTweenVars, optTo: GSAPTweenVars) => {
		return (element: HTMLElement) => {
			gsap.set(element, optFrom)
			gsap.to(element, optTo)
			setTimeout(() => ScrollTrigger.refresh(), 100)
		}
	}

	const typeWriter = (trigger: string, text: string, duration: number) => {
		return (element: HTMLElement) => {
			gsap.to(element, {
				duration: duration,
				text: text,
				stagger: 1,
				ease: "none",
				scrollTrigger: {
					trigger: trigger,
					start: "top center",
					toggleActions: "restart none none restart",
				},
			})
			setTimeout(() => ScrollTrigger.refresh(), 100)
		}
	}

	const cursorBlink = (element: HTMLElement) => {
		gsap.to(element, {
			opacity: 0,
			repeat: -1,
			yoyo: true,
			duration: 0.5,
			ease: "back.inOut",
		})
	}
</script>

<main class="w-full h-full">
	<section
		class="container gap-0 text-white l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
		id="t1"
	>
		<div>
			<span {@attach typeWriter("#t1", t1, 5)}></span>
			<span {@attach cursorBlink}>|</span>
		</div>
	</section>
	<section
		class="container gap-0 bg-white text-black l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
		id="t2"
		{@attach fromToTween(
			{ opacity: 0 },
			{
				opacity: 1,
				scrollTrigger: { trigger: "#t2", scrub: 1, end: "center top" },
			}
		)}
	>
		<div>
			<span {@attach typeWriter("#t2", t2, 2)}></span>
			<span {@attach cursorBlink}>|</span>
		</div>
	</section>
	<section
		class="container2 relative gap-20 text-white lg:text-3xl md:text-2xl font-[Lora] overflow-x-hidden"
		id="story1"
	>
		<img
			srcset={wlca_donbosco}
			src={wlca_donbosco}
			alt="wlca_donbosco"
			class="absolute z-0 opacity-10 object-cover inset-0 w-full h-full"
		/>
		<div
			class="flex flex-col gap-10 md:flex-row justify-center items-center relative"
		>
			<div
				class="flex flex-col mt-20 md:mt-0 justify-center items-center gap-5 md:w-[50%] text-center md:text-left w-full h-[50%] md:ml-10 md:mr-10"
			>
				<p>
					It all started with Father John Tamayo and a few teachers. Renting a
					building in Pailin Park at Rattanathibate, Nonthaburi and partenered
					with two associations - WLCA Thailand (The World Wide Language and
					Culture Association) and SPB (The Sinpibarn Education).
				</p>
				<p>
					With the two associations' help we received 90+ students. Joyous days
					indeed!
				</p>
			</div>
			<img
				src={wlca}
				srcset={wlca}
				alt="wlca_picture"
				id="image1"
				class="h-[50%] w-full md:w-[50%] md:h-screen rounded-3xl opacity-90"
				{@attach fromToTween(
					{
						xPercent: 100,
					},
					{
						xPercent: 0,
						scrollTrigger: {
							trigger: "#story1",
							scrub: 2,
							toggleActions: "restart none none restart",
						},
						yoyo: true,
						ease: "expo",
					}
				)}
			/>
		</div>
	</section>
	<section
		class="flex flex-col items-center w-full mt-20 gap-10 md:gap-20 p-3 overflow-x-hidden"
		id="good_times"
	>
		<img
			srcset={choir}
			src={choir}
			alt="wlca_choir"
			class="md:w-[50%] md:h-full"
			id="wlca_choir"
			{@attach fromToTween(
				{ xPercent: 100, opacity: 0 },
				{
					opacity: 1,
					xPercent: 0,
					scrollTrigger: {
						trigger: "#good_times",
						scrub: 2,
						end: "center center",
						start: "top center",
						endTrigger: "#wlca_choir",
					},
				}
			)}
		/>
		<img
			srcset={wlca_foundation}
			src={wlca_foundation}
			alt="wlca_foundation"
			class="md:w-[50%] md:h-full"
			id="wlca_foundation"
			{@attach fromToTween(
				{ xPercent: -100, opacity: 0 },
				{
					opacity: 1,
					xPercent: 0,
					scrollTrigger: {
						trigger: "#wlca_foundation",
						scrub: 2,
						end: "center center",
						start: "top center",
					},
				}
			)}
		/>
		<img
			srcset={wlca_foundation2}
			src={wlca_foundation2}
			alt="wlca_foundation2"
			class="md:w-[50%] md:h-full"
			id="wlca_foundation2"
			{@attach fromToTween(
				{ xPercent: 100, opacity: 0 },
				{
					opacity: 1,
					xPercent: 0,
					scrollTrigger: {
						trigger: "#wlca_foundation2",
						scrub: 2,
						end: "center center",
						start: "top center",
					},
				}
			)}
		/>
	</section>
	<section
		class="flex w-full h-full justify-center items-center gap-0 text-white l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
		id="t4"
	>
		<div>
			<span {@attach typeWriter("#t4", t4, 2.5)}></span>
			<span {@attach cursorBlink}>|</span>
		</div>
	</section>
	<section
		class="flex w-full h-full justify-center items-center gap-0 text-white l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
		id="t5"
	>
		<div>
			<span {@attach typeWriter("#t5", t5, 3)}></span>
			<span {@attach cursorBlink}>|</span>
		</div>
	</section>
</main>

<style scoped>
	@reference "tailwindcss";
	.container {
		@apply flex w-full h-full max-w-none justify-center items-center;
	}

	.container2 {
		@apply flex flex-col items-center w-full max-w-none h-full max-h-none;
	}
</style>
