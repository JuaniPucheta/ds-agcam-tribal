<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" class="bg-slate-300 dark:bg-slate-800">
      <v-sheet
        color="grey-lighten-4"
        class="pa-4 bg-slate-200 dark:bg-slate-800"
      >
        <v-avatar
          image="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <!-- <div>messi@messi.com</div> -->
      </v-sheet>

      <v-divider></v-divider>

      <v-list v-model:opened="open" class="bg-slate-200 dark:bg-slate-800">
        <!--!HOME-->
        <v-list-item a
          class="text-dark dark:text-white"
          prepend-icon="mdi-home"
          title="Home"
          :to="'/'">
        </v-list-item>

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
                prepend-icon="mdi-button-cursor"
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
                prepend-icon="mdi-label-outline"
                title="Inputs"
                class="text-dark dark:text-white"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon, to], i) in inputs"
              :key="i"
              :title="title"
              :prepend-icon="icon"
              :value="title"
              :to="to"
              class="text-dark dark:text-white"
            ></v-list-item>
          </v-list-group>

          <!--! COMBOBOX -->
            <v-list-group value="Combobox">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-check-bold"
                  title="Combobox"
                  class="text-dark dark:text-white"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon, to], i) in combobox"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
                :to="to"
                class="text-dark dark:text-white"
              ></v-list-item>
            </v-list-group>
          <!--! COMBOBOX -->

          <!--! FILE INPUT -->
            <v-list-group value="fileinput">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-check-bold"
                  title="File Input"
                  class="text-dark dark:text-white"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon, to], i) in fileinput"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
                :to="to"
                class="text-dark dark:text-white"
              ></v-list-item>
            </v-list-group>
          <!--! FILE INPUT -->

          <v-list-group value="Auth">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon="mdi-form-select"
                v-bind="props"
                title="Auth"
                class="text-dark dark:text-white"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon, to], i) in cruds"
              :key="i"
              :value="title"
              :title="title"
              :prepend-icon="icon"
              :to=to
              class="text-dark dark:text-white"
            ></v-list-item>
          </v-list-group>
        </v-list-group>

        <!--!TABLES en sidebar-->
        <v-list-group value="Tables">
          <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-table-account"
                class="text-dark dark:text-white reduce-padding-left"
                title="Tables"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon, to], i) in tables"
              :key="i"
              :title="title"
              :to=to
              :prepend-icon="icon"
              :value="title"
              class="text-dark dark:text-white"
            ></v-list-item>

        </v-list-group>

        <!--!FORMS en sidebar-->
        <v-list-group value="Forms">
          <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-form-select"
                class="text-dark dark:text-white reduce-padding-left"
                title="Forms"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon, to], i) in forms"
              :key="i"
              :title="title"
              :to=to
              :prepend-icon="icon"
              :value="title"
              class="text-dark dark:text-white"
            ></v-list-item>

        </v-list-group>


        <!--!ABOUT en sidebar-->
        <!-- <v-list-item
          class="text-dark dark:text-white"
          prepend-icon="mdi-square"
          title="About"
          :to="'/views/about'"
          >
        </v-list-item> -->

      </v-list>

      <v-divider></v-divider>

      <div class="m-auto px-3 cursor-pointer relative bg-slate-100 dark:bg-slate-600">
        <button
          class="toogle-theme flex items-center justify-between gap-2 w-full px-2 py-1 rounded-lg my-2"
          @click="toggleDark()"
        >
          <div class="relative border-[1px] border-slate-700 bg-blue-500 dark:bg-slate-900 rounded-full w-[46px] h-[23px]">
            <span>🔆</span>
            <span>🌙</span>
            <div class="swich w-[22px] h-[22px] rounded-full bg-brand shadow top-0 absolute"></div>
          </div>
          <span class="text-md text-slate-700 dark:text-slate-200">Claro / Oscuro</span>
        </button>
      </div>

    </v-navigation-drawer>

    <v-app-bar app
      scroll-behavior="fade-image"
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon class="bg-slate-100 opacity-90 hover" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-white">Design System - Vue</v-toolbar-title>

    </v-app-bar>

    <v-main class="bg-slate-200 dark:bg-slate-700">
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

    computed: {
      filteredMenuItems() {
        const search = this.searchQuery.toLowerCase();
        return this.menuItems.filter((item) =>
          item.title.toLowerCase().includes(search)
        );
      },
    },
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      open: ['Components'],
      buttons: [
        ['Button', 'mdi-gesture-tap-button', '/components/button'],
      ],
      inputs: [
        ['Some Inputs', 'mdi-account-multiple-outline', '/components/inputs'],
      ],
      combobox: [
        ['Multiple', 'mdi-check-all', '/components/combobox'],
      ],
      fileinput: [
        ['Files', 'mdi-file-upload', '/components/file-input'],
      ],
      cruds: [
        ['Login', 'mdi-login', '/components/login-form'],
        ['Register', 'mdi-account-plus', '/components/register-form'],
        ['Forget-password', 'mdi-lock-question', '/components/forget-password'],
      ],
      tables: [
        ['Tables', 'mdi-table', '/components/table'],
        ['TablesActions', 'mdi-table-cog', '/components/table-actions']
      ],
      forms: [
        ['Form1', 'mdi-form-textbox', '/components/form-1'],
        ['Modals', 'mdi-plus-box-outline', '/components/modals'],
      ]
    }),
  }
</script>

<style>
/* Anula el estilo que quieres eliminar */
.v-navigation-drawer .v-list-group__items .v-list-item {
  padding-inline-start: 30px !important;
}
</style>
