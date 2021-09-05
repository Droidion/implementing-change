<template>
  <span class="value" :class="colorClass">{{ sign }}{{ displayValue }}</span>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    required: true,
    default: 0,
  },
})

const sign = computed(() => {
  if (props.value > 0) {
    return '+'
  } else if (props.value < 0) {
    return '–'
  } else {
    return ''
  }
})

const colorClass = computed(() => {
  if (props.value > 0) {
    return 'green'
  } else if (props.value < 0) {
    return 'red'
  } else {
    return ''
  }
})

const displayValue = computed(() => {
  if (props.value >= 0) {
    return props.value
  } else {
    return -1 * props.value
  }
})
</script>

<style lang="scss" scoped>
@use '../styles/colors';

.value {
  font-weight: 500;
}

.red {
  color: colors.$monza;
}

.green {
  color: colors.$green-leaf;
}
</style>
