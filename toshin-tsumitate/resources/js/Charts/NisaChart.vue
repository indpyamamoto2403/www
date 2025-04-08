<script setup>
import { ref, onMounted, watch, computed } from 'vue';

const props = defineProps({
  // グラフに表示するデータ
  data: {
    type: Object,
    required: true,
  }
});

// 固定値としてサイズとホール比率を定義
const size = 90; // 固定サイズ
const holeRatio = 0.7; // 固定ホール比率

const canvasRef = ref(null);
let ctx = null;

// 利用可能額を計算 (maxInvestがあれば使用、なければavailableを使用)
const available = computed(() => {
  if (props.data.maxInvest !== undefined) {
    return props.data.maxInvest - props.data.invested;
  }
  return props.data.available || 0;
});

// 総額の計算
const total = computed(() => {
  if (props.data.maxInvest !== undefined) {
    return props.data.maxInvest;
  }
  return (props.data.invested || 0) + (props.data.available || 0);
});

// 投資済み比率の計算
const investedRatio = computed(() => {
  if (total.value <= 0) return 0;
  return (props.data.invested || 0) / total.value;
});

/**
 * 円グラフを描画する関数
 */
const drawChart = () => {
  if (!ctx) return;
  
  
  // カラーコードを取得
  const investedColor = props.data.investedColorCode || '#3B82F6';
  const availableColor = props.data.availableColorCode || '#E5E7EB';
  
  const width = size;
  const height = size;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) - 2;

  // キャンバスをクリア
  ctx.clearRect(0, 0, width, height);

  // データ無しの場合
  if (total.value <= 0) {
    // 全体をグレーで描画
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#E5E7EB'; // デフォルトでグレー
    ctx.fill();
  } else {
    // 背景円（投資可能額）
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = availableColor;
    ctx.fill();

    // 投資済み部分
    if (investedRatio.value > 0) {
      const startAngle = -0.5 * Math.PI; // 12時の位置から開始
      const endAngle = startAngle + (investedRatio.value * 2 * Math.PI);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineTo(centerX, centerY);
      ctx.fillStyle = investedColor;
      ctx.fill();
    }
  }

  // 中心の穴（ドーナツ状にする）
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * holeRatio, 0, 2 * Math.PI);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
};

// コンポーネントマウント時の処理
onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d');
    // キャンバスの解像度を調整（高DPIディスプレイ対応）
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasRef.value.getBoundingClientRect();

    canvasRef.value.width = rect.width * dpr;
    canvasRef.value.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // 初回描画
    drawChart();
  }
});

// データ変更時に再描画 (プロパティ名を修正)
watch(
  () => [
    props.data.invested, 
    props.data.maxInvest,
    props.data.available, 
    props.data.investedColorCode, 
    props.data.availableColorCode
  ],
  () => {
    drawChart();
  },
  { deep: true }
);
</script>

<template>
  <div class="nisa-chart">
    <canvas ref="canvasRef" :width="size" :height="size"/>
  </div>
</template>

<style scoped>
.nisa-chart {
  @apply relative flex items-center justify-center w-[90px] h-[90px];
}

canvas {
  @apply block w-full h-full;
}
</style>