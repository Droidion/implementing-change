<template>
  <h1>Планировщик</h1>
  <div>Store value: {{ counter }}</div>
  <button @click="increase">Increase</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useMainStore } from '../stores/mainStore'

const mainStore = useMainStore()
const counter = computed(() => mainStore.$state.count)
const increase = () => {
  mainStore.$state.count++
}
</script>
