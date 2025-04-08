<script setup>
const model = defineModel({
  default: 'growth'
});

const updateValue = (value) => {
  model.value = value;
};
</script>

<template>
  <div class="flex items-center gap-4">
    <label class="flex items-center">
      <input
        type="radio"
        name="nisaPriority"
        value="growth"
        :checked="model === 'growth'"
        @change="updateValue('growth')"
        class="sr-only"
      />
      <span class="inline-flex items-center justify-center w-5 h-5 border rounded-full mr-2 transition-all duration-500">
        <span 
          class="block rounded-full"
          :class="model === 'growth' ? 'w-4 h-4 bg-common-radio-active scale-100' : 'w-0 h-0 bg-transparent scale-0'"
        ></span>
      </span>
      NISA優先（成長投資枠）
    </label>
    
    <label class="flex items-center">
      <input
        type="radio"
        name="nisaPriority"
        value="savings"
        :checked="model === 'savings'"
        @change="updateValue('savings')"
        class="sr-only"
      />
      <span class="inline-flex items-center justify-center w-5 h-5 border rounded-full mr-2 transition-all duration-500">
        <span 
          class="block rounded-full"
          :class="model === 'savings' ? 'w-4 h-4 bg-common-radio-active scale-100' : 'w-0 h-0 bg-transparent scale-0'"
        ></span>
      </span>
      NISA優先（つみたて投資枠）
    </label>

    <label class="flex items-center">
      <input
        type="radio"
        name="nisaPriority"
        value="none"
        :checked="model === 'none'"
        @change="updateValue('none')"
        class="sr-only"
      />
      <span class="inline-flex items-center justify-center w-5 h-5 border rounded-full mr-2 transition-all duration-500">
        <span 
          class="block rounded-full"
          :class="model === 'none' ? 'w-4 h-4 bg-common-radio-active scale-100' : 'w-0 h-0 bg-transparent scale-0'"
        ></span>
      </span>
      NISA優先しない
    </label>
  </div>
</template>