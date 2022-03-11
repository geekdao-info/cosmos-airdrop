<script setup lang="ts">
import { WeiboOutlined, TwitterOutlined } from '@ant-design/icons-vue';
components: {
    WeiboOutlined;
    TwitterOutlined;
}
const openWeibo = () => {
    window.open('https://weibo.com/u/7565123862', '_blank');
};
const openTwitter = () => {
    window.open('https://twitter.com/mr7s1990', '_blank');
};
</script>
<template>
    <div>
        <a-tooltip>
            <template #title>geekDAO@Weibo</template>
            <weibo-outlined @click="openWeibo" class="mr-4" :style="{ fontSize: '28px' }" />
        </a-tooltip>
        <a-tooltip>
            <template #title>geekdao.eth@Twitter</template>
            <twitter-outlined @click="openTwitter" :style="{ fontSize: '28px' }" />
        </a-tooltip>
    </div>
</template>
