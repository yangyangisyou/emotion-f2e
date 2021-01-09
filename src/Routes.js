import routePath from './config/routePath';
// import Canvas from './components/canvas';
import Home from './pages/home';
import { initialHomeData } from './actions/SSR';

const Routes = [
  {
    path: routePath.root,
    exact: true,
    component: Home,
    isSSRPage: true,
    initalData: (store, location, match) => initialHomeData(store, location, match),
  },
  // {
  //   path: routePath.canvas,
  //   component: Canvas,
  // },
];

export default Routes;
