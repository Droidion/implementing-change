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
@use 'styles/colors';
@use 'styles/inputs';

body {
  background-color: colors.$black-pearl;
  color: colors.$mine-shaft;
  font-family: 'Roboto', sans-serif;
}
</style>
