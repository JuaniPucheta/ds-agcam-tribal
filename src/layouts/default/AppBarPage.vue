<template>
  <v-breadcrumbs :items="breadcrumbItems">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    breadcrumbItems() {
      const currentRoute = this.$route;
      const matchedRoutes = currentRoute.matched;

      // Genera los elementos del breadcrumb basados en las rutas coincidentes
      const items = matchedRoutes.map(route => {
        return {
          text: route.name || '',
          disabled: false,
          href: route.path,
        };
      });

      console.log('no funca el breadcrumb...', items)
      return items;
    },
  },
};
</script>
