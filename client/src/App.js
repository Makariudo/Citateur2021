import {createContext} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import store from "./store"
import Home from "./components/Home/index."
import DashBoard from './components/Dashboard/Dashboard'
import Header from './components/Header'
import './App.scss';

const Store = createContext(store);

function App() {

  return (
    <Store.Provider value={store}>
      <main>
      <Router>
        <Header/>
      <Switch>
        <div className="container">
          <Route exact path="/"><Home /></Route>
          <Route exact path='/dashboard'><DashBoard /></Route>
        </div>
      </Switch>
    </Router>
    </main>
    </Store.Provider>
    
  );
}

export default App;
