import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify';
import {Route, Redirect, Switch} from "react-router-dom";
import Movies from "./components/movies";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/common/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm'; 
import Logout from './components/logout';
import auth from './services/authService'
import ProtectedRoute from './components/common/protectedRoute';
import registerForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


class App extends Component {
state = {}


componentDidMount() {
  const user = auth.getCurrentUser();
  this.setState({user});
}
  render() {
    return (
      <React.Fragment>
<NavBar user= {this.state.user}/>
<ToastContainer />
      <main className="container">
        <Switch>
          <ProtectedRoute path="/movies/:id" component={MovieForm} />
          <Route path="/register" component={registerForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies" 
          render = {props => <Movies {...props} user={this.state.user} />}
          />
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect from="/" exact to="/movies"/>
          <Redirect to="/not-found" />
        </Switch>
          
        </main>
      </React.Fragment>
      
    );
  }
  
}

export default App;
