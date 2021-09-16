<template>
  <div class="modes">
    <router-link to="/planner">Игрок</router-link>
    <router-link to="/planner">Админ</router-link>
  </div>
</template>

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
