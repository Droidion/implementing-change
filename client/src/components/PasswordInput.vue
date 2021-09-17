<template>
  <form class="wrapper" @submit.prevent="emitValue">
    <input v-model="password" class="input" type="password" placeholder="Password" @focus="emit('focus')" />
    <button class="button" type="submit">Войти</button>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['updatedValue', 'focus'])
const password = ref('')
function emitValue() {
  emit('updatedValue', password.value)
}
</script>

<style lang="scss" scoped>
@use '../styles/colors';

.wrapper {
  position: relative;
}

.button {
  background-color: colors.$white;
  border: 0;
  border-radius: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  height: 1.9rem;
  padding: 0 1rem;
  position: absolute;
  right: 4px;
  top: 4px;

  &:hover {
    background-color: colors.$silver;
    cursor: pointer;
  }
}
</style>
