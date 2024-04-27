import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Home from './pages/home';
import Header from './components/navigation';


const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
