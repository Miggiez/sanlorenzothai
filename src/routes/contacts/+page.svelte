<script lang="ts">
  import { disableButton } from "$lib/store/global.svelte";
  import { LandmarkIcon, MailIcon, PhoneIcon } from "@lucide/svelte";
  import { onMount } from "svelte";

  let message = $state<string>("");
  let name = $state<string>("");
  let email = $state<string>("");
  let phone = $state<string>("");

  onMount(() => {
    disableButton.disableOn();
  });
</script>

<section
  class="flex flex-col gap-10 items-center w-full h-auto text-black bg-white"
>
  <div
    class="flex flex-col gap-10 p-3 lg:p-0 lg:flex-row lg:gap-0 justify-around items-center w-full mt-20"
  >
    <h1 class="text-5xl md:text-7xl font-bold">Contact Us</h1>
    <p class="text-center lg:text-wrap w-auto md:w-[400px] text-xl">
      If you have any questions, please feel free to get in touch with us via
      phone, text, email, the form below, or even on social media.
    </p>
  </div>
  <div
    class="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-evenly w-full mb-50 lg:mb-10"
  >
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      class="flex flex-col gap-10 border-dashed border-2 rounded-2xl p-4"
    >
      <input
        type="hidden"
        name="access_key"
        value="e93fd99a-0b8a-4af0-a526-cb79d8da79e5"
      />
      <h1 class="font-bold">GET IN TOUCH</h1>
      <div
        class="flex flex-col content-around lg:flex-row lg:justify-around gap-10"
      >
        <div class="flex flex-col">
          <label for="name">Name</label>
          <input
            name="name"
            bind:value={name}
            type="text"
            placeholder="Enter Your Name*"
            required
            class="border p-2 rounded-sm"
          />
        </div>
        <div class="flex flex-col">
          <label for="phone">Phone Number</label>
          <input
            name="phone"
            bind:value={phone}
            type="text"
            placeholder="Enter Your phone number*"
            required
            class="border p-2 rounded-sm"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input
          name="email"
          bind:value={email}
          type="email"
          placeholder="Enter your email*"
          required
          class="border p-2 rounded-sm"
        />
      </div>
      <div class="flex flex-col items-center gap-3">
        <label for="message">Your Message</label>
        <textarea
          name="message"
          bind:value={message}
          class="w-[300px] h-[100px] border p-3"
          required
        ></textarea>
      </div>
      <input
        type="checkbox"
        name="botcheck"
        class="hidden"
        style="display: none;"
      />
      <div class="flex justify-center">
        <button
          class="text-sm lg:text-xl text-center w-[40%] px-10 py-3 font-bold rounded-2xl bg-red-500 text-white cursor-pointer"
          type="submit">Send Message</button
        >
      </div>
    </form>
    <div class="flex flex-col gap-10 border-dashed border-2 p-4 rounded-xl">
      <h1 class="font-bold">CONTACT INFORMATION</h1>
      <div
        class="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-evenly lg:content-none w-full"
      >
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <PhoneIcon />
            <label for="phone" class="font-bold">Phone</label>
          </div>
          <p>(66)2-125-2471</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <LandmarkIcon />
            <label for="address" class="font-bold">Address</label>
          </div>
          <p class="text-wrap w-[200px]">
            76/39 Moo 1 Mint Tiwanon Bldg 3rd floor Room 308, Tiwanon Rd, Ban
            Mai, Pakkret, Thailand 11120
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2">
            <MailIcon />
            <label for="email" class="font-bold">Email</label>
          </div>
          <p>Vantien.b@sanlorenzothai.org</p>
          <p>Nutthawat.c@sanlorenzothai.org</p>
          <p>Pakpimol.r@sanlorenzothai.org</p>
        </div>
      </div>
      <div class="flex justify-center">
        <iframe
          title="sanlorenzothaimap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d862.4235877473284!2d100.54756777692421!3d13.9496203795893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283e8b95b2731%3a0xf383759978fd7595!2smint%20tiwanon!5e0!3m2!1sen!2sth!4v1752636162513!5m2!1sen!2sth"
          style="border:0;"
          allowfullscreen={false}
          loading="lazy"
          class="w-[300px] h-[150px] md:w-[400px] md:h-[250px] lg:w-[600px] lg:h-[450px]"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>
