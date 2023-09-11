<template>
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
        <hr>

        <!--! ALTA-->
        <div class="py-20">
          <v-row justify="center">
            <v-dialog
              v-model="dialogAlta"
              persistent
              width="1024"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                >
                  modal alta
                </v-btn>
              </template>
              <v-card class="m-auto">
                <v-card-title>
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal first name*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogAlta = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialogAlta = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>

        <!--! SCROLLABLE -->
        <div>
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
              scrollable
              width="220"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="success"
                  v-bind="props"
                >
                  modal scrolleable
                </v-btn>
              </template>
              <v-card>
                <v-card-title>Select Country</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                  <v-radio-group
                    v-model="dialogm1"
                    column
                  >
                    <v-radio
                      label="Bahamas"
                      value="bahamas"
                    ></v-radio>
                    <v-radio
                      label="Bahrain"
                      value="bahrain"
                    ></v-radio>
                    <v-radio
                      label="Bangladesh"
                      value="bangladesh"
                    ></v-radio>
                    <v-radio
                      label="Barbados"
                      value="barbados"
                    ></v-radio>
                    <v-radio
                      label="Belarus"
                      value="belarus"
                    ></v-radio>
                    <v-radio
                      label="Belgium"
                      value="belgium"
                    ></v-radio>
                    <v-radio
                      label="Belize"
                      value="belize"
                    ></v-radio>
                    <v-radio
                      label="Benin"
                      value="benin"
                    ></v-radio>
                    <v-radio
                      label="Bermuda"
                      value="bermuda"
                    ></v-radio>
                    <v-radio
                      label="Bhutan"
                      value="bhutan"
                    ></v-radio>
                  </v-radio-group>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>

        <!--! Start Loading-->
        <div class="text-center py-20">
          <v-btn
            :disabled="dialogLoading"
            :loading="dialogLoading"
            color="purple-darken-2"
            @click="dialogLoading = true"
          >
            Start loading
          </v-btn>
          <v-dialog
            v-model="dialogLoading"
            :scrim="false"
            persistent
            width="auto"
          >
            <v-card
              color="primary"
            >
              <v-card-text>
                Please stand by
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>

      </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FormAltaPage',
  data: () => ({
    dialogAlta: false,
    dialog: false,
    dialogm1: null,
    dialogLoading: false,
  }),
  watch: {
    dialogLoading (val) {
      if (!val) return

      setTimeout(() => (this.dialogLoading = false), 1000)
    },
  },
}
</script>

<style>

</style>
