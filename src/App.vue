<template>
  <v-app theme="dark">
    <my_header />
    <v-main>
      <v-img src="./assets/Header.png"></v-img>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import my_header from './components/my_header.vue';

</script>
