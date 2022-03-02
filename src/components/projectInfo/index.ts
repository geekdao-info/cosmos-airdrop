import { defineAsyncComponent, App } from 'vue';
const components = import.meta.glob('./*.vue');
export default function install(app: App) {
    for (const [key, value] of Object.entries(components)) {
        const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
        app.component(name, defineAsyncComponent(value));
    }
}
