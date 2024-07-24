<template>
  <header
      class="header-area bg-white text-center text-md-start pt-15 pb-15 ps-15 pe-15 ps-md-20 pe-md-20 pe-lg-30 transition z-1"
      id="header"
  >
    <div class="row align-items-center">
      <ul class="subcategory-list">
        <li v-for="subcategory in subcategories" :key="subcategory.name" class="subcategory-item">
          <img :src="subcategory.image" alt="" class="subcategory-icon">
          <span>{{ subcategory.name }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainSubCategory",
  data() {
    return {
      subcategories: [
        { name: "Mobil telefon", image: "https://images.pinduoduo.com/mrk/2019-07-24/8bfba1e4-746b-4a60-ba0f-6b7e8b898a8d.png" },
        { name: "Olma", image: "path/to/apple.jpg" },
        { name: "Ikkinchi qo'l", image: "path/to/second-hand.jpg" },
        { name: "Tariq", image: "path/to/grain.jpg" },
        { name: "Huawei", image: "path/to/huawei.jpg" },
        { name: "OPPO", image: "path/to/oppo.jpg" },
        { name: "Qobiq", image: "path/to/case.jpg" },
        { name: "Shon-sharaf", image: "path/to/honor.jpg" },
        { name: "Aqlli qurilma", image: "path/to/smart-device.jpg" },
        { name: "Audio va video", image: "path/to/audio-video.jpg" },
        { name: "Eshitish vositasi", image: "path/to/headphones.jpg" },
        { name: "Bluetooth eshitish vositasi", image: "path/to/bluetooth-headphones.jpg" },
        { name: "Raqamli aksessuarlar", image: "path/to/digital-accessories.jpg" },
        { name: "Zaryadlovchi aksessuarlar", image: "path/to/charging-accessories.jpg" },
        { name: "Kamera", image: "path/to/camera.jpg" }
      ]
    };
  }
}
</script>

<style scoped>
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
</style>
