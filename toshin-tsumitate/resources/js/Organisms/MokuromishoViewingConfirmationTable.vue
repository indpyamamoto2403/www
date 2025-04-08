<script setup lang="ts">
import { KeiyakuKonyu } from '@/Types/KeiyakuKonyu';

const props = defineProps<{
    keiyakuKonyu: KeiyakuKonyu
}>();

const emit = defineEmits(['viewMokuromisho']);

const handleViewClick = () => {
    console.log('目論見書交付状況を閲覧するボタンがクリックされました');
    //emit('viewMokuromisho', props.keiyakuKonyu.id);
};
</script>

<template>
    <div class="mb-5">
        <table class="w-[600px] border-collapse">
            <tr class="border-b border-gray-200">
                <th class="bg-blue-50 p-3 text-left w-1/3">銘柄名</th>
                <td class="p-3 text-left">{{ keiyakuKonyu.MeigaraName }}</td>
            </tr>
            <tr class="border-b border-gray-200">
                <th class="bg-blue-50 p-3 text-left w-1/3">銘柄コード</th>
                <td class="p-3 text-left">{{ keiyakuKonyu.MeigaraCode }}</td>
            </tr>
            <tr class="border-b border-gray-200">
                <th class="bg-blue-50 p-3 text-left w-1/3">目論見書確認状況</th>
                <td class="p-3 text-left">
                    <div class="flex items-center">
                        <span>{{ keiyakuKonyu.HasMokuromishoConfirmed ? '確認済み' : '未確認' }}</span>
                        <button 
                            v-if="!keiyakuKonyu.HasMokuromishoConfirmed"
                            @click="handleViewClick"
                            class="ml-8 px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600 text-sm transition duration-500 ease-in-out"
                        >
                            目論見書交付状況を閲覧する
                        </button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>