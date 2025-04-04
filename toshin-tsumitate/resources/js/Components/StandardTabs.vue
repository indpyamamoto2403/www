<template>
    <div class="w-full">
      <ul class="flex list-none p-0 m-0 border-b border-gray-300">
        <li 
          v-for="(tab, index) in tabs" 
          :key="index" 
          :class="[
            'px-5 py-2.5 cursor-pointer border border-gray-300 border-b-0 mr-0.5 rounded-t-md',
            activeTab === index 
              ? 'bg-[#103c54] text-white border-[#103c54]' 
              : 'bg-white'
          ]"
          @click="setActiveTab(index)"
        >
          {{ tab.name }}
        </li>
      </ul>
      <div class="p-5 border border-gray-300 border-t-0">
        <slot :name="'tab-' + activeTab"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    initialActiveTab: {
      type: Number,
      default: 0
    }
  });
  
  const emit = defineEmits(['tab-changed']);
  
  const activeTab = ref(props.initialActiveTab);
  
  const tabs = [
    { name: '基本情報' },
    { name: '詳細情報' },
    { name: '手数料等' }
  ];
  
  const setActiveTab = (index) => {
    activeTab.value = index;
    emit('tab-changed', index);
  };
  </script>