import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const createRouter = () =>
  new VueRouter({
    routes: [
      {
        path: "/",
        component: () => import("@/views/Home.vue"),
        redirect: {
          name: "welcome",
        },
        children: [
          {
            path: "/welcome",
            name: "welcome",
            component: () => import("@/components/Welcome.vue"),
          },

          {
            path: "/homepage",
            name: "homepage",
            component: () => import("@/components/HomePage.vue"),
          },
        ],
      },
    ],
  });

const router = createRouter();
export default router;
