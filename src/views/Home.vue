<template>
  <v-container width="90%" >
    <v-row align="center" justify="center" nax-width="90%" max-height="50%">
      <v-col  cols="2" justify="center">
        <v-img src="../assets/panda2.jpg" max-height="400px"></v-img>
        <p  class="text-h5 text-center">梁瀬　和哉</p>
        <p  class="text-center font-weight-thin">Yanase　Kazuya</p>
        <p  class="text-center font-weight-thin">R&D　Engineer</p>
        
      </v-col>
      <v-col cols="10" >
        <v-card  class="d-flex flex-colum" max-width="100%" height="100%" >
          <v-card-text>
            <p class="text-h3 mb-4">
              自己紹介
            </p>
            <v-divider class="border-opacity-100"></v-divider>
            <p class="text-h6 mt-3">
              2023年4月に岐阜大学博士後期課程工学研究科工学専攻に社会人枠で入学。<br>
              現在はVision&Languageの研究に従事。
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      
      <!-- <router-link > aaa</router-link> -->
      <template v-for="item in tips_card_list">
        <v-col cols="4">
          <v-card :to="{ name: 'tips', params: {'mdfile':item.mdfile} }">
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-text>{{item.summary}}</v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import mark_view from '@/components/mark_view.vue';
import { ref } from 'vue';
const test_list = ref([{title:"aaa",summary:"aaaa"},{title:"bbb",summary:"bbbb"},{title:"ccc",summary:"cccc"},{title:"ddd",summary:"dddd"},
                        {title:"aaa",summary:"aaaa"},{title:"bbb",summary:"bbbb"},{title:"ccc",summary:"cccc"},{title:"ddd",summary:"dddd"}])

const tips_card_list= ref([{title:"openimage_dataset",mdfile:"openimagedataset.md",summary:"openimagedatasetについてあれこれ",imagepath:""},])


</script>

<style>

</style>

