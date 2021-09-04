<template>
  <div class="wrapper">
    <img class="badge" src="../../assets/images/badge.webp" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout',
})
</script>

<style lang="scss" scoped>
@use '../../styles/colors';

.wrapper,
.wrapper::after {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.wrapper::after {
  background-image: url('../../assets/images/background.webp');
  background-repeat: no-repeat;
  background-size: cover;
  content: '';
  opacity: 0.18;
  z-index: -1;
}

.wrapper {
  align-items: center;
  color: colors.$white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.badge {
  height: 235px;
  left: 2rem;
  position: fixed;
  top: 0;
  width: 269px;
}
</style>
