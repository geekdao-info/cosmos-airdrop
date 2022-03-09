<script setup lang="ts">
import { computed, ref } from 'vue';
import { useProjectStore } from '@/store/project';
import { message } from 'ant-design-vue';

const props = defineProps<{
    detail?: string;
    officialWeb?: string;
    airdropLink?: string;
    airdropClaim?: string;
    twitter?: string;
    discord?: string;
}>();

const projectStore = useProjectStore();
const visible = ref<boolean>(false);

const currentComponent = computed((item) => {
    return props.detail;
});

const afterVisibleChange = (bool: boolean) => {
    console.log('visible', bool);
};
const showDrawer = () => {
    visible.value = true;
};

const openOfficialWeb = () => {
    if (props.officialWeb) {
        window.open(props.officialWeb, '_blank');
    } else {
        message.error({
            content: 'the current page is missing',
            class: 'text-primary'
        });
    }
};
const openAirdropDetailWeb = () => {
    if (props.airdropLink) {
        window.open(props.airdropLink, '_blank');
    } else {
        message.error({
            content: 'the current page is missing',
            class: 'text-primary'
        });
    }
};
const openAirdropClaimWeb = () => {
    if (props.airdropClaim) {
        window.open(props.airdropClaim, '_blank');
    } else {
        message.error({
            content: 'the current page is missing',
            class: 'text-primary'
        });
    }
};

const openTwitter = () => {
    if (props.twitter) {
        window.open(props.twitter, '_blank');
    } else {
        message.error({
            content: 'the current page is missing',
            class: 'text-primary'
        });
    }
};

const openDiscord = () => {
    if (props.discord) {
        window.open(props.discord, '_blank');
    } else {
        message.error({
            content: 'the current page is missing',
            class: 'text-primary'
        });
    }
};

defineExpose({
    showDrawer
});
</script>
<template>
    <a-drawer
        v-model:visible="visible"
        title="Detail"
        placement="right"
        :contentWrapperStyle="{ width: '80vw' }"
        :footer-style="{ textAlign: 'right' }"
        :closable="true"
        @after-visible-change="afterVisibleChange"
    >
        <template #footer class="text-center">
            <button class="btn btn-primary btn-sm ml-2 mb-2" @click="openTwitter">twitter</button>
            <button class="btn btn-primary btn-sm ml-2 mb-2" @click="openDiscord">discord</button>
            <button
                class="btn btn-outline btn-primary btn-sm ml-2 mb-2"
                @click="openAirdropClaimWeb"
                >CLAIM</button
            >
            <button
                class="btn btn-outline btn-primary btn-sm ml-2 mb-2"
                @click="openAirdropDetailWeb"
                >AIRDROP DETAIL</button
            >
            <button class="btn btn-outline btn-primary btn-sm ml-2 mb-2" @click="openOfficialWeb"
                >Official WEB</button
            >
        </template>
        <div>
            <component :is="currentComponent"> </component>
        </div>
    </a-drawer>
</template>
<style scoped>
:deep(.ant-drawer .ant-drawer-content-wrapper) {
    width: 500px !important;
    color: #ffffff;
}
</style>
