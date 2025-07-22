<script lang="ts">
  import { CircleXIcon, XIcon } from "@lucide/svelte";
  import "../app.css";
  import "@fontsource-variable/montserrat";
  import "@fontsource-variable/open-sans";

  import { gsap, ScrollTrigger } from "../lib/gsap";
  import wlca from "$lib/assets/donbosco_logo.jpg";
  import wlca_donbosco from "../lib/assets/wlca_donbosco.jpg";
  import wlca_foundation from "../lib/assets/wlca_foundation_anniversary.jpg";
  import wlca_foundation2 from "../lib/assets/wlca_foundation_anniversary2.jpg";
  import choir from "../lib/assets/wlca_choir.jpg";
  import infinite1 from "../lib/assets/infinite1.jpg";
  import infinite2 from "../lib/assets/infinite2.jpg";
  import infinite3 from "../lib/assets/infinite3.jpg";
  import infinite4 from "../lib/assets/infinite4.jpg";
  import infinite5 from "../lib/assets/infinite5.jpg";
  import infinite6 from "../lib/assets/infinite6.jpg";
  import infinite7 from "../lib/assets/infinite7.jpg";
  import infinite8 from "../lib/assets/infinite8.jpg";
  import infinite9 from "../lib/assets/infinite9.jpg";
  import infinite10 from "../lib/assets/infinite10.jpg";
  import infinite11 from "../lib/assets/infinite11.jpg";
  import infinite12 from "../lib/assets/infinite12.jpg";
  import infinite13 from "../lib/assets/infinite13.jpg";
  import infinite14 from "../lib/assets/infinite14.jpg";
  import infinite15 from "../lib/assets/infinite15.jpg";
  import infinite16 from "../lib/assets/infinite16.jpg";
  import infinite17 from "../lib/assets/infinite17.jpg";
  import infinite18 from "../lib/assets/infinite18.jpg";
  import qrcode from "$lib/assets/qrcode.jpeg";
  import { onMount } from "svelte";
  import { disableButton } from "$lib/store/global.svelte";

  onMount(() => {
    disableButton.disableOff();
  });

  const t1 = "Have you ever thought, what if all children gets good education?";
  const t2 = "Let's begin with our story.";
  const t4 = "Unfortunately... This joy did not last.";
  const t5 = "But, set backs makes us stronger.";
  const t6 = "This is when we started the San Lorenzo Foundation Thailand!";
  const t7 = "And now, we ask for your help!";

  let donationOpen = $state(false);

  const fromToTween = (optFrom: GSAPTweenVars, optTo: GSAPTweenVars) => {
    return (element: HTMLElement) => {
      gsap.set(element, optFrom);
      gsap.to(element, optTo);
      gsap.delayedCall(2, () => ScrollTrigger.refresh());
    };
  };

  const pinDiv = (element: HTMLElement) => {
    gsap.to(element, {
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: element,
        pin: true,
      },
    });

    gsap.delayedCall(2, () => ScrollTrigger.refresh());
  };

  const typeWriter = (
    trigger: string,
    text: string,
    duration: number,
    start: string,
  ) => {
    return (element: HTMLElement) => {
      gsap.to(element, {
        duration: duration,
        text: text,
        stagger: 1,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: start,
          toggleActions: "restart none none restart",
        },
      });
      gsap.delayedCall(2, () => ScrollTrigger.refresh());
    };
  };

  const typeWriter2 = (
    trigger: string,
    text: string,
    duration: number,
    start: string,
    trigger2: string,
  ) => {
    return (element: HTMLElement) => {
      gsap.to(element, {
        duration: duration,
        text: text,
        stagger: 1,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: start,
          toggleActions: "restart none none restart",
        },
        onComplete: () => {
          gsap.from(trigger2, {
            opacity: 0,
            toggleActions: "restart none none restart",
          });
          gsap.to(trigger2, {
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            toggleActions: "restart none none restart",
          });
        },
      });
      gsap.delayedCall(2, () => ScrollTrigger.refresh());
    };
  };

  const cursorBlink = (element: HTMLElement) => {
    gsap.to(element, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "back.inOut",
    });
  };
</script>

<section
  class="container relative gap-0 text-white l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
  id="t1"
>
  <div>
    <span {@attach typeWriter("#t1", t1, 5, "top center")}></span>
    <span {@attach cursorBlink}>|</span>
  </div>
</section>
<section
  class="container relative gap-0 bg-white text-black l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
  id="t2"
  {@attach fromToTween(
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: { trigger: "#t2", scrub: 1, end: "center top" },
    },
  )}
>
  <div>
    <span {@attach typeWriter("#t2", t2, 2, "top center")}></span>
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
        },
      )}
    />
  </div>
</section>
<section
  class="flex flex-col items-center w-full max-w-none relative mt-20 gap-10 md:gap-20 p-3 overflow-x-hidden"
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
      },
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
      },
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
      },
    )}
  />
</section>
<section
  class="container relative gap-0 text-white l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
  id="t4"
>
  <div>
    <span {@attach typeWriter("#t4", t4, 2.5, "top center")}></span>
    <span {@attach cursorBlink}>|</span>
  </div>
</section>
<section
  class="container relative gap-0 text-white l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
  id="t5"
>
  <div>
    <span {@attach typeWriter("#t5", t5, 3, "top center")}></span>
    <span {@attach cursorBlink}>|</span>
  </div>
</section>
<section
  class="container relative gap-0 bg-white text-black l:text-8xl md:text-5xl text-xl text-center font-[Lora]"
  id="t6"
  {@attach fromToTween(
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: { trigger: "#t6", pin: true, scrub: 1, end: "center top" },
    },
  )}
>
  <div>
    <span {@attach typeWriter("#t6", t6, 3, "center center")}></span>
    <span {@attach cursorBlink}>|</span>
  </div>
</section>
<section
  class="flex flex-col items-center w-full max-h-none max-w-none overflow-hidden relative gap-20 bg-white"
>
  <div class="image-gallery" id="gallery-scroll" {@attach pinDiv}>
    <div
      class="col py-[0.2rem] px-0.5rem"
      id="gallery1"
      {@attach fromToTween(
        { yPercent: 200 },
        {
          yPercent: -200,
          scrollTrigger: {
            trigger: "#gallery-scroll",
            scrub: 1,
          },
        },
      )}
    >
      <img src={infinite1} srcset={infinite1} alt="infinite1" />
      <img src={infinite2} srcset={infinite2} alt="infinite2" />
      <img src={infinite3} srcset={infinite3} alt="infinite3" />
      <img src={infinite4} srcset={infinite4} alt="infinite4" />
      <img src={infinite5} srcset={infinite5} alt="infinite5" />
      <img src={infinite6} srcset={infinite6} alt="infinite6" />
    </div>
    <div
      class="col py-[0.2rem] px-0.5rem"
      id="gallery2"
      {@attach fromToTween(
        { yPercent: -200 },
        {
          delay: 2,
          yPercent: 200,
          scrollTrigger: {
            trigger: "#gallery-scroll",
            scrub: 1,
          },
        },
      )}
    >
      <img src={infinite7} srcset={infinite7} alt="infinite7" />
      <img src={infinite8} srcset={infinite8} alt="infinite8" />
      <img src={infinite9} srcset={infinite9} alt="infinite9" />
      <img src={infinite10} srcset={infinite10} alt="infinite10" />
      <img src={infinite11} srcset={infinite11} alt="infinite11" />
      <img src={infinite12} srcset={infinite12} alt="infinite12" />
    </div>
    <div
      class="col py-[0.2rem] px-0.5rem"
      id="gallery3"
      {@attach fromToTween(
        { yPercent: 200 },
        {
          yPercent: -200,
          scrollTrigger: {
            trigger: "#gallery-scroll",
            scrub: 1,
          },
        },
      )}
    >
      <img src={infinite13} srcset={infinite13} alt="infinite13" />
      <img src={infinite14} srcset={infinite14} alt="infinite14" />
      <img src={infinite15} srcset={infinite15} alt="infinite15" />
      <img src={infinite16} srcset={infinite16} alt="infinite16" />
      <img src={infinite17} srcset={infinite17} alt="infinite17" />
      <img src={infinite18} srcset={infinite18} alt="infinite18" />
    </div>
  </div>
</section>
<section
  class="container flex-col relative gap-20 text-white l:text-8xl md:text-5xl text-xl text-center font-[Lora] mt-50 p-3 lg:p-0"
  id="t7"
>
  <div id="donation">
    <span
      {@attach typeWriter2("#t7", t7, 1.5, "top center", "#quality-education")}
    ></span>
    <span {@attach cursorBlink}>|</span>
  </div>
  <div id="quality-education" class="opacity-0">
    <span class="font-[Open_Sans_Variable] font-light text-[#E0BFB8]"
      >Let us strive to give <span class="underline text-[#50C878]">
        Quality Eduction
      </span>
      for the <span class="text-[#D3A121]">disadvantage</span></span
    >
  </div>
  <div
    class={`absolute h-screen w-full bg-[#111]/70 p-[1rem] rounded-[8px] ${donationOpen ? "opacity-100 z-[1000]" : "opacity-0 z-0"} flex flex-col justify-center items-center gap-5`}
  >
    <button
      class="text-xl right-10 top-10 cursor-pointer bg-white p-3 rounded-full"
      onclick={() => {
        donationOpen = false;
      }}
    >
      <XIcon class="size-5 lg:size-10 text-black" />
    </button>
    <img
      src={qrcode}
      srcset={qrcode}
      alt="qrcode"
      class="pointer-events-none"
    />
  </div>
  <button
    class="bg-green-700 relative rounded-2xl w-[300px] h-[100px] text-3xl font-[Lora] font-bold cursor-pointer"
    onclick={() => {
      donationOpen = !donationOpen;
    }}
    {@attach fromToTween(
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: "#t7",
          start: "top center",
          toggleActions: "restart none none restart",
        },
      },
    )}>Donate</button
  >
</section>
