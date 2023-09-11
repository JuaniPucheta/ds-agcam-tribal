<template>
  <div class="dark:bg-slate-800 grid my-10 lg:grid-cols-1 sm:grid-cols-1 items-center">
    <!-- Columna de campo de texto -->
    <div class="m-auto p-5 my-8 rounded-md dark:bg-slate-300">
      <v-card elevation="8" width="448" rounded="lg">
        <v-responsive class="dark:bg-white">
          <v-text-field v-model="model" clearable hide-details="auto" label="Campo 1"></v-text-field>
        </v-responsive>
        <v-btn @click="toggleCode(0)" color="primary">Ver Código</v-btn>
        <!-- Código de Campo 1 -->
        <v-card v-if="showCode[0]" elevation="8" width="448" rounded="lg">
          <pre class="text-center">
            <code class="whitespace-pre-line">
              <span>
                &lt;v-responsive class="dark-bg-white">
                &lt;v-text-field
                  v-model="model"
                  clearable
                  hide-details="auto"
                  label="Campo 1"
                &gt;&lt;/v-text-field&gt;
                &lt;/v-responsive&gt;
              </span>
            </code>
          </pre>
        </v-card>
      </v-card>
    </div>

    <!-- Columna de variantes -->
    <div class="m-auto p-5 rounded-md dark:bg-slate-300">
      <v-card elevation="8" width="448" rounded="lg">
        <v-col v-for="(variant, index) in variants" :key="variant.label">
          <v-text-field
            class="dark-bg-white"
            hide-details="auto"
            :label="variant.label"
            :placeholder="variant.placeholder"
            :variant="variant.variant"
          ></v-text-field>
          <v-btn @click="toggleCode(index + 1)" color="primary">Ver Código</v-btn>
          <!-- Código de variantes -->
          <v-card v-if="showCode[index + 1]" elevation="8" width="448" rounded="lg">
            <pre class="text-center">
              <code class="whitespace-pre-line">
                <span>
                  &lt;v-text-field
                    class="dark-bg-white"
                    hide-details="auto"
                    :label="variant.label"
                    :placeholder="variant.placeholder"
                    :variant="variant.variant"
                  &gt;&lt;/v-text-field&gt;
                </span>
              </code>
            </pre>
          </v-card>
        </v-col>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'InputsPage',
    model: 'La cruz borra lo escrito -->',
    variants: [
      { label: 'Regular', placeholder: 'Placeholder', variant: null },
      { label: 'Solo', placeholder: 'Placeholder', variant: 'solo' },
      { label: 'Filled', placeholder: 'Placeholder', variant: 'filled' },
      { label: 'Outlined', placeholder: 'Placeholder', variant: 'outlined' },
      { label: 'Plain', placeholder: 'Placeholder', variant: 'plain' },
      { label: 'Underlined', placeholder: 'Placeholder', variant: 'underlined' },
    ],
    showCode: Array(7).fill(false),
  }),
  methods: {
    toggleCode(index) {
      this.showCode[index] = !this.showCode[index];
    },
  },
};
</script>

<style>
pre {
  background: #f4f4f4;
  border: 4px solid #ddd;
  border-left: 3px solid #f36d33;
  color: #666;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}
</style>
