module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: ['bumblebee', 'light', 'dark', 'emerald'],
        base: true,
        utils: true,
        logs: true,
        rtl: false
    }
};