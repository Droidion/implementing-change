<template>
  <indicator>
    <h2 class="informer-title">Цели периода</h2>
    <div class="informer-block">
      <div class="informer-block-title">Активная поддержка</div>
      <div></div>
      <div class="informer-block-caption">Изменение с начала периода +2</div>
    </div>
    <div class="informer-block">
      <div class="informer-block-title">Умеренная поддержка</div>
      <div></div>
      <div class="informer-block-caption">Цель достигнута!</div>
    </div>
    <div class="informer-block">
      <div class="informer-block-title">Целевые события периода</div>
      <div></div>
      <div class="informer-block-caption">Изменение с начала периода -2</div>
    </div>
  </indicator>
</template>

<script lang="ts" setup>
import Indicator from './Indicator.vue'
</script>
