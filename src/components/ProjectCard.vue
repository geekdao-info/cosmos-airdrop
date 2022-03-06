<script setup lang="ts">
import { ref, watch } from 'vue';
import AllottedDetail from './AllottedDetail.vue';
import { useProjectStore } from '@/store/project';
import { useProfileStore } from '@/store/profile';
import { AirdropInfo } from '@/types/types';
import { accAdd } from '@/utils/acc';
import { getFormatAmount } from '@/utils';

const props = defineProps<{
    projectKey: string;
    claimStatus?: string;
    claimStatusClass?: string;
    icon: string;
    name: string;
    label?: string[];
    snapDate: string;
    airdropDate: string;
    description: string;
    twitter?: string;
    discord?: string;
    airdropClaim?: string;
    airdropLink?: string;
    officialWeb?: string;
    detail?: string;
    coin?: string;
    isCheckAccount: boolean;
    checkAccount: Function;
}>();

const loading = ref(false);
const allottedAllAmount = ref<Number>(0);
const allottedDetail = ref();
const projectDetail = ref();
const projectStore = useProjectStore();
const profileStore = useProfileStore();

const checkAirdrop = async () => {
    loading.value = true;
    if (props.isCheckAccount && typeof props.checkAccount === 'function') {
        const airdrop = [] as AirdropInfo[];
        const addressCount = profileStore.currentProfile?.address?.length ?? 0;

        for (let index = 0; index < addressCount; index++) {
            try {
                const item = profileStore.currentProfile?.address[index] ?? '';
                const amount = await props.checkAccount(item);
                if (Number(amount)) {
                    airdrop.push({ address: item, amount: Number(amount), coin: props.coin });
                }
                if (index + 1 === addressCount) {
                    projectStore.setProfileAllotted(props.projectKey, airdrop);
                    loading.value = false;
                }
            } catch (e) {
                console.log('checkAirdrop e', e);
                loading.value = false;
            }
        }
        if (profileStore.currentProfile?.address?.length ?? 0 <= 0) {
            setTimeout(() => {
                loading.value = false;
            }, 500);
        }
    } else {
        loading.value = false;
    }
};

// watch(()=>projectStore.getProject(props.projectKey)?.airdropTotalAmount,()=>{
//   allottedAllAmount.value = Number(projectStore.getProject(props.projectKey)?.airdropTotalAmount);
// })
watch(
    () => profileStore.currentProfileIndex,
    () => {
        checkAirdrop();
    },
    {
        immediate: true,
        deep: true
    }
);
watch(
    () => [
        profileStore.currentProfileIndex,
        projectStore.profileAllotted[projectStore.getProfileProjectAllottedIndex(props.projectKey)]
            ?.airdrop
    ],
    () => {
        allottedAllAmount.value =
            projectStore.profileAllotted[
                projectStore.getProfileProjectAllottedIndex(props.projectKey)
            ]?.airdrop?.reduce(function (accumulator: number, currentValue: any) {
                return accAdd(accumulator, Number(currentValue.amount));
            }, 0) ?? 0;
    },
    {
        immediate: true,
        deep: true
    }
);

const openAllottedDetail = () => {
    if (allottedAllAmount.value > 0) {
        projectStore.setCurrentProjectKey(props.projectKey);
        allottedDetail.value.showDrawer();
    }
};
const openProjectDetail = () => {
    projectStore.setCurrentProjectKey(props.projectKey);
    projectDetail.value.showDrawer();
};
const openOfficialWeb = () => {
    if (props.officialWeb) {
        window.open(props.officialWeb, '_blank');
    }
};
</script>

<template>
    <card class="card-bordered w-full bg-indigo-50 border-1 hover:border-primary">
        <div class="card-body relative">
            <div v-if="claimStatus" class="absolute top-0 right-0"
                ><div
                    class="w-24 h-8 bg-primary rounded-l-lg text-primary-content flex justify-center items-center"
                    :class="claimStatusClass"
                    >{{ claimStatus }}</div
                ></div
            >

            <div @click="openOfficialWeb" class="card-title flex items-center link link-hover">
                <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                        <img :src="icon" />
                    </div>
                </div>
                <span class="ml-3">{{ name }}</span>
            </div>

            <div class="mb-2 space-x-2 card-actions">
                <div v-for="item in label" :key="item" class="badge badge-primary badge-outline">
                    {{ item }}</div
                >
            </div>
            <div class="grid grid-cols-2">
                <div>
                    <span class="text-xs">Snapshot: </span>
                    <span class="text-xs text-primary font-bold">{{ snapDate }}</span>
                </div>
                <div>
                    <span class="text-xs">Claim: </span>
                    <span class="text-xs text-primary font-bold">{{ airdropDate }}</span>
                </div>
            </div>

            <p class="mt-2 text-neutral">{{ description }}</p>
            <div class="flex items-center">
                <button class="btn mr-2 btn-outline btn-primary" @click="openProjectDetail">
                    <span class="ml-1">DETAIL</span>
                </button>
                <button v-if="loading" class="btn btn-primary loading"
                    ><span class="ml-1">check airdrop</span></button
                >
                <button
                    v-else-if="props.isCheckAccount"
                    class="btn btn-primary"
                    @click="openAllottedDetail"
                >
                    <span class="ml-1"
                        >{{ getFormatAmount(Number(allottedAllAmount)) }} Allotted
                    </span>
                </button>
            </div>
        </div>
    </card>
    <AllottedDetail ref="allottedDetail" />
    <ProjectDetail
        :detail="props.detail"
        :airdropClaim="props.airdropClaim"
        :officialWeb="props.officialWeb"
        :airdropLink="props.airdropLink"
        :twitter="props.twitter"
        :discord="props.discord"
        ref="projectDetail"
    />
</template>

<style scoped></style>
