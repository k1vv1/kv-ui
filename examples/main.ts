import { createApp } from "vue";
import App from "./app.vue";
import router from "./router/index";

const app = createApp(App);
import kvui from "kv-ui";
app.use(router);
app.use(kvui);
app.mount("#app");
