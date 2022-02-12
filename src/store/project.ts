import { acceptHMRUpdate, defineStore } from 'pinia';
import { AirdropInfo, Project } from '@/types/types';
import { projectList } from '@/utils/projectData';
import { useProfileStore } from './profile';

export const useProjectStore = defineStore({
    id: 'project',
    state: () => {
        const projects: Project[] = projectList.map((item) => {
            return {
                info: item,
                profileAllotted: [],
                airdropTotalAmount: 0
            };
        });
        return {
            projects,
            currentProjectKey: ''
        };
    },
    getters: {
        currentProject: (state) => {
            const index = state.projects.findIndex((e) => e.info.key === state.currentProjectKey);
            console.log('project store index', index);
            return state.projects[index];
        }
    },
    actions: {
        setCurrentProjectKey(key: string) {
            this.currentProjectKey = key;
        },
        setAirdropTotalAmount(projectKey: string, amount: number) {
            const index = this.projects.findIndex((e) => e.info.key === projectKey);
            this.projects[index].airdropTotalAmount = amount ?? 0;
        },
        ifProfileAllotted(projectIndex: number, profileKey: number, projectKey: string) {
            const findIndex = this.projects[projectIndex]?.profileAllotted?.findIndex(
                (e) => e.profileKey === profileKey && e.projectKey === this.currentProjectKey
            );
            return Number(findIndex);
        },
        setProfileAllotted(projectKey: string, airdropInfo: AirdropInfo[]) {
            const profileStore = useProfileStore();
            const currentProfileKey = profileStore?.currentProfile?.key ?? 0;
            const projectIndex = this.projects.findIndex((e) => e.info.key === projectKey);
            // 如果存在 [当前项目-当前Profile] 的查询结果，则不需要新增了
            const profileAllottedIndex = this.ifProfileAllotted(
                projectIndex,
                currentProfileKey,
                projectKey
            );
            if (profileAllottedIndex >= 0) {
                let airdrop =
                    this.projects[projectIndex].profileAllotted[profileAllottedIndex].airdrop ?? [];
                if (airdrop.length <= 0) {
                    airdrop = airdropInfo;
                }
            } else {
                this.projects[projectIndex]?.profileAllotted?.push({
                    profileKey: currentProfileKey ?? 0,
                    projectKey: projectKey,
                    checkTime: new Date().getTime(),
                    airdrop: airdropInfo
                });
            }
        },
        getProfileAllotted() {},
        getCurrentProfileProjectAirdropInfo() {
            const profileStore = useProfileStore();
            const currentProfileKey = profileStore?.currentProfile?.key;
            return (
                this.currentProject?.profileAllotted?.find(
                    (e) =>
                        e.profileKey === currentProfileKey &&
                        e.projectKey === this.currentProjectKey
                )?.airdrop ?? []
            );
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
