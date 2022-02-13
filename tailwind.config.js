module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: ['light', 'bumblebee'],
        base: true,
        utils: true,
        logs: true,
        rtl: false
    }
};
