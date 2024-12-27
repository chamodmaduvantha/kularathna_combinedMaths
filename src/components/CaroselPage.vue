<template>
  <div class="carousel-container">
    <v-carousel v-if="items.length" cycle interval="4000" data-aos="flip-left" data-aos-duration="2000">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>

    <div class="snowfall">
      <div class="snow" v-for="index in 10" :key="index">
        <img :src="require('../assets/festivel/snow.png')" alt="Snowflake">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.items = [
        { src: require("../assets/carosel/1.jpg") },
        { src: require("../assets/carosel/2.jpg") },
      ];
      console.log("Images loaded:", this.items);
    },
  },
};
</script>

<style>
.carousel-container {
  position: relative;
}

.snowfall {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.snow {
  position: absolute;
  top: -10%;
  /* Start above the view */
  animation: snowfall linear infinite;
}

.snow img {
  width: auto;
  height: 50px;
  /* Maintain aspect ratio */
}

@keyframes snowfall {
  0% {
    transform: translateY(-10%) translateX(0);
  }

  100% {
    transform: translateY(110vh) translateX(20px);
    /* Fall downward out of the view */
  }
}

/* Define different snowflakes' positions and animation durations */
.snow:nth-child(1) {
  left: 5%;
  animation-duration: 8s;
  animation-delay: 0s;
}

.snow:nth-child(2) {
  left: 10%;
  animation-duration: 10s;
  animation-delay: 2s;
}

.snow:nth-child(3) {
  left: 20%;
  animation-duration: 12s;
  animation-delay: 1s;
}

.snow:nth-child(4) {
  left: 30%;
  animation-duration: 7s;
  animation-delay: 3s;
}

.snow:nth-child(5) {
  left: 40%;
  animation-duration: 9s;
  animation-delay: 0s;
}

.snow:nth-child(6) {
  left: 50%;
  animation-duration: 11s;
  animation-delay: 2s;
}

.snow:nth-child(7) {
  left: 60%;
  animation-duration: 8s;
  animation-delay: 1s;
}

.snow:nth-child(8) {
  left: 70%;
  animation-duration: 12s;
  animation-delay: 0s;
}

.snow:nth-child(9) {
  left: 80%;
  animation-duration: 9s;
  animation-delay: 2s;
}

.snow:nth-child(10) {
  left: 90%;
  animation-duration: 10s;
  animation-delay: 1s;
}
</style>
