<script setup lang="ts">
import { ref } from 'vue'
import illustration from '../assets/scene-illustration.png'
import uploadCloud from '../assets/upload-cloud.svg'
import Stepper from '../components/Stepper.vue'

const currentStep = ref(2)
</script>

<template>
  <div class="relative min-h-100vh bg-surface flex flex-col font-sans">
    <div class="p-4 md:p-18 flex flex-col md:flex-row gap-6 md:gap-24">
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
        <div class="md:max-w-943px flex flex-col p-4 md:px-24 md:py-8 bg-bg shadow-soft rounded-2xl">
          <h2 class="fw-500 text-36px leading-35px">
            Upload file
          </h2>
          <div class="pt-8">
            <button class="px-4 py-8 md:p-25 md:min-h-420px md:max-w-685px rounded-4 bg-input-bg flex flex-col justify-center gap-4 border-2 border-dashed border-input-border">
              <div class="flex justify-center">
                <img :src="uploadCloud" alt="Upload" class="w-58px h-39px">
              </div>
              <p class="fw-400 text-16px leading-32px color-secondary-text">
                Drag your resume file to this area, or click on the area to select the appropriate file to upload
              </p>
            </button>
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
