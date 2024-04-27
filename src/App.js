import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Home from './pages/home';
import Header from './components/navigation';


const App = () => {
  return (
    <>
          <Header />
      <Home />
    </>

  );
}

export default App;
