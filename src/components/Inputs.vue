<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dark:bg-slate-800 grid my-5 lg:grid-cols-2 sm:grid-cols-1 items-center">
      <v-card
        class="m-auto pa-3 pb-3 dark:bg-slate-300"
        elevation="8"
        width="448"
        rounded="lg"
      >
        <v-responsive class="dark:bg-white">
          <v-text-field
            v-model="model"
            clearable
            hide-details="auto"
            label="Campo 1"
          ></v-text-field>
        </v-responsive>
      </v-card>

      <!-- Codigo de Campo 1 -->
      <v-card
        class="mx-auto dark:bg-slate-300"
        elevation="8"
        width="448"
        rounded="lg"
      >
          <pre class="text-center">
              <code class="whitespace-pre-line">
                <span>
                  &lt;v-responsive class="dark:bg-white"&gt;
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

      <v-card
        class="m-auto dark:bg-slate-300"
        elevation="8"
        width="448"
        rounded="lg"
      >
        <v-col v-for="variant in variants" :key="variant.label">
          <v-text-field
            class="dark:bg-white"
            hide-details="auto"
            :label="variant.label"
            :placeholder="variant.placeholder"
            :variant="variant.variant"
          ></v-text-field>
        </v-col>
      </v-card>

      <!-- Codigo de Variant -->
      <v-card
        class="mx-auto mt-4 mb-8 dark:bg-slate-300"
        elevation="8"
        width="448"
        rounded="lg"
      >
          <pre class="text-center">
              <code class="whitespace-pre-line">
                <span>
                  &lt;v-col v-for="variant in variants" :key="variant.label"&gt;
                  &lt;v-text-field
                    class="dark:bg-white"
                    hide-details="auto"
                    :label="variant.label"
                    :placeholder="variant.placeholder"
                    :variant="variant.variant"
                  &gt;&lt;/v-text-field&gt;
                  &lt;/v-col&gt;

                    { label: 'Regular', placeholder: 'Placeholder', variant: null },
                    { label: 'Solo', placeholder: 'Placeholder', variant: 'solo' },
                    { label: 'Filled', placeholder: 'Placeholder', variant: 'filled' },
                    { label: 'Outlined', placeholder: 'Placeholder', variant: 'outlined' },
                    { label: 'Plain', placeholder: 'Placeholder', variant: 'plain' },
                    { label: 'Underlined', placeholder: 'Placeholder', variant: 'underlined' },
                </span>
              </code>
            </pre>
      </v-card>

    </div>
</template>

<script>
export default {
  data: () => ({
    model: 'La cruz borra lo escrito -->',
    variants: [
      { label: 'Regular', placeholder: 'Placeholder', variant: null },
      { label: 'Solo', placeholder: 'Placeholder', variant: 'solo' },
      { label: 'Filled', placeholder: 'Placeholder', variant: 'filled' },
      { label: 'Outlined', placeholder: 'Placeholder', variant: 'outlined' },
      { label: 'Plain', placeholder: 'Placeholder', variant: 'plain' },
      { label: 'Underlined', placeholder: 'Placeholder', variant: 'underlined' },
    ],
  }),
}
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
