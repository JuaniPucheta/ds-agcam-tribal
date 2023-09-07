<template>
  <div class="dark:bg-slate-700 h-screen flex justify-center items-center">
    <v-row
        justify="center"
    >
      <v-col>
        <v-card
          class="mx-auto pa-8 pb-"
          max-width="448"
          rounded="lg"
          >
              <!-- Enlace del codigo -->
              <v-card-actions class="justify-center">
                <v-btn
                  class="text-decoration-none"
                  color="blue"
                  href="https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/v-text-field/misc-custom-validation.vue"
                  target="_blank"
                  text
                >
                  <v-icon left>mdi-github</v-icon>
                  Código en Github
                </v-btn>
              </v-card-actions>

          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'Este campo es requerido']"
              :error-messages="errorMessages"
              label="Nombre completo"
              placeholder="Juan Pérez"
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="[() => !!address || 'Este campo es requerido', () => !!address && address.length <= 25 || 'La dirección debe tener menos de 25 caracteres', addressCheck]"
              label="Dirección"
              placeholder="Calle Principal 123"
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'Este campo es requerido', addressCheck]"
              label="Ciudad"
              placeholder="Ciudad de México"
              required
            ></v-text-field>
            <v-text-field
              ref="state"
              v-model="state"
              :rules="[() => !!state || 'Este campo es requerido']"
              label="Estado/Provincia/Región"
              required
              placeholder="CDMX"
            ></v-text-field>
            <v-text-field
              ref="zip"
              v-model="zip"
              :rules="[() => !!zip || 'Este campo es requerido']"
              label="Código postal"
              required
              placeholder="12345"
            ></v-text-field>
            <v-autocomplete
              ref="country"
              v-model="country"
              :rules="[() => !!country || 'Este campo es requerido']"
              :items="countries"
              label="País"
              placeholder="Seleccionar..."
              required
            ></v-autocomplete>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>

            <router-link to="/components/login-form">
              <v-btn variant="text">
                Cancelar
              </v-btn>
            </router-link>

            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                key="refresh-tooltip"
                v-if="formHasErrors"
                left
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Actualizar formulario</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>

            <router-link to="/components/login-form">
              <v-btn
                color="primary"
                variant="text"
                @click="submit"
              >
                Enviar
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    countries: ['Afganistán', 'Albania', 'Argelia', 'Andorra', 'Angola', 'Anguila', 'Antigua y Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bahréin', 'Bangladesh', 'Barbados', 'Bielorrusia', 'Bélgica', 'Belice', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia y Herzegovina', 'Botswana', 'Brasil', 'Islas Vírgenes Británicas', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Camboya', 'Camerún', 'Cabo Verde', 'Islas Caimán', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Islas Cook', 'Costa Rica', 'Costa de Marfil', 'Croacia', 'Cuba', 'Chipre', 'República Checa', 'Dinamarca', 'Djibouti', 'Dominica', 'República Dominicana', 'Ecuador', 'Egipto', 'El Salvador', 'Guinea Ecuatorial', 'Estonia', 'Etiopía', 'Islas Malvinas', 'Islas Faroe', 'Fiji', 'Finlandia', 'Francia', 'Polinesia Francesa', 'Gabón', 'Gambia', 'Georgia', 'Alemania', 'Ghana', 'Gibraltar', 'Grecia', 'Groenlandia', 'Granada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haití', 'Honduras', 'Hong Kong', 'Hungría', 'Islandia', 'India', 'Indonesia', 'Irán', 'Iraq', 'Irlanda', 'Isla de Man', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jersey', 'Jordania', 'Kazajstán', 'Kenia', 'Kuwait', 'Kirguistán', 'Laos', 'Letonia', 'Líbano', 'Lesotho', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Macao', 'Macedonia', 'Madagascar', 'Malawi', 'Malasia', 'Maldivas', 'Mali', 'Malta', 'Mauritania', 'Mauricio', 'México', 'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Marruecos', 'Mozambique', 'Namibia', 'Nepal', 'Países Bajos', 'Antillas Holandesas', 'Nueva Caledonia', 'Nueva Zelanda', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Omán', 'Pakistán', 'Palestina', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Filipinas', 'Polonia', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunión', 'Rumania', 'Rusia', 'Ruanda', 'San Pedro y Miquelón', 'Samoa', 'San Marino', 'Satélite', 'Arabia Saudita', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Eslovaquia', 'Eslovenia', 'Sudáfrica', 'Corea del Sur', 'España', 'Sri Lanka', 'San Cristóbal y Nieves', 'Santa Lucía', 'San Vicente', 'Sudán', 'Surinam', 'Swazilandia', 'Suecia', 'Suiza', 'Siria', 'Taiwán', 'Tayikistán', 'Tanzania', 'Tailandia', 'Timor Oriental', 'Togo', 'Tonga', 'Trinidad y Tobago', 'Túnez', 'Turquía', 'Turkmenistán', 'Islas Turcas y Caicos', 'Uganda', 'Ucrania', 'Emiratos Árabes Unidos', 'Reino Unido', 'Estados Unidos', 'Uruguay', 'Uzbekistán', 'Venezuela', 'Vietnam', 'Islas Vírgenes (EE. UU.)', 'Yemen', 'Zambia', 'Zimbabwe'],
      errorMessages: '',
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      formHasErrors: false,
    }),

    computed: {
      form () {
        return {
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `¡Oye! Soy requerido`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>
