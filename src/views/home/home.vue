<script setup lang="ts">
import { ref } from 'vue';
import ProjectCardVue from '@/components/ProjectCard.vue';
import ProjectFooter from '@/components/ProjectFooter.vue';
import Icon from '@/components/Icon.vue';
import { useProjectStore } from '@/store/project';
import { useProfileStore } from '@/store/profile';
import { InfoCircleFilled } from '@ant-design/icons-vue';
import { noCheckProjectList } from '@/utils/noCheckProjectData';
import ManageProfile from '@/components/ManageProfile.vue';
import { themeChange } from 'theme-change';

components: {
    ProjectCardVue;
    ProjectFooter;
    InfoCircleFilled;
}
themeChange(false);
const manageProfile = ref();
const profileStore = useProfileStore();
const currentProfileKey = ref(0);
const currentProfileName = ref('');
const projectStore = useProjectStore();
const noCheckProjects = ref(noCheckProjectList);
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
            class="flex justify-end items-center border-base-200 bg-base-100 text-base-content sticky inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b"
        >
            <div class="flex-none ml-6">
                <!-- <img width="200" src="../../assets/logo.png" />  -->
                <span class="text-primary font-bold text-3xl">Cosmos</span
                ><span class="font-extrabold text-3xl">Drops</span>
                <div class="ml-2 badge badge-primary badge-outline">Beta</div>
            </div>

            <div class="flex-1">
                <!-- <div class="flex space-x-2 mx-8 hidden lg:mx-40 lg:flex">
                    <input
                        type="text"
                        placeholder="Search"
                        class="w-full input input-primary input-bordered"
                    />
                    <button class="btn btn-primary">go</button>
                </div> -->
            </div>

            <div class="navbar max-w-none mr-5">
                <!-- <div class="mr-8" data-set-theme="dark"><icon icon-class="wb_sunny"></icon></div> -->
                <a-dropdown :trigger="['click']">
                    <div class="btn btn-primary no-animation rounded-full" @click.prevent
                        >{{ profileStore.currentProfileName || 'Manage' }} | Profile</div
                    >
                    <template #overlay>
                        <a-menu>
                            <a-menu-item
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
                <!-- <div class="dropdown dropdown-end" title="Change Theme">
                    <div tabindex="0" class="m-1 normal-case btn-ghost btn">
                        <span class="hidden md:inline"> Manage Profile </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="inline-block w-4 h-4 ml-1 fill-current"
                            viewBox="0 0 1792 1792"
                        >
                            <path
                                d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                            />
                        </svg>
                    </div>
                    <div
                        class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"
                        v-bind:class="{
                            'rounded-t-box': isHomepage && !toggleNavClass()
                        }"
                    >
                        <ul class="p-4 menu compact">
                            <li v-for="(theme, index) in themes">
                                <a
                                    tabindex="0"
                                    :data-set-theme="theme.id"
                                    data-act-class="active"
                                    >{{ theme.name }}</a
                                >
                            </li>
                        </ul>
                    </div>
                </div> -->
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
                class="grid grid-cols-1 p-4 gap-4 w-6xl md:grid-cols-2 md:p-8 lg:grid-cols-3 lg:p-10 rounded-box"
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
                    :airdrop-link="item.airdropLink"
                    :official-web="item.officialWeb"
                    :label="item.label"
                    :name="item.name"
                    :coin="item.coin"
                    :check-account="item.checkAccount"
                ></project-card-vue>
            </div>
        </div>
        <h1 class="pt-12 text-center font-bold text-2xl">Airdrop Detail</h1>
        <div class="grid ustify-items-center lg:px-20">
            <!-- Project Card Info -->
            <div
                class="grid grid-cols-1 p-4 gap-4 w-6xl md:grid-cols-2 md:p-8 lg:grid-cols-3 lg:p-10 rounded-box"
            >
                <project-card-vue
                    v-for="(item, index) in noCheckProjects"
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
