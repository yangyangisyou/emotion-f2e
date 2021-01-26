import routePath from './config/routePath';
// import Canvas from './components/canvas';
import Home from './pages/home';
import Product from './pages/product';
import Edit from './pages/edit';
import { initialHomeData } from './actions/SSR';

const Routes = [
  {
    path: routePath.root,
    exact: true,
    component: Home,
    isSSRPage: true,
    initalData: (store, location, match) => initialHomeData(store, location, match),
  },
  {
    path: routePath.product,
    component: Product,
  },
  {
    path: routePath.edit,
    component: Edit,
  },
];

export default Routes;
