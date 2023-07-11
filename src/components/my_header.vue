<template>
    <v-app-bar  >
        <v-img src="../assets/panda2.jpg"  cover max-width="70"></v-img>
        <v-toolbar-title class="text-h4 d-none d-lg-block">Yanase Kazuya</v-toolbar-title>
        <v-spacer ></v-spacer>
        <v-btn  class="text-h6"   prepend-icon="mdi-home-outline" color="#88AACC"  @click="goHome" >Home</v-btn>
        <v-menu open-on-hover open-on-click>
            <template v-slot:activator="{ props }">
                <v-btn
                color="orange"
                v-bind="props"
                class="text-h6"
                >
                <v-icon icon="mdi-head-lightbulb-outline"></v-icon>
                Tips
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in tips_list"
                :key="index"
                >
                <v-btn @click="goTips(item)" variant="text"> {{ item.title }}</v-btn>
                </v-list-item>
            </v-list>

        </v-menu>   
        
        
</v-app-bar>
</template>

<script>
    import { useRouter } from 'vue-router';
</script>

<script setup>
    import { inject } from 'vue';
    

    const router = useRouter();
    const tips_list = inject('tips_list')

    const goHome = () => {
        router.push({ name: 'Home' });
    };

    const goTips = (item) => {
        router.push({ name: 'tips', params: {'mdfile':item.rootdir + item.mdfile,'create_at':item.create_at,'last_modify':item.last_modify}});
    };

</script>