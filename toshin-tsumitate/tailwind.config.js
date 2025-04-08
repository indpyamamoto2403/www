import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            // カスタムカラーを追加
            colors: {
                common:{
                    "border-color":"#8692A7",
                    "card-border-color":"#CBD6EA",
                    "radio-active":"#191D5A",
                },
                nisa:{
                    "seicho-toshigaku": "#0186BF",
                    "seicho-kanogaku": "#41BCF2",
                    "tsumitate-toshigaku": "#0DB8A4",
                    "tsumitate-kanogaku": "#59DBC4",
                }
            }
        },
    },

    plugins: [forms],
};
