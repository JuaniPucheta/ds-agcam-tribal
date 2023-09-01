<template>
  <div class="dark:bg-slate-700 h-screen flex justify-center items-center">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Correo electrónico</div>

      <v-text-field
        density="compact"
        placeholder="Dirección de correo electrónico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contraseña

        <router-link to="/components/forget-password">
          <a
            class="text-caption text-decoration-none text-blue"
            rel="noopener noreferrer"
          >
            ¿Olvidó su contraseña?</a>
        </router-link>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Ingrese su contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Advertencia: Después de 3 intentos de inicio de sesión fallidos consecutivos, su cuenta se bloqueará temporalmente durante tres horas. Si debe iniciar sesión ahora, también puede hacer clic en "¿Olvidó su contraseña de inicio de sesión?" a continuación para restablecer la contraseña de inicio de sesión.
        </v-card-text>
      </v-card>

      <router-link to="/">
        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
          Iniciar sesión
        </v-btn>
      </router-link>

      <v-card-text class="text-center">
        <router-link to="/components/register-form" class="text-blue text-decoration-none">
          Regístrese ahora <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'LoginFormComponent',
    data: () => ({
      visible: false,
    }),
  }
</script>
