<template>
    <div class="dark:bg-slate-700 h-screen flex justify-center items-center">
      <v-row justify="center">
        <v-col>
          <v-card-actions class="justify-center">
          <v-btn
            class="text-decoration-none bg-slate-900"
            color="white"
            href="https://github.com/JuaniPucheta/ds-agcam-tribal/blob/main/src/components/Tables.vue"
            target="_blank"
            text
          >
            <v-icon left>mdi-github</v-icon>
            Código en Github
          </v-btn>
        </v-card-actions>

        <div class="max-w-md m-auto">
          <v-container fluid class="bg-slate-100 p-5 rounded-lg">
            <v-row>
              <v-col cols="12">
                <v-combobox
                  v-model="select"
                  :items="items"
                  label="Select a favorite activity or create a new one"
                  multiple
                ></v-combobox>
              </v-col>
              <v-col cols="12">
                <v-combobox
                  v-model="select"
                  :items="items"
                  label="I use chips"
                  multiple
                  chips
                ></v-combobox>
              </v-col>
              <v-col cols="12">
                <v-combobox
                  v-model="select"
                  :items="items"
                  label="I use a scoped slot"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      v-bind="data.attrs"
                      :model-value="data.selected"
                      :disabled="data.disabled"
                      size="small"
                      @click:close="data.parent.selectItem(data.item)"
                    >
                      <template v-slot:prepend>
                        <v-avatar
                          class="bg-accent text-uppercase"
                          start
                        >{{ data.item.title.slice(0, 1) }}</v-avatar>
                      </template>
                      {{ data.item.title }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
              <v-col cols="12">
                <v-combobox
                  v-model="select"
                  label="I'm readonly"
                  chips
                  multiple
                  readonly
                ></v-combobox>
              </v-col>
            </v-row>
          </v-container>
        </div>

        </v-col>
      </v-row>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        select: ['Vuetify', 'Programming'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
      }
    },
  }
</script>

<style>

</style>
