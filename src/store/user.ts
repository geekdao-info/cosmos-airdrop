import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '张三',
            age: 18,
            gender: '女'
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        }
    },
    getters: {
        fullName: (state) => {
            return state.name + '疯';
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user_persist_age',
                storage: sessionStorage,
                paths: ['age']
            },
            {
                key: 'user_persist_name',
                storage: localStorage,
                paths: ['name']
            }
        ]
    }
});
