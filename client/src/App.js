import {useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Auth from "store/auth";
import Api from 'utils/fetch';
import Snackbar from 'components/Snackbar'
import Example from 'components/Example';
import Explore from 'components/Explore';
import DashBoard from 'components/Dashboard';
import Header from 'components/Header';
import Search from 'components/Search';
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
          <Snackbar />
          <Header/>
          <Search />
          <Switch>
            <div className="container">
              <Route exact path="/"><Example /></Route>
              <Route path="/explore/:mot"><Explore /></Route>
              <Route exact path='/dashboard'><DashBoard /></Route>
            </div>
            
          </Switch>
        </Router>
      </main>
  );
}

export default App;
