<template>
    <div class="investment-details w-full max-w-[860px] rounded-lg overflow-hidden border border-gray-200">
      <table class="w-full border-collapse">
        <tbody>
          <!-- 銘柄名 -->
          <tr>
            <th class="w-1/4 py-3 px-4 text-left bg-blue-100 border-b border-r border-gray-200">銘柄名</th>
            <td class="w-3/4 py-3 px-4 bg-blue-100 border-b border-gray-200 ">{{ stockName }}</td>
          </tr>
          
          <!-- 銘柄コード -->
          <tr>
            <th class="w-1/4 py-3 px-4 text-left bg-white border-b border-r border-gray-200">銘柄コード</th>
            <td class="w-3/4 py-3 px-4 bg-white border-b border-gray-200">{{ stockCode }}</td>
          </tr>
          
          <!-- 毎月の積立金額 -->
          <tr>
            <th class="w-1/4 py-3 px-4 text-left bg-white border-b border-r border-gray-200">毎月の積立金額</th>
            <td class="w-3/4 py-3 px-4 bg-white border-b border-gray-200">
              <div class="flex items-center">
                <input 
                  v-model="monthlyAmountValue" 
                  type="text" 
                  class="w-32 px-2 py-1 border rounded"
                  @change="updateMonthlyAmount"
                  placeholder="金額を入力"
                />
                <span class="ml-1">円</span>
              </div>
            </td>
          </tr>
          
          <!-- NISA優先 -->
          <tr>
            <th class="w-1/4 py-3 px-4 text-left bg-white border-b border-r border-gray-200">NISA優先</th>
            <td class="w-3/4 py-3 px-4 bg-white border-b border-gray-200">
              <div class="flex items-center gap-4">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    :checked="nisaPriority === 'growth'"
                    @change="updateNisaPriority('growth')"
                    class="sr-only"
                  />
                  <span class="inline-flex items-center justify-center w-5 h-5 border rounded mr-2" :class="{'bg-blue-400 text-white': nisaPriority === 'growth', 'bg-white': nisaPriority !== 'growth'}">
                    <svg v-if="nisaPriority === 'growth'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  NISA優先（成長投資枠）
                </label>
                
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    :checked="nisaPriority === 'savings'"
                    @change="updateNisaPriority('savings')"
                    class="sr-only"
                  />
                  <span class="inline-flex items-center justify-center w-5 h-5 border rounded mr-2" :class="{'bg-blue-400 text-white': nisaPriority === 'savings', 'bg-white': nisaPriority !== 'savings'}">
                    <svg v-if="nisaPriority === 'savings'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  NISA優先（つみたて投資枠）
                </label>
              </div>
            </td>
          </tr>
          
          <!-- 適用開始日 -->
          <tr>
            <th class="w-1/4 py-3 px-4 text-left bg-white border-r border-gray-200">適用開始日</th>
            <td class="w-3/4 py-3 px-4 bg-white">
              <div class="flex items-center gap-2">
                <span>適用開始年</span>
                <input v-model="startYear" type="text" class="w-16 px-2 py-1 border rounded" />
                <span>年</span>
                
                <input v-model="startMonth" type="text" class="w-12 px-2 py-1 border rounded ml-2" />
                <span>月</span>
                
                <span class="ml-6">適用終了年</span>
                <input v-model="endYear" type="text" class="w-16 px-2 py-1 border rounded" />
                <span>年</span>
                
                <input v-model="endMonth" type="text" class="w-12 px-2 py-1 border rounded ml-2" />
                <span>月</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch, onMounted } from 'vue';
  
  const props = defineProps({
    stockName: {
      type: String,
      default: 'ダイワUSリートOP'
    },
    stockCode: {
      type: String,
      default: 'XX.XX'
    },
    monthlyAmount: {
      type: [String, Number],
      default: '30000'
    },
    defaultNisaPriority: {
      type: String,
      default: 'growth', // 'growth' or 'savings'
    },
    defaultStartYear: {
      type: String,
      default: '2025'
    },
    defaultStartMonth: {
      type: String,
      default: '05'
    },
    defaultEndYear: {
      type: String,
      default: ''
    },
    defaultEndMonth: {
      type: String,
      default: ''
    }
  });
  
  const emit = defineEmits(['update:monthlyAmount', 'update:nisaPriority', 'update:startDate', 'update:endDate']);
  
  const nisaPriority = ref(props.defaultNisaPriority);
  const startYear = ref(props.defaultStartYear);
  const startMonth = ref(props.defaultStartMonth);
  const endYear = ref(props.defaultEndYear);
  const endMonth = ref(props.defaultEndMonth);
  const monthlyAmountValue = ref('');
  
  // 初期値を設定（数値またはカンマ付き文字列を処理）
  onMounted(() => {
    // 文字列から数値部分のみを抽出
    const numericValue = String(props.monthlyAmount).replace(/[^0-9]/g, '');
    monthlyAmountValue.value = numericValue;
  });
  
  // 積立金額の更新
  const updateMonthlyAmount = () => {
    // 数値のみを抽出（カンマや円記号を削除）
    const numericAmount = monthlyAmountValue.value.replace(/[^0-9]/g, '');
    
    // 数値部分を更新
    monthlyAmountValue.value = numericAmount;
    
    // 親コンポーネントに通知
    emit('update:monthlyAmount', numericAmount);
  };
  
  const updateNisaPriority = (value) => {
    nisaPriority.value = value;
    emit('update:nisaPriority', value);
  };
  
  // 変更時にイベントを発行
  const watchStartDate = () => {
    emit('update:startDate', {
      year: startYear.value,
      month: startMonth.value
    });
  };
  
  const watchEndDate = () => {
    emit('update:endDate', {
      year: endYear.value,
      month: endMonth.value
    });
  };
  
  // 変更を監視
  watch(startYear, watchStartDate);
  watch(startMonth, watchStartDate);
  watch(endYear, watchEndDate);
  watch(endMonth, watchEndDate);
  </script>