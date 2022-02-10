<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store/user';
import { accountStore } from '../store/account';
const userStore = useUserStore();
defineProps<{ msg: string }>();
const count = ref(0);
const onBlur = function (e: any) {
    userStore.updateName(e.target.value);
};
const accountPinia = accountStore();
const setMark = function (e: any) {
    accountPinia.setMark(e.target.value);
    console.log(accountPinia.airdrop);
};
</script>

<template>
    <div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
        <Card class="col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
            <div class="card-body">
                <h2 class="my-4 text-4xl font-bold card-title">Top 10 UI Components</h2>
                <div class="mb-4 space-x-2 card-actions">
                    <Badge class="badge-ghost">Colors</Badge>
                    <Badge class="badge-ghost">UI Design</Badge>
                    <Badge class="badge-ghost">Creativity</Badge>
                </div>
                <p
                    >Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
                    necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p
                >
                <div class="justify-end space-x-2 card-actions">
                    <Button classes="btn-primary">Login</Button>
                    <Button classes="">Register</Button>
                </div>
            </div>
        </Card>
    </div>
    <button class="btn btn-primary">daisyUI Button</button>

    <h1 class="text-3xl font-bold underline"> Hello world! </h1>
    <h1>Hello Vue 3 + TypeScript + Vite</h1>
    <h1>{{ userStore.fullName }}</h1>
    <h1>{{ accountPinia.remark }}</h1>
    <input
        type="number"
        id="airdrop"
        name="airdrop"
        :value="accountPinia.airdrop"
        @blur="setMark"
    />
    <input type="text" id="name" name="name" @blur="onBlur" />

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
