import { Home } from './pages/Home/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Authentication/Student/Login';
import Register from './pages/Authentication/Teacher/Register';
import { Navbar } from './NavBar/navbar';
import TeacherSearch from './pages/Web App/TeacherListing';
function App() {
  return (
    <Router>
      
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/auth' component={Login}/>
      <Route exact path='/teacherauth' component={Register}/>
      <Route exact path='/webapp' component={TeacherSearch}/>
      <Route path="*"  />
    </Switch>
 
  </Router>
  );
}

export default App;
