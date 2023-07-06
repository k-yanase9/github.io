<template>
    <v-container>
        <v-card>
            <v-card-item>
                <mark_view :mdfile="mdfile"/>
            </v-card-item>
        </v-card>
    </v-container>
</template>

<script setup>
import mark_view from '@/components/mark_view.vue';
import { watch } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mdfile = ref(null)
onMounted(()=>{
    mdfile.value=route.params.mdfile
})

</script>