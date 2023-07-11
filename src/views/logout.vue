<template>
  <h1>Logout page</h1>
</template>

<script>
import { useLogOut } from "@/composibles/useLogout";
import { useRouter } from "vue-router";
export default {
  name: "LogoutView",
  setup() {
    const { error, signout } = useLogOut();
    const route = useRouter();
    async function onLoggout() {
      await signout();
      if (!error.value) {
        route.push({ name: "Login", params: {} });
      }
    }
    onLoggout();
    return { error };
  },
};
</script>
