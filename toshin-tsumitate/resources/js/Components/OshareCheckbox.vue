<template>
    <div class="my-3 font-sans">
      <label class="flex items-center relative cursor-pointer select-none">
        <input
          type="checkbox"
          :checked="checked"
          @change="checked = $event.target.checked"
          :disabled="disabled"
          class="absolute opacity-0 h-0 w-0 cursor-pointer"
        >
        <span
          class="h-6 w-6 rounded flex items-center justify-center transition-all duration-300 ease-in-out"
          :class="[
            checked
              ? disabled
                ? 'bg-blue-300 border-blue-300'
                : 'bg-blue-500 border-blue-500'
              : 'bg-gray-100 border-gray-200',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            'border-2 hover:shadow-sm'
          ]"
        >
          <svg
            v-if="checked"
            class="w-3 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </span>
        <span
          v-if="label"
          class="ml-2 text-base"
          :class="disabled ? 'text-gray-400' : 'text-gray-800'"
        >
          {{ label }}
        </span>
      </label>
    </div>
  </template>
  
  <script setup>
  const checked = defineModel();
  
  defineProps({
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
  </script>