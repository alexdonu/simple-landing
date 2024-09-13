import { createRouter, createWebHistory } from "vue-router";
import AggregatedLanding from "../components/pages/AggregatedLanding.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AggregatedLanding,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/login/LoginView.vue"),
    },
    {
      path: "/secret",
      name: "secret",
      component: () => import("../components/login/SecretView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      getAuth(),
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, _from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You must be logged in to see this page");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
