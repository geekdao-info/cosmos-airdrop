<script setup lang="ts">
import { ref } from 'vue';
import { useProjectStore } from '@/store/project';

const props = defineProps<{
    detail?: string;
    officialWeb?: string;
    airdropLink?: string;
}>();

const projectStore = useProjectStore();
const visible = ref<boolean>(false);

const afterVisibleChange = (bool: boolean) => {
    console.log('visible', bool);
};
const showDrawer = () => {
    visible.value = true;
};

const openOfficialWeb = () => {
    if (props.officialWeb) {
        window.open(props.officialWeb, '_blank');
    }
};
const openAirdropDetailWeb = () => {
    if (props.airdropLink) {
        window.open(props.airdropLink, '_blank');
    }
};

defineExpose({
    showDrawer
});
</script>
<template>
    <a-drawer
        v-model:visible="visible"
        width="40vw"
        title="Detail"
        placement="right"
        :footer-style="{ textAlign: 'right' }"
        :closable="true"
        @after-visible-change="afterVisibleChange"
    >
        <template #footer class="text-center">
            <button class="btn btn-outline btn-primary btn-sm" @click="openAirdropDetailWeb"
                >AIRDROP DETAIL</button
            >
            <button class="btn btn-outline btn-primary btn-sm ml-2" @click="openOfficialWeb"
                >Official WEB</button
            >
        </template>
        <div>
            {{ props.detail }}
        </div>
    </a-drawer>
</template>
