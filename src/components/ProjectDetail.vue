<script setup lang="ts">
import { ref } from 'vue';
import { useProjectStore } from '@/store/project';

const projectStore = useProjectStore();
const visible = ref<boolean>(false);
const account = ref([] as any);

const afterVisibleChange = (bool: boolean) => {
    console.log('visible', bool);
};
const showDrawer = () => {
    visible.value = true;
};

const openOfficialWeb = () => {
    if (projectStore.currentProject?.info?.officialWeb) {
        window.open(projectStore.currentProject.info.officialWeb, '_blank');
    }
};
const openAirdropDetailWeb = () => {
    if (projectStore.currentProject?.info?.airdropLink) {
        window.open(projectStore.currentProject.info.airdropLink, '_blank');
    }
};

defineExpose({
    showDrawer
});
</script>
<template>
    <a-drawer
        v-model:visible="visible"
        width="400"
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
            {{ projectStore?.currentProject?.info?.detail }}
        </div>
    </a-drawer>
</template>
