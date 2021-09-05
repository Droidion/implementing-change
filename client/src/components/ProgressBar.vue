<template>
  <div class="wrapper" :class="[colorClass]">
    <div class="background">
      <div class="background-value">{{ total }}</div>
      <div class="progress" :style="{ width: widthPercent + '%' }">{{ current }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  colorScheme: {
    type: String,
    required: false,
    default: 'green',
  },
  current: {
    type: Number,
    required: true,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
})

const widthPercent = computed(() => {
  const percent = props.total === 0 ? 100 : Math.round((props.current / props.total) * 100)
  if (percent > 100) {
    return 100
  }
  if (percent <= 12) {
    return 12
  }
  return percent
})

const colorClass = computed(() => {
  switch (props.colorScheme) {
    case 'green':
      return 'green'
    case 'orange':
      return 'orange'
    default:
      return 'green'
  }
})
</script>

<style lang="scss" scoped>
@use '../styles/colors';

.wrapper {
  min-width: 226px;
}

.background {
  align-items: center;
  border-radius: 0 12px 12px 0;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  padding-right: 0.6rem;
  position: relative;
  width: 100%;
}

.background-value {
  color: colors.$white;
}

.progress {
  align-items: center;
  border-radius: 0 12px 12px 0;
  bottom: 0;
  color: colors.$white;
  display: flex;
  justify-content: flex-end;
  left: 0;
  padding-right: 0.6rem;
  position: absolute;
  top: 0;
}

.green .background {
  background-color: colors.$feijoa;
}

.green .progress {
  background-color: colors.$green-leaf;
}

.orange .background {
  background-color: colors.$sun;
}

.orange .progress {
  background-color: colors.$flamingo;
}
</style>
