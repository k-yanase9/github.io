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
      <p class="text-h4">Tips集(更新が新しいもの)</p>
    </v-row>
    <v-row>
      <template v-for="item in tips_card_list">
        <v-col cols="4">
          <v-card :to="{ name: 'tips', params: {'mdfile':item.rootdir + item.mdfile} }"
          color="#8D4004"
          theme="dark"
          height="200px">
            <v-img :src="item.rootdir+item.imagepath" max-height="100px" cover></v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-text>{{item.summary}}</v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { watch } from 'vue';
  import { ref,inject } from 'vue';
  const tips_list = inject('tips_list')
  const tips_card_list = ref(null)

  const get_card_tips = ()=>{
    tips_card_list.value = tips_list.value.slice()
    tips_card_list.value.sort((a,b)=>{
        if (new Date(a.last_modify) < new Date(b.last_modify)) return 1;
        if (new Date(a.last_modify) > new Date(b.last_modify)) return -1;
        return 0;
      })
    tips_card_list.value = tips_card_list.value.slice(0,3)
  }

  onMounted(()=>{
    get_card_tips()
  })

  watch(tips_list,(newVal,oldVal)=>{
  get_card_tips()
  },{deep:true})

</script>

<style>

</style>

