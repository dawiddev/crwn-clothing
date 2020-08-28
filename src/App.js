import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import './App.css';
import Homepage from "./pages/homepage/homepage.component.jsx";
import Shop from './pages/shop/shop.component.jsx'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={Homepage}/>
        <Route exact={true} path='/shop/' component={Shop}/>
      </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
