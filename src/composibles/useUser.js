import { ref } from "vue";
import { projectAuth } from "../configs/firebaseConfig";

const user = ref(projectAuth.currentUser);
projectAuth.onAuthStateChanged((u) => {
  if (u) user.value = u;
});

function getUser() {
  return { user: user.value };
}

export function useUser() {
  return { getUser };
}
