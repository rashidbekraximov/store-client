<template>
  <div class="row m-5">
    <!--    <div class="col-lg-4 col-xxxl-3">-->
    <!--      <SideBar />-->
    <!--    </div>-->
    <div class="col-md-12">
      <div class="row">
        <div class="col-sm-6 col-lg-6 col-xxxl-3" v-for="(item, index) in goods" :key="index">
          <div
              class="card mb-25 border-0 rounded-0 bg-white single-product-box"
          >
            <div class="card-body p-0 letter-spacing">
              <div class="image position-relative">
                <router-link to="/product-details" class="d-block">
                  <img
                      :src="item.hdThumbUrl"
                      alt="product"
                  />
                </router-link>
                <button
                    class="fav position-absolute bg-white rounded-circle border-0 p-0 d-inline-block"
                    type="button"
                >
                  <i class="flaticon-heart"></i>
                </button>
              </div>
              <div class="content p-20">
                <h4 class="mb-10 fw-semibold fs-16 fs-lg-18">
                  <a href="#" class="text-decoration-none text-black">
                    {{item.goodsName}}
                  </a>
                </h4>
                <div class="reviews d-flex align-items-center">
                  <div class="rating lh-1">
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star-1"></i>
                    <i class="flaticon-star"></i>
                  </div>
<!--                  <span class="text-black fw-bold fs-13 ms-5 me-5">4.0</span>-->
<!--                  <span class="text-muted fw-medium fs-13">(21 Reviews)</span>-->
                </div>
                <div class="mt-10 price d-flex align-items-center">
                  <span class="text-primary fw-bold fs-md-15 fs-lg-16"
                  >{{item.goodsPrice}}</span
                  >
<!--                  <span class="text-muted fs-13 fw-medium ms-5 me-8">yuan</span>-->
<!--                  <span class="text-success fw-medium">-->
<!--                    <span class="fw-black">60%</span> Off</span>-->
                </div>
                <button
                    type="button"
                    class="add-to-cart-btn text-center d-block mt-15 fw-medium transition w-100 rounded-1 position-relative"
                >
                  <a :href="url + item.hdThumbUrl" target="_blank">
<!--                    <img src="https://commimg.pddpic.com/auto-image/9cfb7a6c-c215-11ed-92e1-0a580a487c7f.jpg" alt="Contact on Telegram" style="width:200px; height:auto;">-->
                    Adminga jo'natish
                  </a>
<!--                  <i class="flaticon-shopping-cart-2 transition"></i>-->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          class="pagination-area d-md-flex mb-25 justify-content-between align-items-center"
      >
        <p class="mb-0 text-paragraph">
          Showing <span class="fw-bold">16</span> out of
          <span class="fw-bold">1354</span> results
        </p>
        <nav class="mt-15 mt-md-0">
          <ul class="pagination mb-0">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <i class="flaticon-chevron-1"></i>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link active" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <i class="flaticon-chevron"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "@/axios/axios";

export default {
  name: "ProductsGrid",
  components: {
    // SideBar,
  },
  props: {
    goods: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      url: "https://t.me/nurullayevaas?text="
    }
  },
  // methods: {
  //   getGoods(CATEGORY) {
  //     axios.get("product/list/" + CATEGORY).then(res => {
  //       this.goods = res.data
  //     })
  //   },
  // },
  // created() {
  //   this.getGoods('RECOMMENDED');
  // }
};
</script>