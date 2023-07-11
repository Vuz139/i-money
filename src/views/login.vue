<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              v-model="email"
              id="email"
              class="px-4 border py-3 rounded-lg border-gray-100 mt-1"
              type="email"
              placeholder="123@abc.com"
              autocomplete="username"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              v-model="password"
              id="password"
              class="px-4 border py-3 rounded-lg border-gray-100 mt-1"
              type="password"
              placeholder="********"
              autocomplete="current-password"
            />
          </label>
        </div>
        <div class="row">
          <button
            :disabled="isPeding ? true : false"
            @click="onSubmit"
            type="submit"
            class="py-3 text-center bg-primary text-white font-bold w-full rounded-lg"
          >
            <span v-if="!isPeding">Sign In</span>
            <span v-if="isPeding">Loading....</span>
          </button>
        </div>
      </form>
      <!-- Start error -->
      <div v-if="error" class="mt-2 text-sm text-left text-red">
        <span>{{ error }}</span>
      </div>
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary"
            >Sign Up</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignIn } from "@/composibles/userSignIn";
import { useRouter } from "vue-router";
export default {
  name: "LoginView",
  setup() {
    const { error, isPeding, signin } = useSignIn();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const onSubmit = async () => {
      await signin(email.value, password.value);

      if (!error.value) {
        router.push({ name: "Profile", params: {} });
      }
    };
    return { error, isPeding, email, password, onSubmit };
  },
};
</script>
