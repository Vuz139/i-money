<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              v-model="fullName"
              class="px-4 border py-3 rounded-lg border-gray-100 mt-1"
              type="text"
              placeholder="Imoney...."
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              id="email"
              v-model="email"
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
              id="password"
              v-model="password"
              class="px-4 border py-3 rounded-lg border-gray-100 mt-1"
              type="password"
              placeholder="********"
              autocomplete="current-password"
            />
          </label>
        </div>
        <div class="row">
          <button
            :disabled="isPending ? true : false"
            type="submit"
            class="py-3 text-center bg-primary text-white font-bold w-full rounded-lg"
          >
            <span v-if="!isPending">Sign Up</span>
            <span v-if="isPending">Loading...</span>
          </button>
        </div>
      </form>
      <!-- Start Error -->
      <div v-if="error" class="text-left mt-2 text-red text-sm px-2">
        <span class="text-danger">{{ error }}</span>
      </div>
      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1"
          ><router-link :to="{ name: 'Login', params: {} }" class="text-primary"
            >Sign In</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composibles/useSignUp";
import { useRouter } from "vue-router";
export default {
  name: "RegisterView",
  setup() {
    const { error, isPending, signup } = useSignUp();
    const router = useRouter();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signup(email.value, password.value, fullName.value);
      if (!error.value) {
        router.push({ name: "Login", params: {} });
      }
    }
    return { onSubmit, fullName, email, password, error, isPending };
  },
};
</script>
