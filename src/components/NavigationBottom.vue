<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li class="cursor-pointer" v-for="item in navItems" :key="item.name">
          <router-link :to="{ name: item.name, params: {} }"
            ><i :class="item.icon" class="text-2xl"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div @click="goToRoute" class="data-circle">
      <i class="fa-solid fa-circle-plus"></i>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { useRouter } from "vue-router";
export default {
  setup() {
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const router = useRouter();
    function goToRoute() {
      router.push({ name: "NewTransaction", params: {} });
    }
    return { navItems, goToRoute };
  },
};
</script>

<style lang="css" scoped>
footer#footer::before,
footer#footer .data-circle {
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  cursor: pointer;
}
footer#footer::before {
  background-color: #363853;
  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
}
footer#footer .data-circle {
  background-color: #0012ff;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  font-family: "Arial, sans-serif";
  font-size: 40px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  top: -29px;
}
footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
