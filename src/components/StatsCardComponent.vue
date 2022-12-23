<script setup>
import statsData from '../../data.json';

</script>

<template>
    <div class="stats">
        <div class="stats-container" v-if="this.$store.state.currentState === 'daily'">
            <div v-for="(stat, i) in statsData" v-bind:key="i" class="stats-container__stat">
                <div :class="stat.title.toLowerCase().split(' ').join('_')"></div> 
                <p>Tittle: {{ stat.title }}</p>
                <p>Hours: {{ stat.timeframes.daily.current }}</p>
                <p>Week thingy: {{ stat.timeframes.daily.previous }}</p>
            </div>
        </div>
        <div class="stats-container" v-if="this.$store.state.currentState === 'weekly'">
            <div v-for="(stat, i) in statsData" v-bind:key="i" class="stats-container__stat">
                <div :class="stat.title.toLowerCase().split(' ').join('_')"></div>
                <p>Tittle: {{ stat.title }}</p>
                <p>Hours: {{ stat.timeframes.weekly.current }}</p>
                <p>Week thingy: {{ stat.timeframes.weekly.previous }}</p>
            </div>
        </div>
        <div class="stats-container" v-if="this.$store.state.currentState === 'monthly'">
            <div v-for="(stat, i) in statsData" v-bind:key="i" class="stats-container__stat">
                <div :class="stat.title.toLowerCase().split(' ').join('_')"></div>
                <p>Tittle: {{ stat.title }}</p>
                <p>Hours: {{ stat.timeframes.monthly.current }}</p>
                <p>Week thingy: {{ stat.timeframes.monthly.previous }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
</style>