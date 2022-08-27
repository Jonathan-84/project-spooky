import React from 'react';
//
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/home'
import Halloween from './pages/halloween'


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
<>
<Navbar />
<Switch>
         <Route exact path= {'/home'} component={Home}/>
         <Route exact path= {'/halloween'} component={Halloween}/>
         <Route render={() => <Redirect to={'/home'} />} />

</Switch>


</>

    
    </HashRouter>
  );
}

export default App;
