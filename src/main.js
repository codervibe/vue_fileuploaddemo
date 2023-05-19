import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-ui/lib/theme-chalk/index.css';

createApp(App).use(router).use(ElementPlus, { locale }).mount('#app')
