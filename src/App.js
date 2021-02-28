import './App.css';
import Navigation from './components/nav'
import Portfolio from './components/portolfio'
import Contact from './components/contact'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
