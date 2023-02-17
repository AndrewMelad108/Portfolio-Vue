<template>
  <div
    class="header-section text-center space-y-7 p-10 dark:text-white"
    id="main"
  >
    <p class="text-xl">Hello, I'm</p>
    <h1 class="text-5xl capitalize text-teal-600 font-black">
      andrew melad dawwood
    </h1>
    <h3 class="capitalize text-2xl">front end developer</h3>
    <p class="leading-loose capitalize">
      I hope I could be of any assistance. Fresh Graduate from computer Science
      college who is experienced as a Frontend Developer I seek to gain more
      practical e
    </p>
    <div
      class="social-icons text-5xl cursor-pointer dark:text-teal-400 space-x-6"
    >
      <ion-icon
        name="logo-facebook"
        class="text-blue-500 dark:text-teal-400 dark:hover:text-teal-200"
      ></ion-icon>

      <ion-icon name="logo-github" class="dark:hover:text-teal-200"> </ion-icon>

      <ion-icon
        name="logo-linkedin"
        class="dark:hover:text-teal-200 text-teal-400"
      ></ion-icon>
    </div>
    <button
      class="text-xl text-white mt-2 p-1 rounded-full bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 w-36 h-11"
    >
      <ion-icon name="chevron-down-outline" class="text-xl"> </ion-icon>
      Resume
    </button>

    <div
      class="image-container bg-teal-500 rounded-full mx-auto w-fit mt-12 mb-12"
    >
      <img
        src="../assets/skull.png"
        alt="logo-image"
        class="w-60 block mx-auto p-8 h-auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "headerSection",
  data() {
    return {};
  },
  methods: {
    type() {},
  },
};
</script>

<style></style>
