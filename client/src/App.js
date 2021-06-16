import {useEffect, useContext, useCallback} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Store, { StoreProvider } from "./store"
import Api from 'utils/fetch'
import Home from "./components/Home/index."
import DashBoard from './components/Dashboard/Dashboard'
import Header from './components/Header'
import './App.scss';

function App() {
  
const {citations, setCitation, setProfile, setNumber, toggleLoading} = useContext(Store);

 const fetchCitation = useCallback(async() => {
    const citation = await Api.fetchCitations();
    toggleLoading();
    console.log(citation);
    setCitation(citation);
 })
   ; 
  useEffect(() => {
    fetchCitation();
    setCitation({
      citation: "coucou",
      author: "argh",
      authorImg: 'dsljfhs'
    });
    handleNumber();
 },[fetchCitation])

const handleNumber = () => {
  console.log("handleNumber")
  setNumber(3)
}


  return (
    <StoreProvider>
      <main>
        <Router>
          <Header/>
          <button onClick={handleNumber}>click number</button>
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
