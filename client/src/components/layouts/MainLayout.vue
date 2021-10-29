<template>
  <div class="wrapper">
    <header-menu class="header">
      <ul>
        <li><router-link :to="{ name: RouteNames.PlayerPlanner }">Планировщик</router-link></li>
        <li><router-link :to="{ name: RouteNames.PlayerModeling }">Моделирование</router-link></li>
        <li><router-link :to="{ name: RouteNames.PlayerDynamics }">Динамика</router-link></li>
        <li><router-link :to="{ name: RouteNames.PlayerHistory }">История</router-link></li>
        <li><router-link :to="{ name: RouteNames.PlayerCharacters }">Помощь</router-link></li>
      </ul>
    </header-menu>
    <article class="content">
      <router-view></router-view>
    </article>
    <indicator-goals class="side-goals"></indicator-goals>
    <indicator-project class="side-project"></indicator-project>
    <aside class="side-controls">Control buttons</aside>
  </div>
</template>

<script lang="ts" setup>
import HeaderMenu from '../HeaderMenu.vue'
import { RouteNames } from '../../router'
import IndicatorGoals from '../IndicatorGoals.vue'
import IndicatorProject from '../IndicatorProject.vue'
</script>

<style scoped lang="scss">
@use '../../styles/colors';

.header {
  grid-area: header;
}

.content {
  grid-area: content;
}

.side-goals {
  grid-area: side-goals;
}

.side-project {
  grid-area: side-project;
}

.side-controls {
  grid-area: side-controls;
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
    'header header'
    'content side-goals'
    'content side-project'
    'content side-controls';
  grid-template-columns: auto 300px;
  grid-template-rows: max-content max-content max-content auto;
  left: 0;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
