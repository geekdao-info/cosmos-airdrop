<script setup lang="ts">
import { ref } from 'vue';
import ProjectCardVue from '@/components/ProjectCard.vue';
import ProjectFooter from '@/components/ProjectFooter.vue';
import Icon from '@/components/Icon.vue';
import { useProjectStore } from '@/store/project';
import { useProfileStore } from '@/store/profile';
import { InfoCircleFilled } from '@ant-design/icons-vue';
import ManageProfile from '@/components/ManageProfile.vue';

components: {
    ProjectCardVue;
    ProjectFooter;
    InfoCircleFilled;
}

const manageProfile = ref();
const profileStore = useProfileStore();
const currentProfileKey = ref(0);
const currentProfileName = ref('');
const projectStore = useProjectStore();
const changeProfile = (key: number, name: string) => {
    // currentProfileKey.value = key;
    // currentProfileName.value = name;
    profileStore.setCurrentProfileKey(key);
};
const openManageProfile = () => {
    manageProfile.value.showDrawer();
};
</script>
<template>
    <div>
        <div
            id="nav"
            class="flex justify-end items-center py-2 border-base-200 bg-base-100 text-base-content sticky inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b"
        >
            <div class="flex-0 ml-6">
                <span class="text-primary font-bold text-xl lg:text-3xl"
                    ><span>C</span
                    ><span><img class="inline" width="20" src="../../assets/logo.png" /></span
                    ><span>smos</span></span
                ><span class="font-extrabold text-xl lg:text-3xl">Drops</span>
                <div class="ml-2 badge badge-primary badge-outline">Beta</div>
            </div>

            <div class="flex-1"> </div>

            <div class="navbar max-w-none mr-2 hidden lg:mr-5 md:block">
                <!-- <div class="mr-8" data-set-theme="dark"><icon icon-class="wb_sunny"></icon></div> -->
                <a-dropdown :trigger="['click']">
                    <div
                        class="btn btn-primary no-animation rounded-full btn-sm lg:btn-md"
                        @click.prevent
                        >{{ profileStore.currentProfileName || 'Manage' }} | Profile</div
                    >
                    <template #overlay>
                        <a-menu>
                            <a-menu-item
                                style="text-align: center"
                                v-for="item in profileStore.profiles"
                                :key="item.key"
                                @click="changeProfile(item.key, item.name)"
                            >
                                <span>{{ item.name }}</span>
                            </a-menu-item>

                            <a-menu-divider />
                            <a-menu-item key="3" @click="openManageProfile"
                                ><div class="text-center text-primary"
                                    >Manage Profile</div
                                ></a-menu-item
                            >
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
        <!-- Manage Your Profile to Check multi-account AirDrop Info -->
        <div class="text-center">
            <h1 class="pt-12 font-bold text-2xl">Profile Check Airdrop</h1>
            <p>Manage your profile to Check multi-account Airdrop info</p>
        </div>

        <div class="grid ustify-items-center lg:px-20">
            <!-- Project Card Info -->
            <div
                class="grid grid-cols-1 p-4 gap-4 w-6xl md:grid-cols-2 md:p-8 xl:grid-cols-3 2xl:grid-cols-4 lg:p-10 rounded-box"
            >
                <project-card-vue
                    v-for="(item, index) in projectStore.projects"
                    :key="index"
                    :claim-status="item.claimStatus"
                    :claim-status-class="item.claimStatusClass"
                    :project-key="item.key"
                    :is-check-account="item.isCheckAccount"
                    :airdrop-date="item.airdropDate"
                    :snap-date="item.snapDate"
                    :icon="item.icon"
                    :description="item.description"
                    :detail="item.detail"
                    :twitter="item.twitter"
                    :discord="item.discord"
                    :airdrop-claim="item.airdropClaim"
                    :airdrop-link="item.airdropLink"
                    :official-web="item.officialWeb"
                    :label="item.label"
                    :name="item.name"
                    :coin="item.coin"
                    :check-account="item.checkAccount"
                ></project-card-vue>
            </div>
        </div>

        <!-- Footer -->
        <project-footer></project-footer>
        <manage-profile ref="manageProfile"></manage-profile>
    </div>
</template>
