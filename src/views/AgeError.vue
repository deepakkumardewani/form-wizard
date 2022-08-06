<template>
  <div class="container mx-auto p-32">
    <p class="font-bold text-black text-3xl my-4">Ooops</p>
    <p class="mt-6">Your age is over our accepted limit.</p>
    <p class="mb-6">We are sorry but we cannot ensure you now.</p>
    <button
      @click="redirectToWelcome()"
      class="bg-blue-500 hover:bg-blue-700 border border-blue-900 text-white font-bold py-2 px-24 rounded"
    >Ok :(</button>
  </div>
</template>

<script>
export default {
  name: "AgeError",
  methods: {
    redirectToWelcome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>