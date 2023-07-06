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
import { onMounted } from 'vue';

const src_path = "/github.io/markdownfile/"

const tips_list= ref([{title:"openimage_dataset",mdfile:"openimagedataset.md",summary:"openimagedatasetについてあれこれ",imagepath:src_path + "openimagedataset.png",last_modify:null},
                      {title:"processpool",mdfile:"process_pool.md",summary:"CPUの数の暴力でゴリ押す方法",imagepath:src_path + "process_pool.jpg",last_modify:null},])
onMounted(()=>{
  // 最終更新時間を取得
  // さらに、最終更新時間でソート
  tips_list.value = tips_list.value.map((item)=>{
       fetch(src_path + item.mdfile)
      .then((response) => {
        item.last_modify = response.headers.get('last-modified')
      })
      return item
    })

})

provide('tips_list',tips_list)

</script>
