<template>
  <v-app class="bg-slate-300 dark:bg-slate-700">
    <default-bar class="dark:bg-slate-200 bg-slate-200" :currentRoute="currentRoute" />

    <default-view />  <!-- Esto renderiza toda la página -->
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBarPage.vue'
import DefaultView from './ViewPage.vue'
import { useRoute } from 'vue-router'; // Importa useRoute desde Vue Router

const currentRoute = useRoute(); // Obtén la ruta actual
</script>
