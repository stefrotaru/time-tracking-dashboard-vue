<script setup>
import UserCardComponent from './components/UserCardComponent.vue';
import StatsCardComponent from './components/StatsCardComponent.vue';

</script>

<template>
  <UserCardComponent/>
  <StatsCardComponent :currentState="$store.state.currentState"/>
</template>

<style scoped>

</style>
