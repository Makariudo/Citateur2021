
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Home"
import DashBoard from './components/Dashboard'
import './App.css';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path='/dashboard'><DashBoard /></Route>
      </Switch>
    </Router>
  
  );
}

export default App;
