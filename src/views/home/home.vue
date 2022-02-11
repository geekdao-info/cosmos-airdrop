<script setup lang="ts">
import { ref } from 'vue';
import ProjectCardVue from '@/components/ProjectCard.vue';
import ProjectFooter from '@/components/ProjectFooter.vue';
import Icon from '@/components/Icon.vue';
components: {
    ProjectCardVue;
    ProjectFooter;
}
const projectList = ref([
    {
        icon: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        name: 'Top 10 UI Components',
        label: ['Colors', 'UI Design', 'Creativity'],
        snapDate: '2021-11-11',
        airdropDate: '2022-01-11',
        description:
            'Rerum reiciendis beatae tenetur eariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.',
        link: '',
        amount: 6666,
        loading: true
    },
    {
        icon: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        name: 'Top 10 UI Components',
        label: ['Colors', 'UI Design', 'Creativity'],
        snapDate: '2021-11-11',
        airdropDate: '2022-01-11',
        description:
            'Rerum reiciendissit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.',
        link: '',
        amount: 0,
        loading: true
    },
    {
        icon: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        name: 'Top 10 UI Components',
        label: ['Colors', 'UI Design', 'Creativity'],
        snapDate: '2021-11-11',
        airdropDate: '2022-01-11',
        description:
            'Rerum reiciendis beatae tenetur exceptatis sed molestiae voluptates incidunt iure sapiente.',
        link: '',
        amount: 6666,
        loading: false
    },
    {
        icon: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        name: 'Top 10 UI Components',
        label: ['Colors', 'UI Design', 'Creativity'],
        snapDate: '2021-11-11',
        airdropDate: '2022-01-11',
        description: 'Rerum reiciendis sed molestiae voluptates incidunt iure sapiente.',
        link: '',
        amount: 0,
        loading: false
    },
    {
        icon: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        name: 'Top 10 UI Components',
        label: ['Colors', 'UI Design', 'Creativity'],
        snapDate: '2021-11-11',
        airdropDate: '2022-01-11',
        description: 'Rerum reiciendisidunt iure sapiente.',
        link: '',
        amount: 6666
    },
    {
        icon: 'http://daisyui.com/tailwind-css-component-profile-1@56w.png',
        name: 'Top 10 UI Components',
        label: ['Colors', 'UI Design', 'Creativity'],
        snapDate: '2021-11-11',
        airdropDate: '2022-01-11',
        description:
            'Rerum reiciendist pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.',
        link: '',
        amount: 0
    }
]);
</script>
<template>
    <div>
        <div
            id="nav"
            class="flex justify-end items-center border-base-200 bg-base-100 text-base-content sticky inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b"
        >
            <div class="flex-none ml-6"><img width="200" src="../../assets/logo.png" /></div>

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

            <div class="navbar max-w-none">
                <div class="avatar placeholder">
                    <div class="text-neutral-content rounded-full w-8 h-8">
                        <span><icon icon-class="dark"></icon></span>
                    </div>
                </div>

                <div><icon icon-class="wb_sunny"></icon></div>
                <div class="dropdown dropdown-end" title="Change Theme">
                    <div tabindex="0" class="m-1 normal-case btn-ghost btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current md:mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                        </svg>
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
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="grid grid-cols-1 p-4 gap-4 max-w-6xl lg:grid-cols-3 lg:p-10 rounded-box">
                <project-card-vue
                    v-for="(item, index) in projectList"
                    :key="index"
                    :airdrop-date="item.airdropDate"
                    :snap-date="item.snapDate"
                    :amount="item.amount"
                    :icon="item.icon"
                    :description="item.description"
                    :label="item.label"
                    :name="item.name"
                    :link="item.link"
                    :loading="item.loading"
                ></project-card-vue>
            </div>
        </div>
        <project-footer></project-footer>
    </div>
</template>
