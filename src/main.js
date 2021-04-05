import Vue from "vue";
import App from "./App.vue";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

Vue.component("PrismEditor", PrismEditor);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
