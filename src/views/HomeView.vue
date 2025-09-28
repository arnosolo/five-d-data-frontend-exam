<script setup lang="ts">
import { ref } from 'vue'
import illustration from '../assets/scene-illustration.png'
import uploadCloud from '../assets/upload-cloud.svg'
import Stepper from '../components/Stepper.vue'

const currentStep = ref(2)

const files = ref<File[]>([])
const isDragging = ref(false)
const fileInputEl = ref<HTMLInputElement | null>(null)

function onDrop(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false

  if (e.dataTransfer?.files) {
    files.value = Array.from(e.dataTransfer.files)
  }
}

function onDragOver(e: DragEvent) {
  e.preventDefault()
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files) {
    files.value = Array.from(target.files)
  }
}
</script>

<template>
  <div class="relative min-h-100vh bg-surface flex flex-col font-sans">
    <div class="p-4 md:px-18 md:pt-18 flex flex-col md:flex-row gap-6 md:gap-24">
      <img
        :src="illustration" alt="Illustration"
        class="absolute z-0 bottom-0 left-4 max-w-100vw md:max-w-760px"
      >

      <div class="relative p-4 flex flex-col">
        <p class="fw-400 text-8 md:text-40px leading-55px">
          Finish!
        </p>
        <h1 class="fw-400 text-8 md:text-40px leading-55px">
          Upload Your Resume
        </h1>
        <p class="max-w-696px pt-4 fw-400 text-20px leading-35px color-secondary-text">
          Upload your resume, the platform will help you parse and optimize, you can also skip this step
        </p>
      </div>

      <div class="relative flex flex-col">
        <div class="md:max-w-943px flex flex-col p-4 md:px-24 md:pt-8 pb-20 bg-bg shadow-soft rounded-2xl">
          <h2 class="fw-500 text-36px leading-35px">
            Upload file
          </h2>

          <div class="pt-8">
            <div
              class="md:min-h-380px md:max-w-685px rounded-4 bg-input-bg flex flex-col justify-center gap-4 border-2 border-dashed border-input-border"
              @drop="onDrop"
              @dragover="onDragOver"
              @dragleave="onDragLeave"
              @click="fileInputEl?.click()"
            >
              <div class="px-4 py-8 md:p-25 flex flex-col gap-4">
                <template v-if="files.length === 0">
                  <div class="flex justify-center">
                    <img :src="uploadCloud" alt="Upload" class="w-58px h-39px">
                  </div>
                  <p class="text-center fw-400 text-16px leading-32px color-secondary-text">
                    Drag your resume file to this area, or click on the area to select the appropriate file to upload
                  </p>
                </template>
                <template v-else>
                  <p>File selected.</p>
                  <ul v-if="files.length" class="text-left pl-4">
                    <li v-for="file in files" :key="file.name" class="text-sm text-gray-700">
                      {{ file.name }}
                    </li>
                  </ul>
                </template>
              </div>
              <input
                ref="fileInputEl"
                type="file"
                class="hidden"
                @change="onFileChange"
              >
            </div>
          </div>
          <div class="flex justify-center items-center pt-6 md:pt-24 gap-6">
            <button class="btn-primary" disabled>
              Last step
            </button>
            <button class="btn-primary">
              Finish
            </button>
          </div>
          <div class="flex justify-center items-center pt-6 md:pt-24 gap-6">
            <Stepper
              :current="currentStep"
              :steps="3"
              class="max-w-360px"
              @update:current="v => currentStep = v"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
