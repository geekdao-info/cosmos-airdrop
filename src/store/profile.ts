import { acceptHMRUpdate, defineStore } from 'pinia';
import { Profile } from '@/types/types';
export const useProfileStore = defineStore({
    id: 'profile',
    state: () => {
        const profiles = [
            {
                key: 123456,
                name: 'geekdao',
                address: [
                    'osmo1gc4vc76uzta0uar2kw2kxygcqpp86nuex6l9py',
                    'cosmos1gc4vc76uzta0uar2kw2kxygcqpp86nuewpv4hk'
                ]
            }
        ] as Profile[];
        return {
            profiles,
            currentProfileKey: 0
        };
    },
    getters: {
        currentProfile: (state) => {
            return state.profiles.find((e) => e.key === state.currentProfileKey);
        },
        currentProfileIndex: (state) => {
            return state.profiles.findIndex((e) => e.key === state.currentProfileKey);
        }
    },
    actions: {
        setCurrentProfileKey(index: number) {
            this.currentProfileKey = index;
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
