<template>
  <form class="wrapper" @submit.prevent="emitValue">
    <input v-model="password" class="input" type="password" placeholder="Password" />
    <button class="button" type="submit">Войти</button>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['updatedValue'])
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

.input {
  background: transparent;
  border: 2px solid colors.$white;
  border-radius: 24px;
  color: colors.$white;
  font-size: 1rem;
  height: 2.4rem;
  outline: none;
  padding: 0 1rem;
  width: 14rem;

  &::placeholder {
    color: colors.$dusty-gray;
  }
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
