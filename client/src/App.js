import {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Store from "./store"
import Api from 'utils/fetch'
import Home from "./components/Home/index."
import DashBoard from './components/Dashboard/Dashboard'
import Header from './components/Header'
import './App.scss';

function App() {
  const {citations, setCitations} = useContext(Store);


  const setValue = () => {
   const citation = ["blabla","blabla2"];
   setCitations(citation);
  }

  useEffect(() => {
    Api.fetchCitations()
 },[])

  return (
      <main>
        <Router>
          <Header/>
          <button onClick={setValue}>click!</button>
          <h2>{citations[0]}</h2>
        <Switch>
          <div className="container">
            <Route exact path="/"><Home /></Route>
            <Route exact path='/dashboard'><DashBoard /></Route>
          </div>
        </Switch>
      </Router>
    </main>
    
  );
}

export default App;
