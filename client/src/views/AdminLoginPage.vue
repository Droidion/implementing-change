<template>
  <div class="title">Управление изменениями</div>
  <div class="subtitle">Деловая игра от Группы ТИМ</div>
  <div class="inputs">
    <form @submit.prevent="pinChanged">
      <input v-model="login" class="input login" type="text" placeholder="Логин админа" @input="clearError" />
      <div class="wrapper">
        <input v-model="password" class="input" type="password" placeholder="Пароль" @input="clearError" />
        <button class="button" type="submit">Войти</button>
      </div>
    </form>
    <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
  </div>
  <login-mode-selector></login-mode-selector>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import LoginModeSelector from '../components/LoginModeSelector.vue'
import { inject, ref } from 'vue'
import { RequestMakerKey } from '../utils/injections'

const router = useRouter()
const $requestMaker = inject(RequestMakerKey, ref('$'))

const login = ref('')
const password = ref('')
const errorMsg = ref('')

async function pinChanged() {
  try {
    await $requestMaker.authAdmin(login.value, password.value)
    await router.push('/admin/manage')
  } catch (error: unknown) {
    errorMsg.value = error?.message
  }
}

function clearError() {
  errorMsg.value = ''
}
</script>

<style scoped lang="scss">
@use '../styles/auth';
</style>
