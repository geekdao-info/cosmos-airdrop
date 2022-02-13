import { acceptHMRUpdate, defineStore } from 'pinia';
import { AirdropInfo, ProfileAllotted, ProjectBaseInfo } from '@/types/types';
import { projectList } from '@/utils/profileCheckProjectData';
import { useProfileStore } from './profile';
import { accAdd } from '@/utils/acc';

export const useProjectStore = defineStore({
    id: 'project',
    state: () => {
        const projects: ProjectBaseInfo[] = projectList;
        const profileAllotted = [] as ProfileAllotted[];
        return {
            projects,
            profileAllotted,
            currentProjectKey: ''
        };
    },
    getters: {
        currentProject: (state) => {
            const index = state.projects.findIndex((e) => e.key === state.currentProjectKey);
            console.log('project store index', index);
            return state.projects[index];
        },
        currentProfileProjectAllotted: (state) => {
            const profileStore = useProfileStore();
            const currentProfileKey = profileStore?.currentProfile?.key ?? 0;
            return state.profileAllotted.find(
                (e) =>
                    e.projectKey === state.currentProjectKey && e.profileKey === currentProfileKey
            );
        }
    },
    actions: {
        setCurrentProjectKey(key: string) {
            this.currentProjectKey = key;
        },
        getProfileProjectAllottedIndex(projectKey: string) {
            const profileStore = useProfileStore();
            const currentProfileKey = profileStore?.currentProfile?.key ?? 0;
            const index = this.profileAllotted.findIndex(
                (e) => e.projectKey === projectKey && e.profileKey === currentProfileKey
            );
            return index;
        },
        setAirdropTotalAmount(projectKey: string, amount: number) {
            const index = this.getProfileProjectAllottedIndex(projectKey);
            if (index >= 0) {
                this.profileAllotted[index].airdropTotalAmount = amount ?? 0;
            }
        },

        setProfileAllotted(projectKey: string, airdropInfo: AirdropInfo[]) {
            // 如果存在 [当前项目-当前Profile] 的查询结果，则不需要新增了
            console.log('setProfileAllotted store projects airdropInfo', airdropInfo);
            const profileStore = useProfileStore();
            const currentProfileKey = profileStore?.currentProfile?.key ?? 0;
            const profileAllottedIndex = this.getProfileProjectAllottedIndex(projectKey);
            if (profileAllottedIndex >= 0) {
                this.profileAllotted[profileAllottedIndex].airdrop = airdropInfo;
                this.profileAllotted[profileAllottedIndex].checkTime = new Date().getTime();
                const total = airdropInfo.reduce(function (accumulator, currentValue) {
                    return accAdd(accumulator, Number(currentValue.amount));
                }, 0);
                this.profileAllotted[profileAllottedIndex].airdropTotalAmount = total;
                console.log('if total', total);
            } else {
                const total = airdropInfo.reduce(function (accumulator, currentValue) {
                    return accAdd(accumulator.toExponential, Number(currentValue.amount));
                }, 0);
                console.log('else total', total);
                this.profileAllotted.push({
                    profileKey: currentProfileKey ?? 0,
                    projectKey: projectKey,
                    checkTime: new Date().getTime(),
                    airdrop: airdropInfo,
                    airdropTotalAmount: total
                });
            }
        },
        getCurrentProfileProjectAirdropInfo() {
            const profileStore = useProfileStore();
            const currentProfileKey = profileStore?.currentProfile?.key;
            const profileAllottedIndex = this.getProfileProjectAllottedIndex(
                this.currentProjectKey
            );
            return this.profileAllotted[profileAllottedIndex].airdrop ?? [];
        }
    }
    // persist: {
    //     enabled: true,
    //     strategies: [
    //         {
    //             key: 'user_projects',
    //             storage: localStorage,
    //             paths: ['projects']
    //         }
    //     ]
    // }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
}
