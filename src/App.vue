<template>
  <v-app theme="dark">
    
    <my_header/>
    <v-main>
      <v-img src="./assets/Header.png"></v-img>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { provide } from 'vue';
import my_header from './components/my_header.vue';
import { ref } from 'vue';
import { readonly } from 'vue';

const src_path = "/github.io/markdownfile/"

const tips_card_list= ref([{title:"openimage_dataset",mdfile:"openimagedataset.md",summary:"openimagedatasetについてあれこれ",imagepath:src_path + "openimagedataset.png"},])

provide('tips_card_list',tips_card_list,readonly)

</script>
