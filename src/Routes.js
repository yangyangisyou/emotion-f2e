import routePath from './config/routePath';
// import Canvas from './components/canvas';
import Home from './pages/home';

const Routes = [
  {
    path: routePath.root,
    exact: true,
    component: Home,
  },
  // {
  //   path: routePath.root,
  //   component: Canvas,
  // },
];

export default Routes;
