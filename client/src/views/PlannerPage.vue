<template>
  <h1>Planner Page</h1>
  <div>Store value: {{ counter }}</div>
  <button @click="increase">Increase</button>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import { useMainStore } from "../stores/mainStore";

export default defineComponent({
  name: 'PlannerPage',
  setup() {
    const mainStore = useMainStore()

    const counter = computed(() => mainStore.$state.count)

    const increase = () => { mainStore.$state.count++ }

    return { counter, increase }
  }
})
</script>

<style scoped lang="scss">

</style>
