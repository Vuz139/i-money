<template>
  <div class="home">
    <div v-if="user">
      {{ user.displayName }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useUser } from "@/composibles/useUser";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
