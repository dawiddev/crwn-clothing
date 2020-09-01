import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import './App.css';
import Homepage from "./pages/homepage/homepage.component.jsx";
import Shop from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "./firebase/firbase.utils";


class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user);
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
         <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={Homepage}/>
          <Route exact={true} path='/shop/' component={Shop}/>
          <Route exact={true} path='/signIn' component={SignInAndSignUp}/>
        </Switch>
        </BrowserRouter>
       </div>
    
  )
}
}

export default App;
