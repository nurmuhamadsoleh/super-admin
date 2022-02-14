import {LoginPage, RegisterPage, ForgotPasswordPage, ResetPassPage} from "../pages"

export const routes = [
    {
        path: '/login',
        component: LoginPage,
        name: 'login',
        layout: "/public"
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'login',
        layout: "/public"
    },
    {
        path: '/forgot-password',
        component: ForgotPasswordPage,
        name: 'forgot password',
        layout: "/public"
    },
    {
        path: '/reset-password',
        component: ResetPassPage,
        name: 'reset password',
        layout: "/public"
    },
]