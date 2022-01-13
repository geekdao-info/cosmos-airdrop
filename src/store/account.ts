import { acceptHMRUpdate, defineStore } from 'pinia';

export const accountStore = defineStore({
    id: 'account',
    state: () => {
        return {
            address: '0x11',
            remark: '备注',
            airdrop: 5100
        };
    },
    getters: {
        myAddress(state) {
            return 'my ' + state.address;
        }
    },
    actions: {
        setMark(airdrop: number) {
            this.remark = '1空投来了，空投数量：' + airdrop;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'pinia_address',
                storage: sessionStorage,
                paths: ['address', 'remark']
            }
        ]
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(accountStore, import.meta.hot));
}
