<template>
  <div v-if="user" class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full mx-auto overflow-hidden">
          <img
            src="https://hinhnen4k.com/wp-content/uploads/2023/01/avatar-doi-cute-14.jpg"
            class="w-full h-full rounded-full object-cover"
            size="sx"
            alt="User's profile avatar"
          />
        </div>
        <div class="font-bold text-2xl">{{ user.displayName }}</div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>
  <!-- Start Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
        <div class="col-span-1">
          <ul>
            <li
              v-for="profileOption in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                :to="profileOption.route"
                class="flex my-2 items-center justify-between py-3 px-4 border rounded-lg hover:bg-slate-100"
                :class="profileOption.textColor"
              >
                <div class="flex items-center text-left">
                  <i :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composibles/useUser";
export default {
  name: "ProfileView",
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    // if(!user){

    // }
    const profileOptions = reactive(PROFILE_OPTIONS);
    return { profileOptions, user };
  },
};
</script>
