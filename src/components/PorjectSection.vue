<template>
  <div
    class="projects text-center dark:text-white pt-10 max-sm:mx-10 sm:mx-10"
    id="projects"
  >
    <h1 class="font-bold">What I Do</h1>

    <h1 class="text-5xl font-bold mb-12 text-teal-400">My Projects</h1>

    <div
      class="project-items p-12 grid lg:grid-cols-3 gap-20 md:grid-cols-2 sm:grid-cols-1 min-h-[400px] rounded-xl bg-gradient-to-tr bg-teal-600 via-teal-400 from-teal-200 dark:bg-gradient-to-tl dark:bg-teal-800 dark:via-teal-700 dark:from-teal-400"
    >
      <div
        class="p-3 bg-teal-300 h-auto rounded-xl w-fit cursor-pointer"
        v-for="project in dataInfo"
        :key="project.id"
        :data-modal-target="project.id"
        :data-modal-toggle="project.id"
        type="section1"
      >
        <img :src="require(`../assets/${project.image}`)" alt="asd" />
        <p class="mt-2 text-2xl font-bold dark:text-white">
          {{ project.name }}
        </p>
        <!-- Main modal -->
        <div
          :id="project.id"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full"
        >
          <div class="relative w-full h-full max-w-2xl md:h-auto">
            <!-- Modal content -->
            <div
              class="fixed bottom-0 left-0 right-0 bg-white rounded-lg shadow dark:bg-cyan-900 h-[600px] w-[100vw]"
            >
              <!-- Modal header -->
              <div
                class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
              >
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="grid grid-cols-2-auto">
                <div class="image-slider p-10 pt-0">
                  <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item
                      v-for="item in project.slider"
                      :key="item"
                    >
                      <img
                        :src="require(`../assets/${item}`)"
                        alt="asd"
                        class="h-auto"
                      />
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div class="des text-start">
                  <h1 class="text-2xl text-teal-500 my-6">
                    {{ project.name }}
                  </h1>
                  <p class="leading-5">{{ project.description }}</p>
                  <div class="project-tools space-x-7 space-y-7">
                    <span
                      class="tool text-center p-2 inline-block dark:text-black w-20 h-10 rounded-lg dark:bg-gradient-to-t dark:from-teal-800 dark:via-teal-500 dark:to-teal-300 w-auto"
                      v-for="tool in project.tools"
                      :key="tool.index"
                      >{{ tool }}</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="project-links m-20 h-56 flex justify-center space-x-6 flex-start"
              >
                <a
                  :href="project.links.github"
                  target="_blank"
                  class="bg-teal-700 w-28 h-fit rounded-xl block py-2 px-3 text-center space-x-4"
                >
                  <i class="fa-brands fa-github"></i> Github</a
                >
                <a
                  :href="project.links.linkedin"
                  target="_blank"
                  class="bg-teal-700 w-28 h-fit rounded-xl block py-2 px-3 text-center space-x-4"
                >
                  <i class="fa-solid fa-link"></i> Link</a
                >
              </div>
              <!-- Modal footer -->
              <div
                class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataProject from "../json/projectDate.json";
export default {
  name: "projectSection",

  data() {
    return {
      dataInfo: dataProject,
    };
  },
  created() {},
  methods: {},
};
</script>

<script setup>
import { onMounted } from "vue";
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
});
</script>

<style></style>
