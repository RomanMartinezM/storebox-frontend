import SignUpView from "../views/SignUpView";
import LoginView from "../views/LoginView";

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