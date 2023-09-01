<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dark:bg-slate-800 h-screen grid items-center">
    <v-card
      class="mx-auto pa-3 pb-3 dark:bg-slate-300"
      elevation="8"
      width="448"
      rounded="lg"
    >
      <v-responsive
        class="dark:bg-white"
      >
        <v-text-field
          v-model="model"
          clearable
          hide-details="auto"
          label="Campo 1"
        ></v-text-field>
      </v-responsive>
    </v-card>

    <v-card
      class="mx-auto pa-3 pb-3 dark:bg-slate-300"
      elevation="8"
      width="448"
      rounded="lg"
    >
    <v-col>
      <v-text-field
        class="dark:bg-white"
        hide-details="auto"
        label="Regular"
        placeholder="Placeholder"
      ></v-text-field>
    </v-col>

    <v-col>
      <v-text-field
        class="dark:bg-white"
        hide-details="auto"
        label="Solo"
        variant="solo"
        placeholder="Placeholder"
      ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          class="dark:bg-white"
          hide-details="auto"
          label="Filled"
          placeholder="Placeholder"
          variant="filled"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          class="dark:bg-white"
          hide-details="auto"
          label="Outlined"
          placeholder="Placeholder"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          class="dark:bg-white"
          hide-details="auto"
          label="Plain"
          placeholder="Placeholder"
          variant="plain"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          class="dark:bg-white"
          hide-details="auto"
          label="Underlined"
          placeholder="Placeholder"
          variant="underlined"
        ></v-text-field>
      </v-col>
    </v-card>

  </div>
</template>

<script>
  export default {
    data: () => ({
      model: 'La cruz borra lo escrito -->',
    }),
  }
</script>
