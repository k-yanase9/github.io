<template>
    <v-container>
        <v-card class="mx-auto">
            <v-container width="100%">
                <mark_view :mdfile="mdfile" />
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
import mark_view from '@/components/mark_view.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mdfile = ref(null)
onMounted(()=>{
    mdfile.value=route.params.mdfile
})

</script>