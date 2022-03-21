import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";

Vue.config.productionTip = false;

// Register elements globally
const modules = import.meta.glob("./elements/*.vue");

for (const path in modules) {
  modules[path]().then((module) => {
    Vue.component(module.default.name, module.default);
  });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
