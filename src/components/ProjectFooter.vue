<script setup lang="ts">
import Contact from './Contact.vue';
components: {
    Contact;
}
</script>
<template>
    <footer class="p-4 footer bg-base-300 text-base-content footer-center">
        <div>
            <Contact />
            <div
                >Copyright © 2022 -
                <a class="link link-primary" target="_blank" href="https://geekDAO.info"
                    >geekDAO.info</a
                ></div
            >
            <p
                >Cosmos Drops is provided “as is”, at your own risk, and without warranty of any
                kind.</p
            >
        </div>
    </footer>
</template>
