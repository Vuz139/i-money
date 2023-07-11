<template>
  <navigation-brand />
  <slot />
</template>

<script>
import NavigationBrand from "@/components/NavigationBrand.vue";
export default {
  name: "auth-layout",
  components: {
    NavigationBrand,
  },
};
</script>
