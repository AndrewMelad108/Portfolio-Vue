<template>
  <div
    class="header-section text-center space-y-7 p-10 dark:text-white"
    id="main"
  >
    <h1 class="text-4xl font-bold">
      <p class="mb-10 text-teal-400">Hi, I'm</p>
      <span class="typed-text text-teal-400">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
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
      <a
        href="https://www.facebook.com/AndrewMelad70
      "
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon name="logo-facebook" class="dark:hover:text-teal-200"
          >></ion-icon
        ></a
      >

      <a
        href="https://github.com/AndrewMelad108"
        target="_blank"
        rel="noopener noreferrer"
        ><ion-icon name="logo-github" class="dark:hover:text-teal-200">
        </ion-icon
      ></a>

      <a
        href="https://www.linkedin.com/in/andrew-melad-b77ab3198/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ion-icon
          name="logo-linkedin"
          class="dark:hover:text-teal-200 text-teal-400"
        ></ion-icon
      ></a>
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
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Andrew Melad Dawood", "Andrew Melad Dawood"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style></style>
