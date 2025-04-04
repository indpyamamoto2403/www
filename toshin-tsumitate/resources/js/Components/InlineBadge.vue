<template>
    <span 
      class="inline-block rounded-sm px-3 text-sm py-1"
      :class="badgeStyles[type]"
    >
      {{ badgeText[type] || type }}
    </span>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'savings', 'investment'].includes(value)
    }
  });
  
  // 各タイプに対応する背景色とテキスト色のスタイル
  const badgeStyles = {
    default: 'bg-gray-200 text-gray-800',
    savings: 'bg-blue-200 text-gray-800', // つみたて
    investment: 'bg-orange-400 text-gray-800' // 成長投資
  };
  
  // 各タイプに対応するテキスト
  const badgeText = {
    default: 'デフォルト',
    savings: 'つみたて',
    investment: '成長投資'
  };
  </script>