<template>
  <header class="header">
    <div class="brand">
      <img class="logo" src="../assets/images/logo.webp" alt="logo" />
      <div class="title">Управление<br />изменениями</div>
    </div>
    <div class="menu">
      <slot></slot>
      <svg
        class="logout-icon"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        @click="logout"
      >
        <path
          d="m16.9226 18.375v1.875c0 2.0678-1.6822 3.75-3.7501 3.75h-9.42234c-2.0679 0-3.75016-1.6822-3.75016-3.75v-16.5c0-2.06781 1.68226-3.75 3.75016-3.75h9.42234c2.0679 0 3.7501 1.68219 3.7501 3.75v1.875c0 .51782-.4197.9375-.9375.9375-.5179 0-.9376-.41968-.9376-.9375v-1.875c0-1.03381-.8412-1.875-1.875-1.875h-9.42234c-1.03385 0-1.87508.84119-1.87508 1.875v16.5c0 1.0338.84123 1.875 1.87508 1.875h9.42234c1.0338 0 1.875-.8412 1.875-1.875v-1.875c0-.5178.4197-.9375.9376-.9375.5178 0 .9375.4197.9375.9375zm6.392-7.9854-2.0994-2.09932c-.3663-.36621-.9599-.36621-1.326 0-.3662.36603-.3662.95966 0 1.32569l1.4933 1.49343h-11.2571c-.5178 0-.9375.4197-.9375.9375s.4197.9375.9375.9375h11.2571l-1.4933 1.4934c-.3662.366-.3662.9596 0 1.3257.1832.1831.423.2746.6629.2746.2401 0 .48-.0915.6631-.2746l2.0994-2.0993c.9139-.9139.9139-2.4007 0-3.3146z"
          fill="#222"
        />
      </svg>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progressStore'

const progressStore = useProgressStore()

const router = useRouter()

function logout() {
  progressStore.$patch({
    authenticated: false,
  })
  router.push('/login/user')
}
</script>

<style lang="scss">
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

.title {
  bottom: -0.05rem;
  font-size: 1.8rem;
  margin-left: 1rem;
  position: relative;
}

.logo {
  height: 65px;
  width: 171px;
}

.menu {
  align-items: center;
  display: flex;
}

ul {
  display: flex;
}

li,
.logout-icon {
  cursor: pointer;
  font-size: 1.3rem;
  margin: 0 1rem;

  &:hover {
    color: colors.$flamingo;

    path {
      fill: colors.$flamingo;
    }
  }
}
</style>
