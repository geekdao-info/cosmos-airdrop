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
    <h1>Hello Vue 3 + TypeScript + Vite</h1>
    <h1>{{ userStore.fullName }}</h1>
    <h1>{{ accountPinia.myAddress }}</h1>
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
