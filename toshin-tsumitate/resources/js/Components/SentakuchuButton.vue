<template>
    <div class="inline-flex items-center px-4 py-2 rounded-full relative hover:cursor-pointer" :class="bgColorClass">
      <span>{{ label }}</span>
      <span v-if="count > 0" class="ml-1 flex items-center justify-center rounded-full bg-red-500 text-white text-xs w-5 h-5 absolute -top-1 -right-1">
        {{ count }}
      </span>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      default: '選択中'
    },
    count: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String,
      default: 'orange'
    }
  });
  
  const bgColorClass = computed(() => {
    const colorMap = {
      orange: 'bg-orange-300 text-black',
      blue: 'bg-blue-300 text-black',
      green: 'bg-green-300 text-black',
      gray: 'bg-gray-300 text-black',
      // 他の色も必要に応じて追加できます
    };
    
    return colorMap[props.bgColor] || colorMap.orange;
  });
  </script>