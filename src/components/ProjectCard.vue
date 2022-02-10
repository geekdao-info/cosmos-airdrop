<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
    icon: string;
    name: string;
    label: string[];
    snapDate: string;
    airdropDate: string;
    description: string;
    link: string;
    amount: number;
    loading?: boolean;
}>();
</script>

<template>
    <card class="card-bordered bg-base-100 border-2 hover:border-yellow-400">
        <div class="card-body">
            <div class="card-title flex items-center">
                <div class="avatar">
                    <div class="rounded-full w-10 h-10 ring ring-primary ring-offset-base-100">
                        <img :src="icon" />
                    </div>
                </div>
                <h4 class="ml-3">{{ name }}</h4>
            </div>

            <div class="mb-2 space-x-2 card-actions">
                <badge v-for="item in label" :key="item" class="badge-ghost"> {{ item }}</badge>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-xs">快照时间</p>
                    <p class="text-yellow-500">{{ snapDate }}</p>
                </div>
                <div>
                    <p class="text-xs">空投时间</p>
                    <p class="text-yellow-500">{{ airdropDate }}</p>
                </div>
            </div>

            <p class="mt-2">{{ description }}</p>
            <div class="justify-end space-x-1 card-actions">
                <button v-if="loading" class="btn btn-outline btn-primary loading">loading</button>

                <div v-else>
                    <button v-if="amount" class="btn btn-primary">
                        <h3 class="text">{{ amount }}</h3
                        ><span class="ml-1">CLAIM</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-3 h-3 ml-1 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </button>
                    <button v-else class="btn btn-outline">
                        <span class="ml-1">not eligible > DETAIL</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-3 h-3 ml-1 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </card>
</template>

<style scoped></style>
