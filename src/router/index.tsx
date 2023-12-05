// routes.ts
import { RouteObject } from 'react-router-dom';
import Home from '../page/Home';
import About from '../page/About';

// react router v6·路由配置
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <div>404</div>,
  }
];
export default routes;
