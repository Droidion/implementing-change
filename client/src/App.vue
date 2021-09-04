<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useCharsStore } from './stores/charsStore'

const charsStore = useCharsStore()
charsStore.initStateFromScenario()
</script>

<style lang="scss">
@use 'styles/reset';
@use 'styles/fonts';
@use 'styles/colors';

body {
  background-color: colors.$black-pearl;
  color: colors.$mine-shaft;
  font-family: 'Roboto', sans-serif;
}
</style>
