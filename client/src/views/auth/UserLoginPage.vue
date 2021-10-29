<!-- Page for authenticating user -->
<template>
  <div class="title">Управление изменениями</div>
  <div class="subtitle">Деловая игра от Группы ТИМ</div>
  <div class="inputs">
    <form class="wrapper" @submit.prevent="tryAuthenticate">
      <input v-model="password" class="input" type="password" placeholder="Пароль игрока" @input="clearError" />
      <button class="button" type="submit">Войти</button>
    </form>
    <div v-if="isLoading" class="spinner"></div>
    <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
  </div>
  <login-mode-selector></login-mode-selector>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import LoginModeSelector from '../../components/LoginModeSelector.vue'
import { inject, ref } from 'vue'
import { RequestMakerKey } from '../../utils/injections'
import { useProgressStore } from '../../stores/progressStore'
import { RouteNames } from '../../router'

const router = useRouter()
const requestMaker = inject(RequestMakerKey)
const progressStore = useProgressStore()

/** Player password (pin code) */
const password = ref('')
/** Error message to display */
const errorMsg = ref('')
/** Is loading currently in progress */
const isLoading = ref(false)

/** Tries to authenticate player */
async function tryAuthenticate() {
  try {
    isLoading.value = true
    const result = await requestMaker?.authUser(password.value)
    progressStore.$patch({
      authenticated: true,
      teamNumber: result?.team,
    })
    await router.push({ name: RouteNames.PlayerPlanner })
  } catch (error: unknown) {
    errorMsg.value = JSON.parse(error as string).title
  } finally {
    isLoading.value = false
  }
}

/** Clears error message */
function clearError() {
  errorMsg.value = ''
}
</script>

<style scoped lang="scss">
@use '../../styles/auth';
@use '../../styles/spinner';
</style>
