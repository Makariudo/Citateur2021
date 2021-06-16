import {useEffect, useContext, useCallback} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Store from "./store"
import Api from 'utils/fetch'
import Home from "./components/Home/index."
import DashBoard from './components/Dashboard/Dashboard'
import Header from './components/Header'
import './App.scss';

function App() {
  
const {setCitations, toggleLoading} = useContext(Store);

 const fetchCitation = useCallback(async() => {
    const citation = await Api.fetchCitations();
    toggleLoading();
    console.log(citation);
    setCitations([citation])
 })

 useEffect(()=>{
   fetchCitation();
 },[])




  return (
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
  );
}

export default App;
