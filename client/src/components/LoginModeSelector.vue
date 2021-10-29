<template>
  <div class="modes">
    <router-link :to="{ name: RouteNames.UserLogin }">Игрок</router-link>
    <router-link :to="{ name: RouteNames.AdminLogin }">Админ</router-link>
  </div>
</template>

<script lang="ts" setup>
import { RouteNames } from '../router'
</script>

<style lang="scss" scoped>
@use '../styles/colors';

.modes {
  bottom: 2rem;
  position: fixed;

  a {
    margin: 0 1rem;

    &:hover {
      color: colors.$flamingo;
    }
  }
}
</style>
