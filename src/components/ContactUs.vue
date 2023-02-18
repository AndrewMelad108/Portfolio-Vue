<template>
  <div class="ContactUs min-h-[800px]" id="contact">
    <div
      class="projects·h-96·bg-gradient-to-l·from-white·to-teal-200·rounded-2xl·px-6·py-2·dark:from-cyan-700·dark:to-cyan-900·dark:text-white·grid"
    >
      <h1 class="text-center pt-10 font-bold text-3xl capitalize text-white">
        Get in Touch
      </h1>
      <h1
        class="text-center pt-2 mb-12 font-bold text-3xl capitalize text-teal-600"
      >
        Contact
      </h1>
    </div>
    <div
      class="from-content grid lg:grid-cols-2-auto md:grid-cols-1 max-sm:grid-cols-1 sm:mx-10 gap-20"
    >
      <div
        class="info-content grid grid-cols-1 max-sm:mx-auto md:mx-auto sm:mx-auto text-center dark:text-white font-bold capitalize space-y-10 w-fit"
      >
        <div
          class="dark:bg-cyan-900 dark:text-white bg-teal-300 text-black rounded-lg p-6 space-y-3 text-xl shadow-xl h-44 shadow-stone-400 hover:bg-gradient-to-tr hover:bg-teal-700 hover: via-teal-500 hover:text-black"
        >
          <ion-icon name="mail-outline"></ion-icon>
          <h2 class="max-sm:text-sm">email</h2>
          <p class="max-sm:text-sm">andrewmelad108@gmail.com</p>
          <a
            href="mailto:andrewmelad108@gmail.com"
            class="text-blue-400 font-bold"
            >Send an Email</a
          >
        </div>
        <div
          class="dark:bg-cyan-900 dark:text-white bg-teal-300 text-black rounded-lg p-6 space-y-3 text-xl shadow-xl h-44 shadow-stone-400 hover:bg-gradient-to-tr hover:bg-teal-700 hover: via-teal-500 hover:text-black"
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
          <h2 class="max-sm:text-sm">WhatsApp</h2>
          <p class="max-sm:text-sm text-2xl">01210673776</p>

          <a
            href="https://wa.me/01210673776?text=hi"
            target="_blank"
            class="text-blue-400 font-bold"
            >Send a message</a
          >
        </div>
        <div
          class="dark:bg-cyan-900 dark:text-white bg-teal-300 text-black hover:bg-gradient-to-tr hover:bg-teal-700 hover: via-teal-500 rounded-lg p-6 space-y-3 text-xl shadow-xl h-44 shadow-stone-400 hover:bg-gradient-to-tr hover:bg-teal-700 hover: via-teal-500 hover:text-black"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
          <h2 class="max-sm:text-sm">Linkedin</h2>
          <p class="max-sm:text-sm">Andrew Melad</p>
          <a
            class="text-blue-400 font-bold"
            href="https://www.linkedin.com/in/andrew-melad-b77ab3198/"
            >Send a message</a
          >
        </div>
      </div>
      <div
        class="form-content self-end text-center text-white font-bold capitalize space-y-10 max-sm:w-auto max-sm:mx-10"
      >
        <form class="space-y-10">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required=""
            value=""
            class="bg-transparent border-2 border-teal-300 dark:border-cyan-900 rounded-xl p-4 space-y-3 text-xl w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            value=""
            class="bg-transparent border-2 border-teal-300 dark:border-cyan-900 rounded-xl p-4 space-y-3 text-xl w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value=""
            class="bg-transparent border-2 border-teal-300 dark:border-cyan-900 rounded-xl p-4 space-y-3 text-xl w-full"
          />
          <textarea
            cols="20"
            rows="5"
            name="message"
            placeholder="Message"
            id=""
            class="resize-none bg-transparent border-2 border-teal-300 dark:border-cyan-900 rounded-xl p-4 space-y-3 text-xl w-full"
          ></textarea>
          <button
            type="submit"
            class="form-submit space-y-4 text-white mt-2 p-1 rounded-full bg-gradient-to-r from-teal-600 via-teal-400 to-teal-400 w-36 h-11 text-lg max-sm:block max-sm:mx-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {};
  },
};
</script>
<style></style>
