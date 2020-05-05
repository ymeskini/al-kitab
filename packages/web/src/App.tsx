import { useRoutes } from 'react-router-dom';
import { routes } from './shared/infra/router/routes';

export const App = () => useRoutes(routes);
