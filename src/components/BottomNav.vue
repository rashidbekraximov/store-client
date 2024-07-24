<template>
  <div class="bottom-bar">
    <ion-icon
        v-for="icon in icons"
        :key="icon.name"
        :name="icon.name"
        :class="{ icon: true, active: icon.name === activeIcon }"
        @click="change(icon.name)"
    ></ion-icon>
  </div>
</template>


<script>
import 'ionicons';
export default {
  data() {
    return {
      activeIcon: 'add-circle-outline',
      icons: [
        { name: 'home-outline' },
        { name: 'folder-outline' },
        { name: 'add-circle-outline' },
        { name: 'person-outline' },
        { name: 'image-outline' }
      ]
    };
  },
  methods: {
    change(name) {
      this.activeIcon = name;
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  background-color: #eee;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 30em;
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.icon {
  font-size: 1.5em;
  padding: 0.5em;
  margin: 0.5em;
  margin-top: 0;
  transition: 0.5s ease-in-out;
  border-radius: 100%;
  border: 7px solid #eee;
}
.active {
  transform: scale(1.25) translateY(-1em);
  background: linear-gradient(135deg, #23f, #6589ff);
  border: 7px solid #dcdcdc;
  color: white;
}
</style>
