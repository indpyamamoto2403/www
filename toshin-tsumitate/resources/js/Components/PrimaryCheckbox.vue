<script setup>
  import { defineModel } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: () => `checkbox-${Math.random().toString(36).substring(2, 9)}`
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
  
  // defineModelを使用してv-modelを直接処理
  const isChecked = defineModel({
    default: false
  });
  
  const toggleChecked = () => {
    if (!props.disabled) {
      isChecked.value = !isChecked.value;
    }
  };
  
</script>

<template>
  <div class="inline-flex items-center">
    <div
      class="relative flex items-center justify-center"
      @click="toggleChecked"
    >
      <!-- 非表示のネイティブチェックボックス（アクセシビリティのため） -->
      <input
        type="checkbox"
        :id="id"
        v-model="isChecked"
        class="sr-only"
        @change="onChange"
      />
      
      <!-- カスタムチェックボックスの外枠 -->
      <div
        class="w-6 h-6 border rounded-lg transition-colors duration-200"
        :class="[
          isChecked 
            ? 'bg-[#10122E]' 
            : 'bg-white border-gray-300',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        ]"
      >
        <!-- チェックマーク -->
        <svg
          v-if="isChecked"
          class="w-full h-full text-white p-0.5"
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
      </div>
    </div>
    
    <!-- ラベル -->
    <label
      v-if="label"
      :for="id"
      class="ml-1 cursor-pointer"
      :class="{ 'opacity-50': disabled }"
    >
      {{ label }}
    </label>
  </div>
</template>