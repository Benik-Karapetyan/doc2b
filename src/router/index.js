import Vue from "vue";
import VueRouter from "vue-router";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        components: {
            header: AppHeader,
            default: () =>
                import(/* webpackChunkName: "home" */ "../pages/home/home"),
            footer: AppFooter,
        },
        children: [
            {
                path: "/statistics",
                name: "Statistics",
                component: () =>
                    import(
                        /* webpackChunkName: "statistics" */ "@/pages/home/sections/statistics"
                    ),
            },
            {
                path: "/action",
                name: "Action",
                component: () =>
                    import(
                        /* webpackChunkName: "action" */ "@/pages/home/sections/action"
                    ),
            },
            {
                path: "/document",
                name: "Document",
                component: () =>
                    import(
                        /* webpackChunkName: "document" */ "@/pages/home/sections/document"
                    ),
            },
        ],
    },
    {
        path: "/no-workspace",
        name: "NoWorkspace",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "noWorkspace" */ "../pages/noWorkspace"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/documents",
        name: "Documents",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "documents" */ "../pages/documents"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/organizations",
        name: "Organizations",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "organizations" */ "../pages/organizations"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: () =>
            import(/* webpackChunkName: "signIn" */ "../pages/signIn"),
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () =>
            import(
                /* webpackChunkName: "forgotPassword" */ "../pages/forgotPassword"
            ),
    },
    {
        path: "/new-password",
        name: "NewPassword",
        component: () =>
            import(
                /* webpackChunkName: "newPassword" */ "../pages/newPassword"
            ),
    },
    {
        path: "/sign-up",
        name: "SignUp",
        component: () =>
            import(/* webpackChunkName: "signUp" */ "../pages/signUp"),
    },
    {
        path: "/notifications",
        name: "Notifications",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "notifications" */ "../pages/notifications"
                ),
            footer: AppFooter,
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
