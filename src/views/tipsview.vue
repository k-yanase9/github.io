<template>
    <v-container>
        <v-card class="mx-auto">
            <mark_view :mdfile="mdfile" />
        </v-card>
    </v-container>
</template>

<script setup>
import mark_view from '@/components/mark_view.vue';
import { ref,watch } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mdfile = ref(null)
onMounted(()=>{
    mdfile.value=route.params.mdfile
})
watch(()=>route.params.mdfile,(newVal,oldVal)=>{
    mdfile.value=route.params.mdfile
  },{deep:true})

</script>