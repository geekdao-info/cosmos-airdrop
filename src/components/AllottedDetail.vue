<script setup lang="ts">
import { ref, watch } from 'vue';
import { useProjectStore } from '@/store/project';
import { encodeAddress } from '@/utils';
import { accAdd } from '@/utils/acc';
import { getFormatAmount } from '@/utils';
import { RightCircleOutlined } from '@ant-design/icons-vue';

components: {
    RightCircleOutlined;
}

const projectStore = useProjectStore();
const visible = ref<boolean>(false);
const account = ref([] as any);
const totalAmount = ref('');
const afterVisibleChange = (bool: boolean) => {
    console.log('visible', bool);
};
const showDrawer = () => {
    visible.value = true;
};

const openOfficialWeb = () => {
    if (projectStore.currentProject?.officialWeb) {
        window.open(projectStore.currentProject.officialWeb, '_blank');
    }
};
const openAirdropDetailWeb = () => {
    if (projectStore.currentProject?.airdropLink) {
        window.open(projectStore.currentProject.airdropLink, '_blank');
    }
};
watch(
    () => visible.value,
    () => {
        if (visible.value) {
            account.value = projectStore.getCurrentProfileProjectAirdropInfo();
            const total = account.value.reduce(function (accumulator: number, currentValue: any) {
                return accAdd(accumulator, Number(currentValue.amount));
            }, 0);
            totalAmount.value = `${getFormatAmount(total)} ${account.value[0]?.coin}`;
            console.log('account.value', account.value);
        }
    }
);

defineExpose({
    showDrawer
});
</script>
<template>
    <a-drawer
        v-model:visible="visible"
        width="40vw"
        :title="`Allotted to You ${totalAmount}`"
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
        <table class="table w-full">
            <tbody>
                <tr v-for="(item, index) in account" :key="index">
                    <th>{{ index + 1 }}</th>
                    <td
                        ><a-typography-paragraph
                            style="margin-bottom: 0.1rem"
                            :copyable="{ text: item.address }"
                        >
                            <a-tooltip>
                                <template #title>{{ item.address }}</template>
                                <span
                                    @click="openOfficialWeb"
                                    class="link link-hover link-primary"
                                    >{{ encodeAddress(item.address) }}</span
                                >
                            </a-tooltip>
                        </a-typography-paragraph>
                    </td>
                    <td>{{ item.amount }} {{ item.coin }}</td>
                </tr>
            </tbody>
        </table>
    </a-drawer>
</template>
