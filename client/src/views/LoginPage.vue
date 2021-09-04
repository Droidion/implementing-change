<template>
  <div class="title">Управление изменениями</div>
  <div class="subtitle">Деловая игра от Группы ТИМ</div>
  <div class="inputs">
    <signin-input @updated-value="passwordChanged"></signin-input>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SigninInput from '../components/SigninInput.vue'

const router = useRouter()

function passwordChanged(password: string) {
  router.push('/planner')
}
</script>

<style scoped lang="scss">
.inputs {
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
</style>
