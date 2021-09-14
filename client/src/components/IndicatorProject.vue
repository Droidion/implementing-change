<template>
  <indicator>
    <h2 class="informer-title">Определение проекта</h2>
    <div class="informer-block informer-subtitle">
      <div class="informer-block-title">Период {{ currentPeriod }}</div>
      <div class="informer-block-title">Команда {{ teamNumber }}</div>
    </div>
    <div class="informer-block">
      <div class="informer-block-title">Срок внедрения проекта</div>
      <progress-bar class="progress-bar" :total="maxDays" :current="currentDay" :color-scheme="'orange'"></progress-bar>
      <div></div>
      <div class="informer-block-caption">Осталось {{ daysLeft }} дней</div>
    </div>
    <div class="informer-block">
      <div class="informer-block-title">Суммарное отношение к проекту в компании</div>
      <div></div>
    </div>
  </indicator>
</template>

<script lang="ts" setup>
import Indicator from './Indicator.vue'
import ProgressBar from './ProgressBar.vue'
import { useProgressStore } from '../stores/progressStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const progressStore = useProgressStore()
const { currentPeriod, currentDay, maxDays, teamNumber } = storeToRefs(progressStore)

const daysLeft = computed(() => maxDays.value - currentDay.value)
</script>
