<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  current: number
  steps: number
}

interface Emits {
  (e: 'update:current', value: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const stepArray = computed(() => Array.from({ length: props.steps }, (_, i) => i + 1))
</script>

<template>
  <div class="flex-1 flex items-center justify-between">
    <div class="w-6 h-1 bg-stepper-bg rounded-l-full" />
    <template v-for="(step, index) in stepArray" :key="step">
      <!-- Step Circle -->
      <button
        class="relative flex items-center"
        @click="() => { emit('update:current', step) }"
      >
        <div
          class="flex items-center justify-center w-6 h-6 rounded-full text-sm fw-400 transition-all duration-600"
          :class="step < current
            ? 'bg-stepper-bg border-3 border-stepper-border border-solid text-stepper-border'
            : step === current
              ? 'bg-stepper-bg border-3 border-stepper-border border-solid text-white'
              : 'bg-stepper-inactive border-3 border-stepper-inactive border-solid text-gray-500'
          "
        >
          <span v-if="step < current" class="fw-700">✓</span>
          <span v-else>{{ step }}</span>
        </div>
      </button>

      <div
        v-if="index < stepArray.length - 1"
        class="flex-1 h-1"
        :class="step < current ? 'bg-stepper-bg' : 'bg-stepper-inactive'"
      />
    </template>
    <div class="w-6 h-1 bg-stepper-inactive rounded-r-full" />
  </div>
</template>

<style scoped>
</style>
