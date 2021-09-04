<template>
  <header class="header">
    <div class="brand">
      <img class="logo" src="../assets/images/logo.webp" alt="logo" />
    </div>
    <div class="menu">asd</div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/colors';

.header {
  align-items: center;
  background: colors.$white;
  display: flex;
  justify-content: space-between;
}

.brand {
  align-items: center;
  display: flex;
}

.logo {
  height: 65px;
  width: 171px;
}
</style>
