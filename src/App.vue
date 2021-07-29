<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
@use 'styles/reset';
@use 'styles/fonts';

body {
  font-family: 'Roboto', sans-serif;
}

</style>
