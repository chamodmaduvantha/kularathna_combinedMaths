<template>
  <div class="carousel-container">
    <v-carousel
      v-if="items.length"
      cycle
      interval="4000"
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
        <img :src="item.src" class="carousel-image" alt="Carousel Image">
      </v-carousel-item>
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
        { src: require("../assets/carosel/Graduation.jpg") },
        { src: require("../assets/carosel/Certificate.jpg") },
        { src: require("../assets/carosel/BR.jpg") },
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

.carousel-image {
  display: block;
  width: 100%; /* Make the image take the full width of its container */
  height: 100%; /* Maintain aspect ratio */
  max-width: 2000px; /* Limit the maximum width to the original image size */
  margin: 0 auto;
  object-fit: contain; /* Ensure the image fits within its container without cropping */
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
  animation: snowfall linear infinite;
}

.snow img {
  width: auto;
  height: 50px;
}

@keyframes snowfall {
  0% {
    transform: translateY(-10%) translateX(0);
  }

  100% {
    transform: translateY(110vh) translateX(20px);
  }
}

.snow:nth-child(1) {
  left: 5%;
  animation-duration: 8s;
  animation-delay: 0s;
}

/* Additional snowflakes styling here */
</style>
