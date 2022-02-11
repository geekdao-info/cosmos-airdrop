import { acceptHMRUpdate, defineStore } from 'pinia';
import { Profile } from './types';
export const useProfileStore = defineStore({
    id: 'profile',
    state: () => {
        const profiles = [] as Profile[];
        return {
            profiles,
            currentProfileIndex: 0
        };
    },
    getters: {
        currentProfile: (state) => {
            return state.profiles[state.currentProfileIndex];
        },
        currentProfileKey: () => {
            return this.currentProfile?.key;
        },
        currentProfileName: () => {
            return this.currentProfile?.name;
        }
    },
    actions: {
        setCurrentProfileIndex(index: number) {
            this.currentProfileIndex = index;
        },
        addProfile(profile: Profile) {
            this.profiles.push(profile);
        },
        removeProfile(key: number) {
            this.profiles.splice(this.currentProfileIndex, 1);
        },
        addAddress(profileKey: number, address: string) {
            if (address.trim()) {
                this.profiles[this.currentProfileIndex]?.address.push(address.trim());
            }
        },
        removeAddress(addressIndex: number) {
            this.profiles[this.currentProfileIndex]?.address?.splice(addressIndex, 1);
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user_profiles',
                storage: localStorage,
                paths: ['profiles']
            }
        ]
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot));
}
