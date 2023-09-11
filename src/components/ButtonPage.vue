<template>
  <div class="bg-slate-200 dark:bg-slate-700 flex justify-center items-center">
    <div class="grid sm:grid-cols-1 lg:grid-cols-1 items-center gap-4 my-4">
      <!-- Columna de botones NORMALES y Código -->
      <div class="pr-10">
        <div class="dark:bg-slate-200 bg-gradient-to-tr from-slate-100 to-slate-200 rounded-lg shadow-md flex flex-col gap-4 p-4 relative">
          <!-- Botón para mostrar/ocultar el código -->
          <button @click="toggleCodigo" class="hover:text-gray-800 absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded">
            {{ mostrarCodigo ? 'Ocultar Código' : 'Ver Código' }}
          </button>
          <h1 class="text-center text-2xl font-sans mb-4">Vista Previa de Botones</h1>
          <div class="grid grid-cols-3 gap-4">
            <v-btn @click="selectedButtonIndex = 0" :class="buttonClass(0)" color="primary">Primary</v-btn>
            <v-btn @click="selectedButtonIndex = 1" :class="buttonClass(1)" color="secondary">Secondary</v-btn>
            <v-btn @click="selectedButtonIndex = 2" :class="buttonClass(2)" color="accent">Accent</v-btn>
            <v-btn @click="selectedButtonIndex = 3" :class="buttonClass(3)" color="error">Error</v-btn>
            <v-btn @click="selectedButtonIndex = 4" :class="buttonClass(4)" color="warning">Warning</v-btn>
            <v-btn @click="selectedButtonIndex = 5" :class="buttonClass(5)" color="info">Info</v-btn>
            <v-btn @click="selectedButtonIndex = 6" :class="buttonClass(6)" color="success">Success</v-btn>
          </div>

          <!-- Mostrar el código con transición -->
          <transition name="slide-fade">
            <div v-if="mostrarCodigo" class="mt-4">
              <h1 class="text-center text-2xl font-sans mb-4">Código</h1>
              <pre class="text-center">
                <code class="whitespace-pre-line">
                  <!-- Código aquí -->
                  <span :class="highlightedCodeClass(0)">&lt;v-btn color="primary"&gt;Primary&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeClass(1)">&lt;v-btn color="secondary"&gt;Secondary&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeClass(2)">&lt;v-btn color="accent"&gt;Accent&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeClass(3)">&lt;v-btn color="error"&gt;Error&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeClass(4)">&lt;v-btn color="warning"&gt;Warning&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeClass(5)">&lt;v-btn color="info"&gt;Info&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeClass(6)">&lt;v-btn color="success"&gt;Success&lt;/v-btn&gt;</span>
                </code>
              </pre>
            </div>
          </transition>
        </div>
      </div>

      <!-- Columna de botones CON ICONOS y Código -->
      <div class="pr-10">
        <div class="dark:bg-slate-200 bg-gradient-to-tr from-slate-100 to-slate-200 rounded-lg shadow-md flex flex-col gap-4 p-4 relative">
          <!-- Botón para mostrar/ocultar el código -->
          <button @click="toggleCodigoIcon" class=" hover:text-gray-800 absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded">
            {{ mostrarCodigoIcon ? 'Ocultar Código' : 'Ver Código' }}
          </button>
          <h1 class="text-center text-2xl font-sans mb-4">Vista Previa de Botones con Iconos</h1>
          <div class="grid grid-cols-3 gap-4">
            <v-btn prepend-icon="mdi-information-outline" @click="selectedButtonIconIndex = 0" :class="buttonIconClass(0)" color="info">Info</v-btn>
            <v-btn prepend-icon="mdi-check-circle" @click="selectedButtonIconIndex = 1" :class="buttonIconClass(1)" color="success">Success</v-btn>
            <v-btn prepend-icon="mdi-alert" @click="selectedButtonIconIndex = 2" :class="buttonIconClass(2)" color="warning">Warning</v-btn>
            <v-btn prepend-icon="mdi-alert-box" @click="selectedButtonIconIndex = 3" :class="buttonIconClass(3)" color="error">Error</v-btn>
          </div>

          <!-- Mostrar el código con transición -->
          <transition name="slide-fade">
            <div v-if="mostrarCodigoIcon" class="mt-4">
              <h1 class="text-center text-2xl font-sans mb-4">Código</h1>
              <pre class="text-center">
                <code class="whitespace-pre-line">
                  <!-- Código aquí -->
                  <span :class="highlightedCodeIconClass(0)">&lt;v-btn prepend-icon="mdi-information-outline" color="info"&gt;Info&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeIconClass(1)">&lt;v-btn prepend-icon="mdi-check-circle" color="success"&gt;Success&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeIconClass(2)">&lt;v-btn prepend-icon="mdi-alert" color="warning"&gt;Warning&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeIconClass(3)">&lt;v-btn prepend-icon="mdi-alert-box" color="error"&gt;Error&lt;/v-btn&gt;</span>
                </code>
              </pre>
            </div>
          </transition>
        </div>
      </div>

      <!-- Columna de botones ROUNDED y Código -->
      <div class="pr-10">
        <div class="dark:bg-slate-200 bg-gradient-to-tr from-slate-100 to-slate-200 rounded-lg shadow-md flex flex-col gap-4 p-4 relative">
          <!-- Botón para mostrar/ocultar el código -->
          <button @click="toggleCodigoRounded" class="hover:text-gray-800 absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded">
            {{ mostrarCodigoRounded ? 'Ocultar Código' : 'Ver Código' }}
          </button>
          <h1 class="text-center text-2xl font-sans mb-4">Vista Previa de Botones Rounded</h1>
          <div class="grid grid-cols-2 gap-4">
            <v-btn @click="selectedButtonRoundedIndex = 0" :class="buttonRoundedClass(0)" class="text-" block rounded="0" size="x-large">Rounded 0</v-btn>
            <v-btn @click="selectedButtonRoundedIndex = 1" :class="buttonRoundedClass(1)" block rounded="xs" size="x-large">Rounded xs</v-btn>
            <v-btn @click="selectedButtonRoundedIndex = 2" :class="buttonRoundedClass(2)" block rounded="sm" size="x-large">Rounded sm</v-btn>
            <v-btn @click="selectedButtonRoundedIndex = 3" :class="buttonRoundedClass(3)" block size="x-large">Rounded x-large</v-btn>
            <v-btn @click="selectedButtonRoundedIndex = 4" :class="buttonRoundedClass(4)" block rounded="lg" size="x-large">Rounded lg</v-btn>
            <v-btn @click="selectedButtonRoundedIndex = 5" :class="buttonRoundedClass(5)" block rounded="xl" size="x-large">Rounded xl</v-btn>
          </div>

          <!-- Mostrar el código con transición -->
          <transition name="slide-fade">
            <div v-if="mostrarCodigoRounded" class="mt-4">
              <h1 class="text-center text-2xl font-sans mb-4">Código</h1>
              <pre class="text-center">
                <code class="whitespace-pre-line">
                  <!-- Código aquí -->
                  <span :class="highlightedCodeRoundedClass(0)"> &lt;v-btn block rounded="0" size="x-large"&gt;Rounded 0&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeRoundedClass(1)"> &lt;v-btn block rounded="xs" size="x-large"&gt;Rounded xs&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeRoundedClass(2)"> &lt;v-btn block rounded="sm" size="x-large"&gt;Rounded sm&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeRoundedClass(3)"> &lt;v-btn block size="x-large"&gt;Rounded x-large&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeRoundedClass(4)"> &lt;v-btn block rounded="lg" size="x-large"&gt;Rounded lg&lt;/v-btn&gt;</span>
                  <span :class="highlightedCodeRoundedClass(5)"> &lt;v-btn block rounded="xl" size="x-large"&gt;Rounded xl&lt;/v-btn&gt;</span>
                </code>
              </pre>
            </div>
          </transition>
        </div>
      </div>

      <div class="bg-white">
        <h1>asdasd</h1>
      </div>
      <div class="bg-red">
        <h1>asdasd</h1>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  data: () => ({
    selectedButtonIndex: null,
    selectedButtonIconIndex: null,
    selectedButtonRoundedIndex: null,
    mostrarCodigo: false, // Inicialmente oculto
    mostrarCodigoIcon: false, // Inicialmente oculto
    mostrarCodigoRounded: false
  }),
  methods: {
    toggleCodigo() {
      this.mostrarCodigo = !this.mostrarCodigo; // Cambiar el estado al hacer clic en el botón
    },
    toggleCodigoIcon() {
      this.mostrarCodigoIcon = !this.mostrarCodigoIcon; // Cambiar el estado al hacer clic en el botón
    },
    toggleCodigoRounded() {
      this.mostrarCodigoRounded = !this.mostrarCodigoRounded; // Cambiar el estado al hacer clic en el botón
    },
    buttonClass(index) {
      return {
        'bg-blue-500': this.selectedButtonIndex === index,
        'hover:bg-blue-400': this.selectedButtonIndex !== index,
        'text-white': this.selectedButtonIndex === index,
        'text-black': this.selectedButtonIndex !== index,
      };
    },
    buttonIconClass(index) {
      return {
        'bg-blue-500': this.selectedButtonIconIndex === index,
        'hover:bg-blue-400': this.selectedButtonIconIndex !== index,
        'text-white': this.selectedButtonIconIndex === index,
        'text-black': this.selectedButtonIconIndex !== index,
      };
    },
    buttonRoundedClass(index){
      return {
        'bg-blue-500': this.selectedButtonRoundedIndex === index,
        'hover:bg-blue-400': this.selectedButtonRoundedIndex !== index,
        'text-white': this.selectedButtonRoundedIndex === index,
        'text-black': this.selectedButtonRoundedIndex !== index,
      };
    },
    highlightedCodeClass(index) {
      return this.selectedButtonIndex === index ? 'bg-blue-200' : '';
    },
    highlightedCodeIconClass(index) {
      return this.selectedButtonIconIndex === index ? 'bg-yellow-200' : '';
    },
    highlightedCodeRoundedClass(index) {
      return this.selectedButtonRoundedIndex === index ? 'bg-green-200' : '';
    },
    copyToClipboard() {
      const code = document.querySelector('code');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
    },
  },
  name: 'ButtonPage',
};
</script>

<style scoped>

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}

pre {
  background: #f4f4f4;
    border: 4px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
}

/* Clase para resaltar el código seleccionado */
.bg-yellow-200 {
  background-color: #fee05b; /* Cambia el color de resaltado según tus preferencias */
}
</style>
