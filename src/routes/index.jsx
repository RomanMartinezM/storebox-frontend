import { useRoutes } from 'react-router-dom';
import AuthRoutes from '../features/Auth/routes';

// Define your routes as an array of route objects
const AppRoutes = [
    ...AuthRoutes,
];

const AppRouter = () => {
    return useRoutes(AppRoutes);
}

export default AppRouter;
