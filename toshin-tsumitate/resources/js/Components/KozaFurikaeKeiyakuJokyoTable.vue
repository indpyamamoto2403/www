  
  <script setup>
  defineProps({
    bankName: {
      type: String,
      default: 'XX銀行'
    },
    branchName: {
      type: String,
      default: 'YY支店'
    },
    accountType: {
      type: String,
      default: '普通サンプル預金'
    },
    accountNumber: {
      type: String,
      default: '1234567890'
    },
    contractStatus: {
      type: String,
      default: '契約中'
    }
  });
  </script>
<template>
    <div class="max-w-md mx-auto">
      <h2 class="text-xl font-medium mb-3">口座振替契約状況</h2>
      <div class="border rounded-lg overflow-hidden">
        <table class="w-full">
          <tbody>
            <tr class="border-b">
              <td class="p-3 bg-gray-50 border-r">銀行名</td>
              <td class="p-3">{{ bankName }}</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 bg-gray-50 border-r">支店名</td>
              <td class="p-3">{{ branchName }}</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 bg-gray-50 border-r">種別</td>
              <td class="p-3">{{ accountType }}</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 bg-gray-50 border-r">口座番号</td>
              <td class="p-3">{{ accountNumber }}</td>
            </tr>
            <tr>
              <td class="p-3 bg-gray-50 border-r">契約状況</td>
              <td class="p-3">{{ contractStatus }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
