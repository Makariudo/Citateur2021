import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { StoreProvider } from "./store"
import Api from 'utils/fetch'
import Home from "./components/Home/index."
import DashBoard from './components/Dashboard/Dashboard'
import Header from './components/Header'
import './App.scss';

function App() {
 
  useEffect(() => {
    Api.fetchCitations()
 },[])

  return (
    <StoreProvider>
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
    </StoreProvider>
    
  );
}

export default App;
