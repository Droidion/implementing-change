<template>
  <div class="title">Управление изменениями</div>
  <div class="subtitle">Деловая игра от Группы ТИМ</div>
  <div class="inputs">
    <form class="wrapper" @submit.prevent="pinChanged">
      <input v-model="password" class="input" type="password" placeholder="Пароль игрока" @input="clearError" />
      <button class="button" type="submit">Войти</button>
    </form>
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

const router = useRouter()
const $requestMaker = inject(RequestMakerKey, ref('$'))
const progressStore = useProgressStore()

const password = ref('')
const errorMsg = ref('')

async function pinChanged() {
  try {
    const result = await $requestMaker.authUser(password.value)
    progressStore.$patch({
      authenticated: true,
      teamNumber: result.team,
    })
    await router.push('/planner')
  } catch (error: unknown) {
    errorMsg.value = error
  }
}

function clearError() {
  errorMsg.value = ''
}
</script>

<style scoped lang="scss">
@use '../../styles/auth';
</style>
