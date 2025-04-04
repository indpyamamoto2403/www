<template>
    <div class="flex flex-col gap-4 w-full max-w-[120px]">
      <button 
        @click="setSelected(false)" 
        class="rounded-full py-3 px-6 text-base font-medium cursor-pointer w-full flex justify-center items-center transition-all duration-200"
        :class="!isSelected ? 'bg-[#1E3A4E] text-white' : 'bg-gray-200 text-gray-800'"
      >
        {{ text }}
      </button>
      <button 
        @click="setSelected(true)" 
        class="rounded-full py-3 px-6 text-base font-medium cursor-pointer w-full flex justify-center items-center transition-all duration-200"
        :class="isSelected ? 'bg-[#1E3A4E] text-white' : 'bg-gray-200 text-gray-800'"
      >
        {{ text }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    text: {
      type: String,
      default: '選択する'
    },
    initialSelected: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:selected']);
  const isSelected = ref(props.initialSelected);
  
  const setSelected = (value) => {
    isSelected.value = value;
    emit('update:selected', value);
  };
  </script>