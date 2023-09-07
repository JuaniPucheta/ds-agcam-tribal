<template>
  <div class="dark:bg-slate-700 h-screen flex justify-center items-center">
    <v-card
      v-if="!showConfirmationCard"
      class="mx-auto pa-12 pb-8"
      width="448"
      rounded="lg"
    >
        <!-- Enlace del codigo -->
        <v-card-actions class="justify-center">
          <v-btn
            class="text-decoration-none"
            color="blue"
            href="https://github.com/JuaniPucheta/ds-agcam-tribal/blob/main/src/components/ForgetPassword.vue"
            target="_blank"
            text
          >
            <v-icon left>mdi-github</v-icon>
            Código en Github
          </v-btn>
        </v-card-actions>

      <div class="text-subtitle-1 text-medium-emphasis">Ingrese su correo electrónico</div>

      <v-text-field
        density="compact"
        placeholder="Dirección de correo electrónico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <router-link to="/">
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          @click="sendEmail"
        >
          Enviar
        </v-btn>
      </router-link>

      <v-card-text class="text-center">
        <router-link to="/components/login-form" class="text-blue text-decoration-none">
          Volver atrás <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>

    </v-card>

    <!-- Mostrar la tarjeta de confirmación si showConfirmationCard es verdadero -->
    <v-card
      v-if="showConfirmationCard"
      class="mx-auto pa-12 pb-8"
      width="448"
      rounded="lg"
    >
      <!-- Mensaje de confirmación -->
      <div class="text-subtitle-1 text-medium-emphasis">
        Se ha enviado un correo electrónico de confirmación a su correo electrónico.
      </div>

      <v-card-text class="text-center">
        <router-link to="/components/forget-password" class="text-blue text-decoration-none">
          Volver al login <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>


  </div>
</template>

<script>
  export default {
    name: 'ForgetPasswordComponent',
    data: () => ({
      showConfirmationCard: false,
    }),
    methods: {
      sendEmail() {
        this.showConfirmationCard = true;
      },
    },
  }
</script>
