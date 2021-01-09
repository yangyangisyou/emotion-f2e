import { Route } from 'react-router-dom';
import Routes from './Routes';

const App = () => Routes.map((route) => <Route key={ route.path } path={ route.path } exact={ route.exact } component={ route.component } />);

export default App;
