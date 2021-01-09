import { Route } from 'react-router-dom';
import Routes from './Routes';
import SEORoute from './components/SEORoute';

const App = () => Routes.map((route) => {
  const {
    path, exact, component, initalData, isSSRPage
  } = route;
  if (isSSRPage) {
    return <SEORoute key={ path } path={ path } exact={ exact } component={ component } initalData={ initalData } />;
  } else {
    return <Route key={ path } path={ path } exact={ exact } component={ component } />;
  }
});

export default App;
