<template>
  <div class="dark" id="container">
    <nav>
      <div
        class="bg-gradient-to-r from-cyan-500 to-teal-300 text-white w-max z-10 py-2 px-3 fixed flex gap-3 rounded-full backdrop-blur-md bottom-2 left-1/2 transform-gpu -translate-x-1/2 dark:from-cyan-700 dark:to-cyan-900"
      >
        <a
          href="#main"
          class="p-3 rounded-full flex text-xl lg:hover:bg-gradient-to-r lg:hover:from-teal-100 lg:hover:to-cyan-50 lg:hover:text-black"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
            ></path></svg
        ></a>
        <a
          href="#about"
          class="p-3 rounded-full flex text-xl lg:hover:bg-gradient-to-r lg:hover:from-teal-100 lg:hover:to-cyan-50 lg:hover:text-black"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
            ></path></svg
        ></a>
        <a
          href="#projects"
          class="p-3 rounded-full flex text-xl lg:hover:bg-gradient-to-r lg:hover:from-teal-100 lg:hover:to-cyan-50 lg:hover:text-black"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
            ></path></svg
        ></a>
        <a
          href="#contact"
          class="text-gray-800 bg-white dark:text-sky-50 dark:bg-gray-800 dark:hover:text-black p-3 rounded-full flex text-xl lg:hover:bg-gradient-to-r lg:hover:from-teal-100 lg:hover:to-cyan-50 lg:hover:text-black"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"
            ></path>
            <path d="M7 9h10v2H7zm0 4h7v2H7z"></path></svg
        ></a>
        <span
          class="p-3 rounded-full flex text-xl lg:hover:bg-gradient-to-r lg:hover:from-teal-100 lg:hover:to-cyan-50 lg:hover:text-black bg-gray-900 text-white dark:bg-sky-50 dark:text-black cursor-pointer"
          id="mode"
          v-on:click="showMode()"
          >{{ contant }}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
            ></path>
            <path
              d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
            ></path></svg
        ></span>
      </div>
    </nav>

    <div
      class="bg-gradient-to-l from-cyan-50 dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 lg:px-20 md:px-10 ms:px-5 min-h-screen"
    >
      <headerSection />
      <aboutSection />
      <projectSection />
      <contactUs />
    </div>
  </div>
</template>

<script>
import headerSection from "../components/header.vue";
import aboutSection from "../components/AboutUs.vue";
import projectSection from "../components/PorjectSection.vue";
import contactUs from "../components/ContactUs.vue";
export default {
  name: "HomeView",
  data() {
    return {
      contant: "",
    };
  },
  components: {
    headerSection,
    aboutSection,
    projectSection,
    contactUs,
  },
  methods: {
    showMode() {
      let body = document.getElementById("container");
      if (this.contant == "dark") {
        this.contant = "";
      } else {
        this.contant = "";
      }
      body.classList.toggle("dark");
    },
  },
};
</script>
