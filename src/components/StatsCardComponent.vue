<script setup>
import statsData from '../../data.json';

</script>

<template>
    <div class="stats">
        <div class="stats-container" v-if="this.$store.state.currentState === 'daily'">
            <div v-for="(stat, i) in statsData" v-bind:key="i" class="stats-container__stat">
                <div :class="stat.title.toLowerCase().split(' ').join('_') + ' card'"></div> 
                <div class="card-first-row">
                    <p>{{ stat.title }}</p>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </div>
                <p class="stats__hours">{{ stat.timeframes.daily.current }}hrs</p>
                <p class="stats__lw-hours">Last week - {{ stat.timeframes.daily.previous }}hrs</p>
            </div>
        </div>
        <div class="stats-container" v-if="this.$store.state.currentState === 'weekly'">
            <div v-for="(stat, i) in statsData" v-bind:key="i" class="stats-container__stat">
                <div :class="stat.title.toLowerCase().split(' ').join('_') + ' card'"></div>
                <div class="card-first-row">
                    <p>{{ stat.title }}</p>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </div>
                <p class="stats__hours">{{ stat.timeframes.weekly.current }}hrs</p>
                <p class="stats__lw-hours">Last week - {{ stat.timeframes.weekly.previous }}hrs</p>
            </div>
        </div>
        <div class="stats-container" v-if="this.$store.state.currentState === 'monthly'">
            <div v-for="(stat, i) in statsData" v-bind:key="i" class="stats-container__stat">
                <div :class="stat.title.toLowerCase().split(' ').join('_') + ' card'"></div>
                <div class="card-first-row">
                    <p>{{ stat.title }}</p>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </div>
                <p class="stats__hours">{{ stat.timeframes.monthly.current }}hrs</p>
                <p class="stats__lw-hours">Last week - {{ stat.timeframes.monthly.previous }}hrs</p>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>