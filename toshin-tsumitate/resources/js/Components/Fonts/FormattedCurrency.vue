<script setup>
import { computed } from 'vue';
import { formatNumberWithCommas } from '@/Composables/Currency/FormattedCurrency.js';

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  suffix: {
    type: String,
    default: '円',
  },
  size: {
    type: String,
    default: 'base',
  }
});

// メインテキストのクラス（size に応じたフォントサイズ）
const mainTextClass = computed(() => {
  return props.size === 'lg' ? 'text-lg' : 'text-base';
});

// サフィックスのクラス（メインテキストに合わせて一段階小さいサイズに）
const suffixTextClass = computed(() => {
  return props.size === 'lg' ? 'text-base' : 'text-xs';
});
</script>

<template>
  <span :class="mainTextClass">
    {{ formatNumberWithCommas(value) }}
    <span v-if="suffix" :class="suffixTextClass">
      {{ suffix }}
    </span>
  </span>
</template>
