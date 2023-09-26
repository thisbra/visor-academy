import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz/:quizId">
              <Quiz />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
