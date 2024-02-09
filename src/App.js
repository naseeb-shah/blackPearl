
import { Provider } from 'react-redux';
import './App.css';
import RoutesPage from './routes/Routes';
import reduxStore from './store/reduxStore';

function App() {
  return (    <Provider store={reduxStore}>

  <RoutesPage></RoutesPage>
  </Provider>
  );
}

export default App;
