<template>
  <div class="wrapper">
    <header-menu class="header">dd</header-menu>
    <article class="content">
      <router-view></router-view>
    </article>
    <aside class="side-goals">Sidebar Goals</aside>
    <aside class="side-project">Sidebar Project</aside>
    <aside class="side-controls">Control buttons</aside>
  </div>
</template>

<script lang="ts" setup>
import HeaderMenu from '../HeaderMenu.vue'
</script>

<style scoped lang="scss">
.header {
  grid-area: header;
}

.content {
  background: white;
  grid-area: content;
}

.side-goals {
  background: white;
  grid-area: side-goals;
}

.side-project {
  background: white;
  grid-area: side-project;
}

.side-controls {
  color: white;
  grid-area: side-controls;
}

.header,
.content,
.side-goals,
.side-project {
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
