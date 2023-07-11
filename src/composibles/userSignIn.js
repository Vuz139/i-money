import { ref } from "vue";
import { projectAuth } from "@/configs/firebaseConfig";
const error = ref(null);
const isPeding = ref(false);

async function signin(email, password) {
  error.value = null;
  try {
    isPeding.value = true;
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    alert("Đăng nhập thành công!");
    return response;
  } catch (err) {
    console.log({ err: err });
    error.value = "Tài khoản hoặc mật khẩu không chính xác!";
  } finally {
    isPeding.value = false;
  }
}

export function useSignIn() {
  return { error, isPeding, signin };
}
