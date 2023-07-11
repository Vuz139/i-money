import { ref } from "vue";
import { projectAuth } from "@/configs/firebaseConfig";
const error = ref(null);

async function signout() {
  error.value = null;
  try {
    const res = await projectAuth.signOut();

    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

export function useLogOut() {
  return { error, signout };
}
