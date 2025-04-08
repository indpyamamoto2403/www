<script setup>
import StandardTabs from '@/Components/StandardTabs.vue'
import SentakuchuButton from '@/Components/SentakuchuButton.vue'
import TsumitatePrimaryButton from '@/Components/TsumitatePrimaryButton.vue'
import SelectedToggleButton from '@/Components/SelectedToggleButton.vue'
import KozaFurikaeKeiyakuJokyoTable from '@/Components/KozaFurikaeKeiyakuJokyoTable.vue'
import InlineBadge from '@/Components/InlineBadge.vue'
import PrimaryCheckbox from '@/Components/PrimaryCheckbox.vue'
import MeigaraRegisterForm from '@/Organisms/MeigaraRegisterForm.vue'
import NisaComposable from '@/Organisms/NisaComposable.vue'
import MokuromishoViewingConfirmationTable from '@/Organisms/MokuromishoViewingConfirmationTable.vue'
const components = [

    {
        name: 'StandardTabs',
        component: StandardTabs,
        props: {
            initialActiveTab: 0,
            tabs: [
                { name: '基本情報' },
                { name: '詳細情報' },
                { name: '手数料等' }
            ],
        },
    },
    {
        name: 'SentakuchuButton',
        component: SentakuchuButton,
        props: {
            label: '選択中',
            count: 3,
            bgColor: 'orange',
        },
    },
    {
        name: 'SentakuchuButton0Version',
        component: SentakuchuButton,
        props: {
            label: '選択なし',
            count: 0,
            bgColor: 'orange',
        },
    },
    {
        name: 'TsumitatePrimaryButton',
        component: TsumitatePrimaryButton,
        props: {
            label: 'つみたて中',
            state: 'active',
        },
    },
    {
        name: 'SelectedToggleButton',
        component: SelectedToggleButton,
        props: {
            label: '選択中',
            modelValue: false,
        },
    },

    {
        name: 'KozaFurikaeKeiyakuJokyoTable',
        component: KozaFurikaeKeiyakuJokyoTable,
    },
    {
        name: 'InlineBadge(つみたて)',
        component: InlineBadge,
        props: {
            type: 'savings',
        },
    },

    {
        name: 'InlineBadge(契約中)',
        component: InlineBadge,
        props: {
            type: 'default',
        },
    },
    {
        name: 'InlineBadge(成長投資)',
        component: InlineBadge,
        props: {
            type: 'investment',
        },
    },
    {
        name: 'PrimaryCheckbox',
        component: PrimaryCheckbox,
        props: {
            modelValue: false,
            label: 'NISA優先',
            disabled: false,
        },
    },
    {
        name: 'MeigaraRegisterForm',
        component: MeigaraRegisterForm,
        props: {

        },
    },

    {
        name: 'NisaComposable',
        component: NisaComposable,
        props: {
            // Add any props you want to pass to NisaChart here
            type: 'tsumitate',
        },
    },
    {
        name: 'NisaComposable',
        component: NisaComposable,
        props: {
            // Add any props you want to pass to NisaChart here
            type: 'seicho',
        },
    },
    {
        name: 'MokuromishoViewingConfirmationTable',
        component: MokuromishoViewingConfirmationTable,
        props: {
            keiyakuKonyu: {
                MeigaraName: 'テスト銘柄',
                MeigaraCode: '12345678',
                HasMokuromishoConfirmed: false,
            },
        },
    },
];

</script>
<template>
    <div class="flex justify-center items-center min-w-screen bg-gray-100 mx-auto mx-12 min-h-screen">
        <div class="bg-white rounded-lg shadow-md text-center px-12 py-8 w-4/5">
            <h1 class="text-2xl font-bold mb-4">Storybook</h1>
            <div class="grid grid-cols-1 gap-4">
                <div 
                v-for="component in components" 
                :key="component.name" 
                class="p-4 border rounded-lg flex flex-col items-center bg-white shadow-sm"
                >
                    <h2 class="text-xl font-semibold mb-2">
                        {{ component.name }}
                    </h2>
                    <component 
                    :is="component.component" 
                    v-bind="component.props"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
