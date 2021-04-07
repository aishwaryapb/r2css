import Vue from "vue";
import VueMeta from "vue-meta";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import App from "./App.vue";

Vue.use(VueMeta);
Vue.component("PrismEditor", PrismEditor);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
