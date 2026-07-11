<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Expertise from './components/Expertise.vue'
import Projects from './components/Projects.vue'
import Honors from './components/Honors.vue'
import Strengths from './components/Strengths.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="w-full">
    <Hero />
    <div class="section-blend-dark">
      <Projects />
    </div>
    <div class="section-blend-light">
      <Experience />
    </div>
    <div class="section-blend-dark">
      <Expertise />
    </div>
    <div class="section-blend-light">
      <Honors />
    </div>
    <div class="section-blend-dark">
      <Strengths />
    </div>
    <div class="section-blend-light">
      <About />
    </div>
  </main>
  <Footer />
</template>
