<template>
  <div class="flex h-screen justify-center items-center">
    <div class="summary-container mx-auto p-14 shadow-2xl shadow-black ">
      <p class="font-bold text-black text-3xl my-4">Summary</p>

      <table class="w-full text-sm text-left text-gray-500  border-collapse border border-gray-300">

        <tbody>
          <tr class="border-b border-gray-300">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Name
            </th>
            <td class="py-4 px-6">
              {{data.name}}
            </td>
          </tr>
          <tr class="border-b  border-gray-300">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Age
            </th>
            <td class="py-4 px-6">
              {{data.age}}
            </td>
          </tr>
          <tr class="border-b  border-gray-300">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Where do you live?
            </th>
            <td class="py-4 px-6">
              {{data.country}}
            </td>
          </tr>
          <tr class="border-b  border-gray-300">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Package
            </th>
            <td class="py-4 px-6">
              {{data.packageSelected.name}}
            </td>
          </tr>
          <tr class="border-b  border-gray-300">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Premium
            </th>
            <td class="py-4 px-6">
              {{data.premium}}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mt-5 inline-flex">
        <button
          @click="back()"
          class="bg-white hover:bg-gray-800 hover:text-white transition mr-4 border border-black text-black py-2 px-12 rounded"
        >
          Back
        </button>
        <button
          @click="buy()"
          class="bg-blue-500 hover:bg-blue-700 transition border border-blue-900 text-white py-2 px-12 rounded"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.data = this.$route.params;
    this.$store.commit("setData", this.data);
  },
  methods: {
    back() {
      this.$router.push("/about");
    },
    buy() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.summary-container {
  width: 50%;
  /* height: 50%; */
  background: rgb(244 244 244);
}
</style>