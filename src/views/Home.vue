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
      <p class="text-h4">Tips集</p>
    </v-row>
    <v-row>
      <template v-for="item in tips_card_list">
        <v-col cols="4">
          <v-card :to="{ name: 'tips', params: {'mdfile':item.mdfile} }"
          color="#8D4004"
          theme="dark">
            <v-img :src="item.imagepath" max-height="300px" cover></v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-text>{{item.summary}}</v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref,inject } from 'vue';

const tips_card_list = inject('tips_card_list')
console.log(tips_card_list.value)


</script>

<style>

</style>

