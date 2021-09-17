<template>
  <div class="wrapper">
    <header-menu class="header">
      <ul>
        <li><router-link to="/admin/manage">Игра</router-link></li>
        <li><router-link to="/admin/chart/periods">Графики</router-link></li>
        <li><router-link to="/admin/results/table">Таблица</router-link></li>
        <li><router-link to="/admin/results/output">Выгрузка</router-link></li>
      </ul>
    </header-menu>
    <article class="content">
      <router-view></router-view>
    </article>
  </div>
</template>

<script lang="ts" setup>
import HeaderMenu from '../HeaderMenu.vue'
</script>

<style scoped lang="scss">
@use '../../styles/colors';

.header {
  grid-area: header;
}

.content {
  grid-area: content;
}

.header,
.content,
.side-goals,
.side-project {
  background: colors.$white;
  border-radius: 6px;
  padding: 1rem;
}

.wrapper {
  bottom: 0;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    'header'
    'content';
  grid-template-columns: auto;
  grid-template-rows: max-content auto;
  left: 0;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
