<template>
  <div class="welcome-container mx-auto p-14">

    <p class="font-bold text-black text-3xl my-4">Hello There!</p>
    <p class="my-6">Let's buy some insurance. It is going to take only a few steps.</p>
    <button
      @click="start()"
      class="bg-blue-500 border border-blue-900 border border-blue-900 text-white font-bold py-2 px-12 rounded"
    >
      Start
    </button>

  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.$store.commit("setData", {});
  },
  methods: {
    start() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
.welcome-container {
  background: rgb(244 244 244);
  width: 60%;
}
</style>
