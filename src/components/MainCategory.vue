<template>
  <header
      :class="[
      'header-area bg-white text-center text-md-start pt-15 pb-15 ps-15 pe-15 ps-md-20 pe-md-20 pe-lg-30 transition z-1'
    ]"
      id="header"
  >
    <div class="row align-items-center">
      <ul class="category-list">
        <li v-for="category in categories" :key="category.name" class="category-item">
          <!-- <img :src="category.icon" alt="" class="category-icon"> -->
          <span>{{ category.name }}</span>
        </li>
      </ul>
    </div>
  </header>
<!--  <header-->
<!--      class="header-area bg-white text-center text-md-start pt-15 pb-15 ps-15 pe-15 ps-md-20 pe-md-20 pe-lg-30 transition z-1"-->
<!--  >-->
<!--    <div class="row align-items-center">-->
<!--      <ul class="subcategory-list flex-lg-nowrap">-->
<!--        <li v-for="subcategory in cats" :key="subcategory.optName" class="subcategory-item">-->
<!--          <img :src="subcategory.imageUrl" alt="" width="100" height="100" class="subcategory-icon">-->
<!--          <span>{{ subcategory.optName }}</span>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </header>-->
  <ProductsGrid :goods="goods"/>
  <div v-if="loading" class="spinner-overlay">
    <div class="spinner"></div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "@/axios/axios";
import ProductsGrid from "@/components/Ecommerce/ProductsGrid/ProductsGrid.vue";

export default defineComponent({
  name: "MainCategory",
  components: { ProductsGrid },
  data() {
    return {
      cats: [],
      goods: [],
      loading: false // Add loading state
    };
  },
  methods: {
    getProducts(CATEGORY) {
      this.loading = true; // Set loading to true when the request starts
      axios.get("product/list/" + CATEGORY).then(res => {
        this.goods = res.data;
        setTimeout(() => {
          this.loading = false; // Set loading to false when the request completes
        },3000)
      }).catch(() => {
        this.loading = false; // Ensure loading is false in case of an error
      });
    },
    // getGoods(category) {
    //   this.loading = true; // Set loading to true when the request starts
    //   axios.get("sub-tab/" + category).then(res => {
    //     this.cats = res.data;
    //     this.getProducts(category);
    //   }).catch(() => {
    //     this.loading = false; // Ensure loading is false in case of an error
    //   });
    // }
  },
  created() {
    // this.getGoods("RECOMMENDED");
    this.getProducts("WOMAN");
  },
  setup() {
    const isSticky = ref(false);

    const categories = ref([
      // { name: "Tavsiya qilingan", icon: "sale-icon.png", cat: "RECOMMENDED" },
      // { name: "Mobil telefon", icon: "cool-icon.png", cat: "PHONE" },
      // { name: "Kompyuter", icon: "cool-icon.png", cat: "COMPUTER" },
      // { name: "Bo'yanishlar", icon: "pool-icon.png", cat: "MAKE_UP" },
      { name: "Ayollar kiyimi", icon: "shoes-icon.png", cat: "WOMAN" },
      // { name: "Do'kon", icon: "electronics-icon.png", cat: "MARKET" },
      // { name: "Aksessuarlar", icon: "appliances-icon.png", cat: "ACSESSUAR" },
      // { name: "Ichki kiyim", icon: "clothing-icon.png", cat: "UNDERWEAR" },
      { name: "Erkaklar kiyimi", icon: "car-icon.png", cat: "MANS" },
      // { name: "Ona va chaqaloq", icon: "accessories-icon.png", cat: "MAM_AND_BABY" },
      { name: "Poyabzal va sumkalar", icon: "beauty-icon.png", cat: "SHOES_AND_BAG" },
      // { name: "Uy to'qimachilik", icon: "beauty-icon.png", cat: "HOME_TEXTILE" },
      // { name: "Mebel", icon: "beauty-icon.png", cat: "FURNITURE" },
      // { name: "Avtomobil mahsulotlari", icon: "beauty-icon.png", cat: "CAR_ACSESSUAR" },
      // { name: "Kompyuter", icon: "beauty-icon.png", cat: "COMPUTER" },
      // { name: "Uy bezagi", icon: "beauty-icon.png", cat: "HOME_DECORATION" },
      // { name: "Ещё", icon: "more-icon.png" }
    ]);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      categories
    };
  }
});
</script>


<style scoped>
.header-area {
  z-index: 1;
  padding: 15px;
  transition: all 0.3s ease-in-out;
}
.header-area.sticky {
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.category-list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 5px;
  margin: 0;
  list-style: none;
}
.category-item {
  display: flex;
  align-items: center;
  padding: 0 10px;
  white-space: nowrap;
}
.category-list li {
  padding: 6px;
  border-radius: 6px;
  margin: 2px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

.category-list li:hover {
  background-color: #8e8d94;
  color: #e9f1ea;
}

/* Custom scrollbar styles for Webkit-based browsers */
.category-list::-webkit-scrollbar {
  height: 3px; /* Height of the horizontal scrollbar */
}

.category-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.category-list::-webkit-scrollbar-thumb {
  background: #f3f0f0;
  border-radius: 10px;
}

.category-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.category-icon {
  margin-right: 5px;
  width: 24px;
  height: 24px;
}

.header-area {
  /*position: relative;*/
  z-index: 1;
  padding: 15px;
  transition: all 0.3s ease-in-out;
}

.subcategory-list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  list-style: none;
}

/* Custom scrollbar styles for Webkit-based browsers */
.subcategory-list::-webkit-scrollbar {
  height: 8px; /* Height of the horizontal scrollbar */
}

.subcategory-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.subcategory-list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.subcategory-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Custom scrollbar styles for Firefox */
.subcategory-list {
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #888 #f1f1f1; /* thumb and track colors */
}

.subcategory-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  white-space: nowrap;
}

.subcategory-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  object-fit: cover;
}

.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
