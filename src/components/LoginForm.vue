<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-card-title class="primary">
            <h2 class="white--text">Inicio de Sesión</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="formData.email"
                label="Correo Electrónico"
                required
              ></v-text-field>
              <v-text-field
                v-model="formData.password"
                label="Contraseña"
                type="password"
                required
              ></v-text-field>
              <v-btn
                color="primary"
                class="mr-4"
                @click="login"
              >
                Iniciar Sesión
              </v-btn>
              <v-btn
                color="red"
                @click="loginWithGoogle"
              >
                Ingresar con Google
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <a href="#" class="blue--text">¿Olvidaste tu contraseña?</a>
            <v-btn
              color="primary"
              class="white--text"
              @click="goToSignUp"
            >
              Regístrate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // Agregar la lógica de inicio de sesión aquí
      console.log('Datos de inicio de sesión:', this.formData);
    },
    loginWithGoogle() {
      // Agregar la lógica para iniciar sesión con Google aquí
      console.log('Iniciando sesión con Google...');
    },
    goToSignUp() {
      // Redirigir a la página de registro aquí
      console.log('Redirigir a la página de registro...');
    },
  },
};
</script>

<style scoped>
/* Agregar estilos personalizados aquí si es necesario */
</style>
