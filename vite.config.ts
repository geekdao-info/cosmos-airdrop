import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    base: './', // 设置打包路径
    server: {
        port: 4000, // 服务启动端口号
        open: true, // 服务启动时自动打开浏览器
        cors: true, // 允许跨域
        // 设置代理
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
