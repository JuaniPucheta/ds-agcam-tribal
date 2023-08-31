<template>
  <v-app>
    <v-system-bar class="bg-slate-200 dark:bg-slate-800">
      <v-spacer></v-spacer>

      <v-btn
        @click="toggleDark()"
      >
        <v-icon>mdi-toggle-switch</v-icon>
      </v-btn>

    </v-system-bar>

    <v-navigation-drawer v-model="drawer" class="bg-slate-200 dark:bg-slate-800">
      <v-sheet
        color="grey-lighten-4"
        class="pa-4 bg-slate-200 dark:bg-slate-800"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <div>john@google.com</div>
        <span>
          {{ isDark ? 'Dark' : 'Light'  }} Mode
        </span>
      </v-sheet>

      <v-divider></v-divider>

      <v-list v-model:opened="open" class="bg-slate-200 dark:bg-slate-800">
        <!--!HOME-->
        <v-list-item class="text-dark dark:text-white" prepend-icon="mdi-home" title="Home" :to="'/'"></v-list-item>

        <!--!COMPONENTS-->
        <v-list-group value="Components">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              class="text-dark dark:text-white"
              title="Components"
            ></v-list-item>
          </template>

          <v-list-group value="Button">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-multiple-outline"
                class="text-dark dark:text-white"
                title="Button"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon, to], i) in buttons"
              :key="i"
              :title="title"
              :to=to
              :prepend-icon="icon"
              :value="title"
              class="text-dark dark:text-white"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Inputs">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-cog-outline"
                title="Inputs"
                class="text-dark dark:text-white"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in inputs"
              :key="i"
              :title="title"
              :prepend-icon="icon"
              :value="title"
              class="text-dark dark:text-white"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Auth">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Auth"
                class="text-dark dark:text-white"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in cruds"
              :key="i"
              :value="title"
              :title="title"
              :prepend-icon="icon"
              class="text-dark dark:text-white"
            ></v-list-item>
          </v-list-group>
        </v-list-group>

        <!--!ABOUT en sidebar-->
        <v-list-item
          class="text-dark dark:text-white"
          prepend-icon="mdi-square"
          title="About"
          >
        </v-list-item>

        <v-list-item
          class="text-dark dark:text-white"
          prepend-icon="mdi-square"
          title="Otro About"
          :to="'/views/about'"
          >
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import {useDark, useToggle} from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  const drawer = ref(null)
</script>

<script>

  export default {
    name: 'App',

    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      open: ['Components'],
      buttons: [
        ['Button', 'mdi-account-multiple-outline', '/components/button'],
        ['Button Outline', 'mdi-cog-outline', '/components/button-outline'],
      ],
      inputs: [
        ['Text Field', 'mdi-account-multiple-outline'],
        ['Text Area', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Login', 'mdi-plus-outline'],
        ['Register', 'mdi-file-outline'],
        ['Forget-password', 'mdi-update'],
      ],
    }),
  }
</script>

