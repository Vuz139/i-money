import { projectStorage } from "../configs/firebaseConfig";
import { ref } from "vue";
import { useUser } from "./useUser";
const { getUser } = useUser();
const { user } = getUser();
const useStorage = (name) => {
  const error = ref(null);
  const isPending = ref(false);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(image) {
    filePath.value = `${name}/${user.uid}/${image.name}`;
    error.value = null;
    try {
      isPending.value = true;
      const fileRef = projectStorage.ref().child(filePath.value);
      const res = await fileRef.put(image);
      url.value = await res.ref.getDownloadURL();
      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  }
  return {
    error,
    filePath,
    url,
    isPending,
    uploadFile,
  };
};
export default useStorage;
