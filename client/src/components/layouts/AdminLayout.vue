<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdminLayout',
})
</script>

<style lang="scss" scoped>
@use '../../styles/colors';

.wrapper {
  background-color: colors.$silver;
}
</style>
