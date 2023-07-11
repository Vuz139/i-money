<template>
  <form v-if="!isPending" @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-sm font-bold text-dark border border-dark rounded"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  v-model="total"
                  class="text-4xl text-dark w-full outline-none pb-1"
                  type="number"
                  placeholder="0"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div class="flex w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="my-auto inline-block ml-auto rounded-full bg-blue-300 w-8 h-8"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  v-model="category"
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Select a category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex w-10 text-right leading-10 mr-4 pb-1">
                <span class="ml-auto my-auto flex"
                  ><i class="fa-solid fa-book text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="note"
                  v-model="note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="date" class="flex items-center">
              <div class="flex w-10 text-right leading-10 mr-4 pb-1">
                <span class="ml-auto my-auto flex"
                  ><i class="fa-solid fa-calendar-days text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                {{ time }}
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-end">
              <div class="flex w-10 text-right leading-10 mr-4 pb-1">
                <span class="ml-auto flex"
                  ><i class="fa-solid fa-wallet text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 pt-3">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMoreDetails === false" class="row mt-8">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More Details
      </button>
    </div>
    <template v-if="isMoreDetails">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="w-10 text-right flex leading-10 mr-4 pb-1">
                  <span class="flex px-1 ml-auto my-auto"
                    ><i class="fa-solid fa-location-dot text-2xl"></i
                  ></span>
                </div>
                <div class="flex flex-1 flex-col border-b border-gray-100 py-3">
                  <input
                    id="location"
                    class="text-xl text-dark w-full outline-none pb-1"
                    type="text"
                    placeholder="Select a location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="person" class="flex items-end">
                <div class="w-10 text-right flex leading-10 mr-4 pb-1">
                  <span class="flex px-1 ml-auto my-auto"
                    ><i class="fa-solid fa-user-group text-2xl"></i
                  ></span>
                </div>
                <div class="flex flex-1 flex-col pt-3">
                  <input
                    id="person"
                    class="text-xl text-dark w-full outline-none pb-1"
                    type="text"
                    placeholder="With person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- start upload photos -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-1">
          <div class="container mx-auto px-8">
            <div class="row">
              <label
                for="file"
                class="cursor-pointer flex items-center text-primary"
              >
                <div class="w-10 text-right flex leading-10 mr-4 pb-1">
                  <span class="flex px-1 ml-auto my-auto"
                    ><i class="fa-solid fa-camera text-2xl"></i
                  ></span>
                </div>
                <div class="py-3 text-xl">
                  <label for="file" class="font-semibold">Upload photos</label>
                  <input
                    @change="onChangeFile($event)"
                    type="file"
                    id="file"
                    hidden
                  />
                </div>
              </label>
              <div v-if="errorFile" class="text-red mt-2 text-sm px-3">
                {{ errorFile }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <button type="submit" class="bg-primary text-white">Testing add</button>
  </form>
  <div class="flex w-screen h-screen" v-if="isPending">
    <h1 class="m-auto text-3xl text-dark">Loading...</h1>
  </div>
</template>
<script>
import { ref } from "vue";
import { useUser } from "@/composibles/useUser";
import useCollection from "@/composibles/useCollection";
import useStorage from "@/composibles/useStorage";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    const { uploadFile, url } = useStorage("transaction");
    const { error, isPending, addRecord } = useCollection("transaction");
    const isMoreDetails = ref(false);
    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errorFile = ref(null);
    function onChangeFile(e) {
      const selected = e.target.files[0];
      const fileType = ["image/png", "image/jpg", "image/jpeg"];

      if (selected && fileType.includes(selected.type)) {
        file.value = selected;
        errorFile.value = null;
        console.log(file.value);
      } else {
        file.value = null;
        errorFile.value = "Please select a file type png or jpg";
        console.log(errorFile.value);
      }
    }

    async function onSubmit() {
      if (file.value) {
        await uploadFile(file.value);
        console.log(">>>URL file: ", url.value);
      }
      const transaction = {
        total: total.value,
        category: category.value,
        note: note.value,
        time: time.value.toString(),
        thumnail: url.value,
        userId: user.uid,
      };
      await addRecord(transaction);
      console.log("Created transaction!");
    }
    return {
      error,
      isPending,
      isMoreDetails,
      onSubmit,
      total,
      category,
      note,
      time,
      onChangeFile,
      errorFile,
    };
  },
};
</script>
