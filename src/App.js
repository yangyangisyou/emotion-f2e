import { Route } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <>
      {
        Routes.map(({
          path, exact, component: Component, getInitialData, ...rest
        }) => (
          <Route
            key={ path }
            path={ path }
            exact={ exact }
            render={ (props) => <Component getInitialData={ getInitialData } { ...props } { ...rest } /> }
          />
        ))
    }
    </>
  );
}

export default App;
