<!-- Отображает зеленым или красным динамику изменения значения на вход, например красное –10 или зеленое +100 -->

<template>
  <span class="value" :class="colorClass">{{ sign }}{{ displayValue }}</span>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  /** Значение на входе */
  value: {
    type: Number,
    required: true,
    default: 0,
  },
})

/** Знак плюс или минус перед числом */
const sign = computed(() => {
  if (props.value > 0) {
    return '+'
  } else if (props.value < 0) {
    // Минус - среднего размера, не дефис, что правильнее с точки зрения типографики
    return '–'
  } else {
    return ''
  }
})

/** Цвет числа */
const colorClass = computed(() => {
  if (props.value > 0) {
    return 'green'
  } else if (props.value < 0) {
    return 'red'
  } else {
    // Для нуля цвет не меняется
    return ''
  }
})

/** Отображаеме значение числа */
const displayValue = computed(() => {
  if (props.value >= 0) {
    return props.value
  } else {
    // Отрицательное число отображаем по модулю, потому что у нас сделана отдельная логика для более типографически правильного минуса
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
