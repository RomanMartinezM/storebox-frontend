import SignUpView from "@/features/Auth/views/SignUpView";
import LoginView from "@/features/Auth/views/LoginView";

const AuthRoutes = [
    {
        path: "/signup",
        element: <SignUpView />,
    },
    {
        path: "/",
        element: <LoginView />,
    },
];

export default AuthRoutes;