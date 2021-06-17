import {useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Auth from "store/auth";
import Api from 'utils/fetch';
import Home from 'components/Home';
import Explore from 'components/Explore';
import DashBoard from 'components/Dashboard';
import Header from 'components/Header';
import './App.scss';

function App() {
 const {setProfile} = useContext(Auth);


  useEffect(() => {
    (async () => {
    const user = await Api.currentUser();
      if(user){
        setProfile(user)
      }
    })();
  },[setProfile])


  return (
      <main>
        <Router>
          <Header/>
          <Switch>
            <div className="container">
              <Route exact path="/"><Home /></Route>
              <Route exact path="/explore"><Explore /></Route>
              <Route exact path='/dashboard'><DashBoard /></Route>
            </div>
            
          </Switch>
        </Router>
      </main>
  );
}

export default App;
