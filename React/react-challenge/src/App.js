import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import './App.css';
import { APIProvider } from './context/apiContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <APIProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/edit/:repositoryName">
              <Edit />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </APIProvider>
  );
}

export default App;
