<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div
            @click="goToHome"
            v-if="meta.leading"
            class="w-10 h-10 rounded-full cursor-pointer mx-auto overflow-hidden"
          >
            <img
              src="https://hinhnen4k.com/wp-content/uploads/2023/01/avatar-doi-cute-14.jpg"
              class="w-full h-full rounded-full object-cover"
              size="sm"
              alt="User's avatar"
            />
          </div>
          <h1 class="font-bold text-gray-600 text-2xl">{{ meta.text }}</h1>
        </div>
        <div
          class="flex items-center hover:bg-slate-200 rounded-full p-2 cursor-pointer"
        >
          <i class="fa-regular fa-bell text-2xl"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const goToHome = () => {
      router.push({ name: "Home", params: {} });
    };
    return {
      meta: computed(() => route.meta),
      goToHome,
    };
  },
};
</script>
