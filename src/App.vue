<template>
  <v-app theme="dark">
    
    <my_header/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import { provide,onMounted,ref} from 'vue';
</script>

<script setup>
  import my_header from './components/my_header.vue';
  const src_path = "/github.io/"
  const tips_list_filepath = src_path + "tips_list.json"

  const tips_list= ref([])

  onMounted(()=>{
    axios(tips_list_filepath)
    .then((res)=>{
      tips_list.value = res.data
      console.log(tips_list.value)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  provide('tips_list',tips_list)

</script>
