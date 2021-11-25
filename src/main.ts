import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import router from './router'
import my from './plugins/myPlugin/plugin.my'

const app = createApp(App).use(router).use(router)
app.use(my, {});

components(app)
app.mount('#app')
app.use(router)