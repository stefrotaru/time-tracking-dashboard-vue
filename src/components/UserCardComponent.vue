<script setup>
  import store from '../Store/store';

  function showDaily() {
    store.commit('showDaily')
  };
  function showWeekly() {
    store.commit('showWeekly')
  };
  function showMonthly() {
    store.commit('showMonthly')
  };
</script>

<template>
  <h1>Hello WORLD!!</h1>
  <button @click="showDaily">Daily</button>
  <button @click="showWeekly">Weekly</button>
  <button @click="showMonthly">Monthly</button>
  <h2>Your state is: {{ this.$store.state.currentState }}</h2>
</template>

<style scoped>

</style>
