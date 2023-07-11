import { ref } from "vue";
import { projectAuth } from "@/configs/firebaseConfig";
const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  error.value = null;
  try {
    isPending.value = true;
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password,
      fullName
    );
    if (!res) throw new Error("Couldn't create a new user");
    await res.user.updateProfile({ displayName: fullName });
    alert("Đăng kí thành công!");
    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
