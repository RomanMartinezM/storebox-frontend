import { useRoutes } from 'react-router-dom';
import AuthRoutes from '../features/Auth/routes';
import HomeRoutes from '../features/Home/routes';

// Define your routes as an array of route objects
const AppRoutes = [
    ...AuthRoutes,
    ...HomeRoutes,
];

const AppRouter = () => {
    return useRoutes(AppRoutes);
}

export default AppRouter;
