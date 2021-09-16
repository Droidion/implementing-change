<template>
  <div class="title">Управление изменениями</div>
  <div class="subtitle">Деловая игра от Группы ТИМ</div>
  <div class="inputs">
    <signin-input @focus="clearError" @updated-value="pinChanged"></signin-input>
    <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
  </div>
  <login-mode-selector></login-mode-selector>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SigninInput from '../components/SigninInput.vue'
import LoginModeSelector from '../components/LoginModeSelector.vue'
import { inject, ref } from 'vue'
import { RequestMakerKey } from '../utils/injections'
import { useProgressStore } from '../stores/progressStore'

const router = useRouter()
const $requestMaker = inject(RequestMakerKey, ref('$'))
const progressStore = useProgressStore()

const errorMsg = ref('')

async function pinChanged(pin: string) {
  try {
    const result = await $requestMaker.authUser(pin)
    progressStore.$patch({
      teamNumber: result.team,
    })
    await router.push('/planner')
  } catch (error: unknown) {
    errorMsg.value = error?.message
  }
}

function clearError() {
  errorMsg.value = ''
}
</script>

<style scoped lang="scss">
@use '../styles/colors';

.inputs {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.title {
  font-size: 3rem;
  font-weight: 500;
}

.subtitle {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.error {
  background-color: colors.$monza;
  border-radius: 24px;
  height: 2.4rem;
  line-height: 2.4rem;
  margin-top: 1rem;
  padding: 0 1rem;
  text-align: center;
}
</style>
