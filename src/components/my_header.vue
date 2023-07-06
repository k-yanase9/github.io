<template>
    <v-toolbar >
        <v-img src="../assets/panda2.jpg"  cover max-width="70"></v-img>
        <v-toolbar-title>k-yanase</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn
                color="primary"
                v-bind="props"
                >
                Dropdown
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>

        </v-menu>
</v-toolbar>
</template>

<script setup>
const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]

</script>