import Vue from "vue";
import VueRouter from "vue-router";

let lang_prefix = localStorage.getItem("active_language");
if (
  lang_prefix == null ||
  lang_prefix == "" ||
  lang_prefix == undefined ||
  lang_prefix == "undefined"
) {
  lang_prefix = "en";
}

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/modules/front/home/index"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/modules/front/auth/login-component"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/modules/front/auth/register-component"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/verify-sms",
    name: "VerifySMS",
    component: () => import("@/modules/front/auth/verification-component"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/verify-code",
    name: "VerifyCode",
    component: () => import("@/modules/front/auth/4-digit-code"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/mobile-number",
    name: "MobileNumber",
    component: () => import("@/modules/front/auth/mobile-number"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/create-business",
    name: "CreateBusiness",
    component: () => import("@/modules/front/create-business/create-business"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/modules/front/profile/index"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/profile/post-list",
    name: "ProfilePostList",
    component: () => import("@/modules/front/profile/post-list"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/get-tech-hunter",
    name: "GetTechHunter",
    component: () => import("@/modules/front/create-business/get-tech-hunter"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/become-tech-hunter",
    name: "BecomeTechHunter",
    component: () => import("@/modules/front/create-business/become-a-tech-hunter-pro"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/profile/promotion-list",
    name: "ProfilePromotionList",
    component: () => import("@/modules/front/profile/promotion-list"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/create-post",
    name: "PostAdvertisement",
    component: () => import("@/modules/front/create-business/create-post"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/create-promotion",
    name: "PostPromotion",
    component: () => import("@/modules/front/create-business/create-promotion"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/create-details",
    name: "CreateDetails",
    component: () => import("@/modules/front/create-business/create-details"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/business-documents",
    name: "BusinessDocuments",
    component: () => import("@/modules/front/create-business/business-documents"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/payment-process",
    name: "PaymentProcess",
    component: () => import("@/modules/front/create-business/payment-process"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@/modules/front/auth/logout-component"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("@/modules/front/auth/forgot-password"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/reset",
    name: "Reset",
    component: () => import("@/modules/front/auth/reset-password"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/modules/front/auth/forgot-password"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/search",
    name: "SearchList",
    component: () => import("@/modules/front/search/search-list"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/search-grid",
    name: "SearchGrid",
    component: () => import("@/modules/front/search/search-grid"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/search-map",
    name: "SearchMap",
    component: () => import("@/modules/front/search/search-map"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/single-page",
    name: "SinglePage",
    component: () => import("@/modules/front/single-service/single-service-component"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/promotion/single-page",
    name: "PromotionSinglePage",
    component: () => import("@/modules/front/single-service/promotion-single-service-component"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/all-posts",
    name: "AllPosts",
    component: () => import("@/modules/front/home/all-posts"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/all-promotions",
    name: "AllPromotions",
    component: () => import("@/modules/front/home/all-promotional-posts"),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/settings",
    name: "ProfileSettings",
    component: () => import("@/modules/front/profile/settings"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/why",
    name: "Why",
    component: () => import("@/modules/front/static-pages/why"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ads",
    name: "Advertisement",
    component: () => import("@/modules/front/static-pages/ads"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: () => import("@/modules/front/static-pages/contactus"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/modules/front/static-pages/about-us"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import("@/modules/front/static-pages/faq"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/modules/not_found")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

/**
 * Check Authenticated user
 */
// function is_authenticated() {
//   const token = localStorage.getItem("token");
//   if (token == "null" || token == null || token == "") {
//     return false;
//   } else {
//     return true;
//   }
// }
/**
 * Router Authentication Guard
 */
// router.beforeEach((to, from, next) => {
//   const withoutAuth = ["Login", "Forgot", "Reset"];
//   if (withoutAuth.includes(to.name) || !to.meta.requiresAuth) {
//     is_authenticated() ? next({ name: "Welcome" }) : next();
//   } else {
//     is_authenticated() ? next() : next({ name: "Login" });
//   }
// });
export default router;
