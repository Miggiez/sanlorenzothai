<script lang="ts">
  import { onMount } from "svelte";
  import { disableButton } from "$lib/store/global.svelte";
  import "../app.css";
  import { ScrollSmoother } from "$lib/gsap";
  import { MoveDownIcon } from "@lucide/svelte";

  let smoother = $state<globalThis.ScrollSmoother>();

  onMount(() => {
    smoother = ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 0.8,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: true,
    });
  });
  let { children } = $props();
</script>

<div id="smooth-wrapper">
  <nav
    class="sticky z-50 top-0 text-white py-5 px-10 flex justtify-center items-center gap-10 text-xl bg-black rounded-bl-2xl rounded-br-2xl font-bold"
    style="width: max-content; margin: 0 auto;"
  >
    <a href="/">Home</a>
    <a href="/contacts">Contacts</a>
    <button
      onclick={() => {
        smoother && smoother.scrollTo("#donation", true);
      }}
      class={`ml-auto bg-white rounded-full p-3 ${disableButton.value ? "hidden" : "block"}`}
      ><MoveDownIcon class="text-black size-auto" /></button
    >
  </nav>
  <div id="smooth-content">
    {@render children()}
  </div>
</div>
