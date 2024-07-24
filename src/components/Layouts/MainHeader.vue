<template>
  <header
      class="header-area bg-white text-center text-md-start pt-15 ps-15 pe-15 ps-md-20 pe-md-20 pe-lg-30 transition z-1"
      id="header"
  >
    <div class="row align-items-center justify-content-center">
      <div class="col-xl-6 col-lg-5 col-md-6">
        <div class="logo">
          <router-link to="/" class="d-flex align-items-center text-decoration-none">
            <img src="../../assets/img.png" width="50" height="50" style="border-radius: 50px">
            <span class="brand-logo">Brand Collection</span>
          </router-link>
        </div>
      </div>
      <div class="col-xl-6 col-lg-7 col-md-6">
        <div
            class="header-right-side d-flex align-items-center justify-content-center justify-content-md-end"
        >
<!--          <LightDarkSwtichBtn/>-->
<!--          <div class="dropdown profile-dropdown">-->
<!--            <button-->
<!--                class="dropdown-toggle text-start fs-14 text-black-emphasis d-flex align-items-center p-0 position-relative bg-transparent border-0 transition lh-1"-->
<!--                type="button"-->
<!--                data-bs-toggle="dropdown"-->
<!--                aria-expanded="false"-->
<!--            >-->
<!--              <img-->
<!--                  src="../../assets/images/admin.jpg"-->
<!--                  class="rounded"-->
<!--                  width="44"-->
<!--                  height="44"-->
<!--                  alt="admin"-->
<!--              />-->
<!--              <span class="title d-none d-lg-block ms-10 ms-lg-15">-->
<!--                <span class="d-block fw-bold mb-5 mb-md-8">Victor James</span>-->
<!--                <span class="text-body-emphasis fw-semibold fs-13">Admin</span>-->
<!--              </span>-->
<!--            </button>-->
<!--            <div-->
<!--                class="dropdown-menu rounded-0 bg-white border-0 start-auto end-0"-->
<!--            >-->
<!--              <ul class="ps-0 mb-0 list-unstyled dropdown-body">-->
<!--                <li-->
<!--                    class="text-body-secondary fw-semibold transition position-relative"-->
<!--                >-->
<!--                  <i class="flaticon-user-2"></i>-->
<!--                  My Account-->
<!--                  <router-link-->
<!--                      to="/profile"-->
<!--                      class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"-->
<!--                  ></router-link>-->
<!--                </li>-->
<!--                <li-->
<!--                    class="text-body-secondary fw-semibold transition position-relative"-->
<!--                >-->
<!--                  <i class="flaticon-setting"></i>-->
<!--                  Settings-->
<!--                  <router-link-->
<!--                      to="/profile-settings"-->
<!--                      class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"-->
<!--                  ></router-link>-->
<!--                </li>-->
<!--                <li-->
<!--                    class="text-body-secondary fw-semibold transition position-relative"-->
<!--                >-->
<!--                  <i class="flaticon-warning"></i>-->
<!--                  Support-->
<!--                  <router-link-->
<!--                      to="/support-desk-card"-->
<!--                      class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"-->
<!--                  ></router-link>-->
<!--                </li>-->
<!--                <li-->
<!--                    class="text-body-secondary fw-semibold transition position-relative"-->
<!--                >-->
<!--                  <i class="flaticon-logout"></i>-->
<!--                  Logout-->
<!--                  <router-link-->
<!--                      to="/logout"-->
<!--                      class="d-block position-absolute start-0 top-0 end-0 bottom-0 text-decoration-none"-->
<!--                  ></router-link>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from "vue";
// import LightDarkSwtichBtn from "./LightDarkSwtichBtn.vue";
import stateStore from "../../utils/store";

export default defineComponent({
  name: "MainHeader",
  components: {
    // LightDarkSwtichBtn,
  },
  created() {
    localStorage.setItem("dark",'true');
  },
  setup() {
    const stateStoreInstance = stateStore;
    const isSticky = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      stateStoreInstance,
    };
  },
});
</script>

<style scoped>
.header-area {
  z-index: 1;
  padding: 15px;
  transition: all 0.3s ease-in-out;
}

.logo {
  display: flex;
  align-items: center;
}

.logo .router-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  font-family: 'Brush Script MT', cursive;
  font-size: 28px; /* Adjust the font size */
  color: #d000ff; /* Adjust the color */
  letter-spacing: 2px; /* Adjust the letter spacing */
  text-transform: uppercase; /* Text transformation */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Text shadow */
  margin-left: 20px; /* Adjust the margin */
}

/* Additional styles for other elements */
.header-right-side .dropdown-toggle {
  color: #000;
}

.header-right-side .dot-badge {
  top: -10px;
  right: -10px;
}

.header-right-side .dropdown-menu {
  width: 250px;
  padding: 15px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-right-side .dropdown-menu .title {
  margin-bottom: 10px;
}

.header-right-side .dropdown-menu .dropdown-body {
  max-height: 200px;
  overflow-y: auto;
}

.header-right-side .dropdown-menu .dropdown-body li {
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
}

.header-right-side .dropdown-menu .dropdown-body li .icon {
  width: 35px;
  height: 35px;
  background-color: #f1f1f1;
}

.header-right-side .dropdown-menu .dropdown-body li .unread {
  right: 10px;
  top: 10px;
}

/* Additional styles for the header */
</style>
