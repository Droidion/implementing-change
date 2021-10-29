<!-- Page for authenticating admin -->
<template>
  <div class="title">Управление изменениями</div>
  <div class="subtitle">Деловая игра от Группы ТИМ</div>
  <div class="inputs">
    <form @submit.prevent="tryAuthenticate">
      <input v-model="login" class="input login" type="text" placeholder="Логин админа" @input="clearError" />
      <div class="wrapper">
        <input v-model="password" class="input" type="password" placeholder="Пароль" @input="clearError" />
        <button class="button" type="submit">Войти</button>
      </div>
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
const progressStore = useProgressStore()
const requestMaker = inject(RequestMakerKey)
//const $centrifugo = inject(CentrifugoClientKey)

/** Inputted login **/
const login = ref('')
/** Inputted password **/
const password = ref('')
/** Error message to display **/
const errorMsg = ref('')
/** Is loading currently in progress **/
const isLoading = ref(false)

/** Tries to authenticate admin **/
async function tryAuthenticate() {
  try {
    if (requestMaker) {
      isLoading.value = true
      //const centrifugoToken = (await requestMaker.authAdmin(login.value, password.value)).centrifugoToken
      await requestMaker.authAdmin(login.value, password.value)
      progressStore.$patch({
        authenticated: true,
      })
      //$centrifugo.connect(centrifugoToken)
      await router.push({ name: RouteNames.AdminManage })
    }
  } catch (error: unknown) {
    errorMsg.value = JSON.parse(error as string).title
  } finally {
    isLoading.value = false
  }
}

/** Clears error message **/
function clearError() {
  errorMsg.value = ''
}
</script>

<style scoped lang="scss">
@use '../../styles/auth';
@use '../../styles/spinner';
</style>
