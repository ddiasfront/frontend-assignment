import "Styles/main.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "Components/App.vue";
import store from "./store";
import CompanyData from "./components/Pages/CompanyData.vue";

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

Vue.use(VueRouter);

const Foo = { template: "<div>foo</div>" };
const routes = [{ path: "/", component: CompanyData, name: `CompanyData` }];

const router = new VueRouter({
  mode: "history",
  routes: routes,
  base: `/`
});

// new Vue({
//   router,
//   store,
//   render: createElement => createElement(App),
//   el: "#app"
// });

new Vue({
  router,
  store,
  render: createElement => createElement(App)
}).$mount("#app");
