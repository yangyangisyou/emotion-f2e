import { Route, Redirect, withRouter } from 'react-router-dom';
import Routes from './Routes';
import SEORoute from './shared/SEORoute';

const App = () => Routes.map((route, key) => {
  // match, location, history
  // console.log('match ', match);
  // console.log('location ', location);
  // console.log('history ', history);
  const {
    path, exact, component, initalData, isSSRPage, shouldRedirectPage
  } = route;
  if (isSSRPage) {
    return <SEORoute key={ key } path={ path } exact={ exact } component={ component } initalData={ initalData } />;
  } if (shouldRedirectPage) {
    return <Redirect from={ path } to="/" />;
  } else {
    return <Route key={ key } path={ path } exact={ exact } component={ component } />;
  }
});

export default withRouter(App);
