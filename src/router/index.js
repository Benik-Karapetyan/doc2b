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
    {
        path: "/received-documents",
        name: "ReceivedDocuments",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "receivedDocuments" */ "../pages/receivedDocuments"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/deleted-documents",
        name: "DeletedDocuments",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "deletedDocuments" */ "../pages/deletedDocuments"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/faq",
        name: "FAQ",
        components: {
            header: AppHeader,
            default: () => import(/* webpackChunkName: "faq" */ "../pages/FAQ"),
            footer: AppFooter,
        },
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "contactUs" */ "../pages/contactUs"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/settings",
        name: "Settings",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "settings" */ "../pages/settings/settings"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/personal-settings",
        name: "PersonalSettings",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "personalSettings" */ "../pages/settings/personalSettings"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/general-settings",
        name: "GeneralSettings",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "generalSettings" */ "../pages/settings/generalSettings"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/finances",
        name: "Finances",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "finances" */ "../pages/settings/finances"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/organizations-settings",
        name: "OrganizationsSettings",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "organizationsSettings" */ "../pages/settings/organizationsSettings"
                ),
            footer: AppFooter,
        },
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
        path: "/junior-applications",
        name: "JuniorApplications",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "juniorApplications" */ "../pages/juniorDesk/myApplications"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/admin-request-desk",
        name: "AdminRequestDesk",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "adminRequestDesk" */ "../pages/juniorDesk/adminRequestDesk"
                ),
            footer: AppFooter,
        },
    },
    {
        path: "/users",
        name: "Users",
        components: {
            header: AppHeader,
            default: () =>
                import(/* webpackChunkName: "users" */ "../pages/users"),
            footer: AppFooter,
        },
    },
    {
        path: "/custom-actions",
        name: "CustomActions",
        components: {
            header: AppHeader,
            default: () =>
                import(
                    /* webpackChunkName: "customActions" */ "../pages/customActions"
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
