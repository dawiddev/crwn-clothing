import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import './App.css';
import Homepage from "./pages/homepage/homepage.component.jsx";
import Shop from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Header />
      <Switch>
        <Route exact={true} path='/' component={Homepage}/>
        <Route exact={true} path='/shop/' component={Shop}/>
      </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
