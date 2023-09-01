<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="bg-slate-200 dark:bg-slate-700 flex items-center justify-center h-screen">
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(set, index) in messageSets" :key="index">
        <v-card class="mb-4">
          <v-img
            height="200"
            :src="set.imageSrc"
            cover
          >
            <v-toolbar color="rgba(0, 0, 0, 0)" dark>
              <v-toolbar-title class="text-h6 text-white">
                {{ set.title }}
              </v-toolbar-title>
            </v-toolbar>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>

            <v-timeline density="compact" align="start">

              <v-timeline-item
                v-for="message in set.messages"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>

            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isMobile: false,
    methods: {
      openDocumentation(link) {
        window.location.href = link;
      }
    },
    messageSets: [
      {
        title: 'Vue',
        imageSrc: 'https://adrianalonso.es/wp-content/uploads/2018/01/vue.jpg', // Cambia esta URL a la imagen de Vue
        messages: [
          {
            from: 'Vue',
            time: '30/08/23',
            message: 'Documentación',
            color: 'grey-darken-1',
            link: 'https://es.vuejs.org/v2/guide/',
          },
          {
            from: 'Vuetify',
            time: '30/08/23',
            message: 'Documentación',
            color: 'deep-purple-lighten-1',
            link: 'https://vuetifyjs.com/',
          },
        ],
      },
      {
        title: 'Tailwind CSS',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGIv615PfQgNzwAbpMWcKh-qfT_MUqxOCRb5j8WdbfHWOubZRy1TwuKHJFgWmzi1-CFQ&usqp=CAU', // Cambia esta URL a la imagen de Tailwind
        messages: [
        {
            from: 'Tailwind CSS Vue',
            time: '30/08/23',
            message: 'Documentación',
            color: 'deep-purple-lighten-1',
          },
        ],
      },
      {
        title: 'Vite',
        imageSrc: 'data:image/jpeg;base64,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', // Cambia esta URL a la imagen de Vite
        messages: [
          {
            from: 'Vite Vue',
            time: '30/08/23',
            message: 'Documentación',
            color: 'deep-purple-lighten-1',
          },
        ],
      },
    ],

  })
}
</script>
