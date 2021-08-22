<template>
  <div class="title">Управление изменениями</div>
  <div class="subtitle">Деловая игра от Группы ТИМ</div>
  <div class="inputs">
    <input class="auth-input" type="password" placeholder="Password" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
})
</script>

<style scoped lang="scss">
.inputs {
  margin-top: 2rem;
}
</style>
