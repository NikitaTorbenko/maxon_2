import { createApp } from "vue"
import App from "app/App.vue"
import PrimeVue from "primevue/config"
import { createPinia } from "pinia"

const store = createPinia()

import "primevue/resources/themes/aura-light-green/theme.css"
import { router } from "app/routing"

createApp(App).use(PrimeVue).use(router).use(store).mount("#app")
