<template>
  <indicator>
    <h2 class="informer-title">Цели периода</h2>
    <div class="informer-block">
      <div class="informer-block-title">Активная поддержка</div>
      <progress-bar class="progress-bar" :total="needSupporters.active" :current="currentActiveSupport"></progress-bar>
      <div class="informer-block-caption">Изменение с начала периода {{ activeSupportChange }}</div>
    </div>
    <div class="informer-block">
      <div class="informer-block-title">Умеренная поддержка</div>
      <progress-bar
        class="progress-bar"
        :total="needSupporters.moderate"
        :current="currentModerateSupport"
      ></progress-bar>
      <div class="informer-block-caption">Изменение с начала периода {{ moderateSupportChange }}</div>
    </div>
    <div class="informer-block">
      <div class="informer-block-title">Целевые события периода</div>
      <progress-bar class="progress-bar" :total="needEvents" :current="0" :color-scheme="'orange'"></progress-bar>
      <div class="informer-block-caption">Изменение с начала периода {{ 0 }}</div>
    </div>
  </indicator>
</template>

<script lang="ts" setup>
import Indicator from './Indicator.vue'
import { useCharsStore } from '../stores/charsStore'
import { useProgressStore } from '../stores/progressStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { periods } from '../scenario/periods'
import ProgressBar from './ProgressBar.vue'

const charsStore = useCharsStore()
const progressStore = useProgressStore()

const { currentActiveSupport, currentModerateSupport, activeSupportChange, moderateSupportChange } =
  storeToRefs(charsStore)
const { currentPeriod } = storeToRefs(progressStore)

const needSupporters = computed(() => periods[currentPeriod.value - 1].needSupporters)
const needEvents = computed(() => periods[currentPeriod.value - 1].needEvents.length)
</script>
