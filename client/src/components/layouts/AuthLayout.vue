<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout',
})
</script>

<style lang="scss">
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

.title {
  font-size: 3rem;
  font-weight: 500;
}

.subtitle {
  font-size: 1.5rem;
  margin-top: 1rem;
}
</style>
