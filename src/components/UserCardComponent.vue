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
  <div class="user-container">
    <div class="user">
      <img src="../assets/image-jeremy.png" alt="">
      <span>Report for</span>
      <h1>Jeremy Robson</h1>
    </div>
    <div class="buttons">
      <a @click="showDaily">Daily</a>
      <a @click="showWeekly">Weekly</a>
      <a @click="showMonthly">Monthly</a>
    </div>
  </div>
</template>

<style scoped>

</style>
