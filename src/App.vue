<template>
  <MainHeader />
  <MainCategory />
<!--  <MainSubCategory/>-->
<!--  <MainSidebar />-->
<!--  <div class="main-content d-flex flex-column transition overflow-hidden">-->
<!--    <ProductsGridPage />-->
<!--    <MainFooter / >-->
<!--  </div>-->
<!--  <BottomNav />-->
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import stateStore from "./utils/store";

import MainHeader from "./components/Layouts/MainHeader.vue";
// import MainSidebar from "./components/Layouts/MainSidebar.vue";
// import MainFooter from "./components/Layouts/MainFooter.vue";
// import BottomNav from "./components/BottomNav.vue";
import 'ionicons';
import MainCategory from "@/components/MainCategory.vue";
// import ProductsGridPage from "@/pages/Ecommerce/ProductsGridPage.vue";
// import MainSubCategory from "@/components/MainSubCategory.vue";

export default defineComponent({
  name: "App",
  components: {
    // ProductsGridPage,
    // MainSubCategory,
    MainCategory,
    MainHeader,
    // MainSidebar,
    // MainFooter,
    // BottomNav,
  },
  mounted() {
    document.body.classList.add("bg-body-secondary");
      // const storedDarkMode = localStorage.getItem("dark");
      // if (storedDarkMode) {
      //   document.body.classList.toggle("dark", true);
      // }
  },
  setup() {
    const stateStoreInstance = stateStore;
    watchEffect(() => {
      if (stateStoreInstance.open) {
        document.body.classList.remove("sidebar-show");
        document.body.classList.add("sidebar-hide");
        console.log("show");
      } else {
        document.body.classList.remove("sidebar-hide");
        document.body.classList.add("sidebar-show");

        console.log("hide");
      }
    });
    return {};
  },
});
</script>

<style>
/* Add any additional styles here if needed */
</style>
