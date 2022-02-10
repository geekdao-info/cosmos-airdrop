<template>
    <div class="card lg:card-side card-bordered">
        <div class="card-body">
            <h2 class="card-title">No Images</h2>
            <p
                >Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
                necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p
            >
            <div class="card-actions">
                <button class="btn btn-primary">Get Started</button>
                <button class="btn btn-ghost">More info</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('daisyUI — Cards demo');
const meta = ref([
    {
        hid: 'description',
        name: 'description',
        content: 'Tailwind CSS template example - Tailwind CSS sample'
    }
]);
</script>
