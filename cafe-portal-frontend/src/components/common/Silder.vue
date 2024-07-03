<template>
  <div class="slider" @mouseover="pauseSlider" @mouseleave="resumeSlider">
    <transition-group name="slide-fade" tag="div">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex }"
      >
        <img :src="image" alt="Slider Image" />
      </div>
    </transition-group>
    <button class="prev-btn" @click="prevSlide">Previous</button>
    <button class="next-btn" @click="nextSlide">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        "/assets/slides/slider1.jpg",
        "/assets/slides/slider2.jpg",
        "/assets/slides/slider3.jpg",
      ],
      autoSlideInterval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    pauseSlider() {
      clearInterval(this.autoSlideInterval);
    },
    resumeSlider() {
      this.autoSlideInterval = setInterval(this.nextSlide, 3000);
    },
  },
  mounted() {
    this.resumeSlider(); // Start auto-sliding when mounted
  },
  beforeUnmount() {
    this.pauseSlider(); // Clean up the interval when the component is destroyed
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  direction: rtl; /* Enable RTL support */
}

.slide {
  display: none; /* Hide slides by default */
}

.slide.active {
  display: block; /* Show the active slide */
}

/* Slide transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

/* Button styles */
button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
.prev-btn {
  right: 0; /* Position for RTL */
}
.next-btn {
  left: 0; /* Position for RTL */
}
</style>
