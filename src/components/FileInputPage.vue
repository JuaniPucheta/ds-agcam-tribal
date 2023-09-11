<template>
    <div class="dark:bg-slate-700 p-10 flex justify-center items-center">
      <v-row justify="center">
        <v-col>
          <v-card-actions class="justify-center">
            <v-btn
              class="text-decoration-none bg-slate-900 mb-10"
              color="white"
              href="https://github.com/JuaniPucheta/ds-agcam-tribal/blob/main/src/components/Tables.vue"
              target="_blank"
              text
            >
              <v-icon left>mdi-github</v-icon>
              Código en Github
            </v-btn>
          </v-card-actions>

          <!--! MISC -->
            <div class="max-w-md m-auto p-3 rounded-lg mb-10 dark:bg-slate-200 bg-slate-100">
              <v-file-input
                v-model="files"
                color="deep-purple-accent-4"
                counter
                label="File input - Misc"
                multiple
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                variant="outlined"
                :show-size="1000"
              >
                <template v-slot:selection="{ fileNames }">
                  <template v-for="(fileName, index) in fileNames" :key="fileName">
                    <v-chip
                      v-if="index < 2"
                      color="deep-purple-accent-4"
                      label
                      size="small"
                      class="me-2"
                    >
                      {{ fileName }}
                    </v-chip>

                    <span
                      v-else-if="index === 2"
                      class="text-overline text-grey-darken-3 mx-2"
                    >
                      +{{ files.length - 2 }} File(s)
                    </span>
                  </template>
                </template>
              </v-file-input>
            </div>
          <!--! MISC -->

          <!--! SHOW SIZE -->
          <div class="max-w-lg m-auto p-3 dark:bg-slate-200 bg-slate-100 rounded-lg">
            <v-file-input
              show-size
              label="File input - Show Size"
            ></v-file-input>
          </div>
          <!--! SHOW SIZE -->

        </v-col>
      </v-row>

    </div>
</template>

<script>
  export default {
    data: () => ({
      files: [],
    }),
  }
</script>

<style>

</style>
