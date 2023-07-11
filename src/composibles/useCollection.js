import { projectFireStore } from "../configs/firebaseConfig";
import { ref } from "vue";

const useCollection = (name) => {
  const error = ref(null);
  const isPending = ref(false);
  async function addRecord(record) {
    error.value = null;
    try {
      isPending.value = true;
      const res = await projectFireStore.collection(name).add(record);
      return res;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  }
  return { error, isPending, addRecord };
};

export default useCollection;
