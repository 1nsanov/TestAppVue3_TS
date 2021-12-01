import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import router from './router'
import my from './plugins/myPlugin/plugin.my'
import localization from './plugins/localization/plugin.localization'
import jsonPlugin from './plugins/JsonPlugin/plugin.JsonPl'




const app = createApp(App).use(router)
// Регистрируем компоненты по уникальному названию файла
import registerComponents from "@/register-components";
registerComponents(app);
app.use(my, {});
app.use(localization, {})
app.use(jsonPlugin, {})


components(app)
app.mount('#app')