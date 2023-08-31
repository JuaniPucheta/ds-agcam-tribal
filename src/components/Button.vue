<template>
  <!-- <div class="bg-slate-200 dark:bg-slate-700 flex justify-center items-center h-screen"> -->
  <div class="bg-slate-200 dark:bg-slate-700 flex justify-center items-center">
    <div class="grid grid-cols-2 place-content-center items-center gap-4 h-screen my-5">
      <!--! Columna de botones NORMALES -->
      <div class="pr-10">
        <div class="card flex flex-col gap-4 p-4">
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
        </div>
      </div>
      <!--! Columna de código -->
      <div class="flex justify-center items-center">
        <div class="card-code p-4">
          <div class="flex justify-end mb-4">
            <button @click="copyToClipboard" class="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M3 5a2 2 0 012-2h5a1 1 0 100-2H5a4 4 0 00-4 4v11a4 4 0 004 4h11a4 4 0 004-4v-5a1 1 0 10-2 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
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
      </div>

      <!--? Columna de botones CON ICONOS -->
      <div class="pr-10">
        <div class="card flex flex-col gap-4 p-4">
          <h1 class="text-center text-2xl font-sans mb-4">Vista Previa de Botones</h1>
          <div class="grid grid-cols-3 gap-4">
            <v-btn prepend-icon="mdi-information-outline" @click="selectedButtonIndex = 0" :class="buttonClass(0)" color="primary">Primary</v-btn>
            <v-btn @click="selectedButtonIndex = 1" :class="buttonClass(1)" color="secondary">Secondary</v-btn>
            <v-btn @click="selectedButtonIndex = 2" :class="buttonClass(2)" color="accent">Accent</v-btn>
            <v-btn @click="selectedButtonIndex = 3" :class="buttonClass(3)" color="error">Error</v-btn>
            <v-btn @click="selectedButtonIndex = 4" :class="buttonClass(4)" color="warning">Warning</v-btn>
            <v-btn @click="selectedButtonIndex = 5" :class="buttonClass(5)" color="info">Info</v-btn>
            <v-btn @click="selectedButtonIndex = 6" :class="buttonClass(6)" color="success">Success</v-btn>
          </div>
        </div>
      </div>
      <!--! Columna de código -->
      <div class="flex justify-center items-center">
        <div class="card-code p-4">
          <h1 class="text-center text-2xl font-sans mb-4">Código</h1>
          <pre class="text-center">
            <code class="whitespace-pre-line">
              <!-- Código aquí -->
              <span :class="highlightedCodeClass(0)">&lt;v-btn prepend-icon="mdi-information-outline" color="primary"&gt;Primary&lt;/v-btn&gt;</span>
              <span :class="highlightedCodeClass(1)">&lt;v-btn color="secondary"&gt;Secondary&lt;/v-btn&gt;</span>
              <span :class="highlightedCodeClass(2)">&lt;v-btn color="accent"&gt;Accent&lt;/v-btn&gt;</span>
              <span :class="highlightedCodeClass(3)">&lt;v-btn color="error"&gt;Error&lt;/v-btn&gt;</span>
              <span :class="highlightedCodeClass(4)">&lt;v-btn color="warning"&gt;Warning&lt;/v-btn&gt;</span>
              <span :class="highlightedCodeClass(5)">&lt;v-btn color="info"&gt;Info&lt;/v-btn&gt;</span>
              <span :class="highlightedCodeClass(6)">&lt;v-btn color="success"&gt;Success&lt;/v-btn&gt;</span>
            </code>
          </pre>
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
  }),
  methods: {
    buttonClass(index) {
      return {
        'bg-blue-500': this.selectedButtonIndex === index,
        'hover:bg-blue-400': this.selectedButtonIndex !== index,
        'text-white': this.selectedButtonIndex === index,
        'text-black': this.selectedButtonIndex !== index,
      };
    },
    highlightedCodeClass(index) {
      return this.selectedButtonIndex === index ? 'bg-yellow-200' : '';
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
  name: 'ButtonComponent',
};
</script>

<style scoped>
.card {
  @apply bg-gradient-to-br from-blue-100 to-blue-200;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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

.card-code {
  @apply bg-gradient-to-br from-blue-100 to-blue-200;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 500px; /* Fija el ancho de la tarjeta */
}

/* Clase para resaltar el código seleccionado */
.bg-yellow-200 {
  background-color: #fee05b; /* Cambia el color de resaltado según tus preferencias */
}
</style>
