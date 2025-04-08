<script setup>
import NisaChart from '@/Charts/NisaChart.vue';
import FormattedCurrency from '@/Components/Fonts/FormattedCurrency.vue';
import { computed } from 'vue';
import useScreenSizeMonitoring from '@/Composables/Responsive/ScreenSizeMonitoring.js';

const { isPcSize, currentWidth } = useScreenSizeMonitoring();

const props = defineProps({
    type:{
        type: String,
        default: 'tsumitate',
    }
});

const valiables = computed(() =>{
    if (props.type == 'seicho') {
        return {
            title: '成長投資',
            invested: 6000000,
            maxInvest: 12000000,
            investedColorCode: "#0186BF",
            availableColorCode:"#41BCF2",
        }
    } else if (props.type == 'tsumitate') {
        return {
            title: 'つみたてNISA',
            invested: 16000000,
            maxInvest: 24000000,
            investedColorCode: "#0DB8A4",
            availableColorCode: "#59DBC4",
        }
    } 
});

</script>

<template>
<!-- NISAの構成を表示するコンポーネント PC版-->

  <div 
   v-if="isPcSize"
   class="nisa-kosei-container"
  >
    <!-- グラフ表示部分 - 固定幅120px -->
    <div class="chart-container">
        <NisaChart :data="valiables"/>
    </div>

    <!-- ラベルのコンテナ - 残りの幅を占める -->
    <div class="label-container">
        <div class="first-label">
            <span class="text-left font-bold text-base">
                {{ valiables.title }}
            </span>
            <span class="text-left">
                年間
                <formatted-currency 
                :value="valiables.maxInvest" 
                suffix="円"
                />
            </span>
        </div>

        <div class="second-label">
            <span class="text-left text-gray-700">
                <span :style="{ color: valiables.investedColorCode }">
                    ■
                </span>
                投資額
            </span>
            <span class="text-left text-gray-700">
                <span :style="{ color: valiables.availableColorCode }">
                    ■
                </span>
                可能額
            </span>
        </div>
        <div class="third-label">
            <span class="text-right pr-2">
                <formatted-currency 
                :value="valiables.maxInvest - valiables.invested" 
                suffix="円"
                />
            </span>
            <span class="text-right pr-2 font-bold">
                <formatted-currency 
                :value="valiables.invested"
                size="lg" 
                suffix="円"
                />
            </span>
        </div>
    </div>
  </div>

  <!-- NISAの構成を表示するコンポーネント SP版-->
   <div 
   class="nisa-kosei-container-mobile"
   v-else>
    <!-- グラフ表示部分 - 固定幅120px -->
    <div class="chart-container">
        <NisaChart 
        :data="valiables"
        class="w-[70px] h-[70px]"
        />
    </div>
    <div class="first-label-mobile">
        <div class="text-left font-bold text-base">
            {{ valiables.title }}
        </div>
        <div class="text-left">
            年間
            <formatted-currency 
            :value="valiables.maxInvest" 
            suffix="円"
            />
        </div>
        <!-- ここに水平線を追加 -->
        <hr class="my-2 border-t-1 border-common-border-color">
        <div class="flex justify-between">
            <div>
                <span :style="{ color: valiables.investedColorCode }">
                    ■
                </span>
                <span>
                    投資額
                </span>
            </div>
            <div>
                <formatted-currency 
                :value="valiables.invested" 
                suffix="円"
                />
            </div>
        </div>
        <div class="flex justify-between">
            <div>
                <span :style="{ color: valiables.availableColorCode }">
                    ■
                </span>
                <span>
                    可能枠
                </span>
            </div>
            <div
            class="font-bold"
            >
                <formatted-currency 
                :value="valiables.invested" 
                suffix="円"
                size="lg"
                />
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.nisa-kosei-container {
    @apply flex flex-row items-center justify-between bg-white rounded-lg p-2 w-[540px] gap-2 min-h-[120px] border border-common-card-border-color border;
}

.chart-container {
    @apply flex-none w-[90px] h-[90px] flex items-center justify-center;
}

.label-container {
    @apply flex-1 flex items-center h-[60px] justify-center;
}

.first-label {
    @apply flex-1 h-full flex flex-col justify-start pl-3 text-sm py-1;
}
    
.second-label {
    @apply flex-none w-24 h-full flex flex-col justify-between py-2 pl-2 text-sm;
  }
  
  .third-label {
    @apply flex-none w-36 h-full flex flex-col justify-between py-2 pl-2 text-sm;
  }


  .nisa-kosei-container-mobile {
    @apply flex flex-row items-center justify-between bg-white rounded-lg p-2 w-full gap-2 min-h-[120px]  bg-slate-100;
  }

  .first-label-mobile {
    @apply flex-1 h-full flex flex-col justify-start pl-3 text-sm py-1;
  }
</style>