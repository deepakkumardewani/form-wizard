<template>
  <div class="summary-container mx-auto p-14">
    <p class="font-bold text-black text-3xl my-4">Summary</p>
    <p class="my-6">Name: {{data.name}}</p>
    <p class="my-6">Age: {{data.age}}</p>
    <p class="my-6">Where do you live: {{data.country}}</p>
    <p class="my-6">Package: {{data.packageSelected.name}}</p>
    <p class="my-6">Premium: {{data.premium}}</p>

    <div class="mt-5 inline-flex">
      <button
        @click="back()"
        class="bg-white mr-4 border border-black text-black py-2 px-12 rounded"
      >
        Back
      </button>
      <button
        @click="buy()"
        class="bg-blue-500 border border-blue-900 text-white py-2 px-12 rounded"
      >
        Buy
      </button>
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
  height: 50%;
  background: rgb(244 244 244);
}
</style>