<script setup lang="ts">
import { computed } from 'vue';
interface Props {
    iconClass: string;
    color?: string;
    size?: string;
    pointer?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    color: '#000000',
    size: '20px',
    pointer: false
});
const iconName = computed(() => `#icon-${props.iconClass}`);
</script>
<template>
    <svg
        class="svg-icon"
        aria-hidden="true"
        :style="{
            color: color,
            width: size,
            height: size,
            cursor: pointer ? 'pointer' : 'default'
        }"
    >
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<style>
.svg-icon {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
