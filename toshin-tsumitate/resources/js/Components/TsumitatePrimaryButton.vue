<template>
    <div class="flex space-x-4">
      <button 
        @click="selectState('active')" 
        class="py-3 px-6 rounded-full text-lg font-medium transition-colors duration-200"
        :class="{ 
          'bg-[#1E3A4E] text-white': state === 'active',
          'bg-white text-gray-500 border border-gray-400': state !== 'active'
        }"
      >
        つみたて中
      </button>
      
      <button 
        @click="selectState('paused')" 
        class="py-3 px-6 rounded-full text-lg font-medium transition-colors duration-200"
        :class="{ 
          'bg-[#1E3A4E] text-white': state === 'paused',
          'bg-white text-gray-500 border border-gray-400': state !== 'paused'
        }"
      >
        停止中
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    initialState: {
      type: String,
      default: 'active', // 'active' または 'paused'
      validator: (value) => ['active', 'paused'].includes(value)
    }
  });
  
  const emit = defineEmits(['update:state']);
  
  const state = ref(props.initialState);
  
  function selectState(newState) {
    state.value = newState;
    emit('update:state', newState);
  }
  
  // 親コンポーネントから初期値が変更された場合に対応
  watch(() => props.initialState, (newVal) => {
    state.value = newVal;
  });
  </script>