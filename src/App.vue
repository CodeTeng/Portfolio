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
    <Projects />
    <Experience />
    <Expertise />
    <Honors />
    <Strengths />
    <About />
  </main>
  <Footer />
</template>
