import { Home } from './pages/Home/home';
import React, { useEffect , useState} from 'react';
import { BrowserRouter,Route,Navigate, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Student/Login';
import Register from './pages/Authentication/Teacher/Register';
import TeacherSearch from './pages/Web App/TeacherListing';
import Product from './pages/Product/Product'
import Service from './services/HttpService';
import { NotFound } from './pages/404';
import { Chat } from './pages/Chat/Chat';
import StudentSearch from './pages/Web App/StudentListing';
function App() {
  var token = localStorage.getItem('auth');

  let user = token == null ? false:true;
  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element= {<Home/>} />
      <Route exact path='/auth' element={user? <Navigate to='/'/>:<Login/>}/>
      <Route exact path='/teacherauth' element={user? <Navigate to='/'/>:<Register/>}/>
      <Route exact path='/webapp' element={<TeacherSearch user={token}/>}/>
      <Route exact path='/students' element={<StudentSearch user={token}/>}/>
      <Route exact path='/product' element={<Product/>}/>
      <Route exact path='/chat' element={!user? <Navigate to='/'/>:<Chat user={token}/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
 
  </BrowserRouter>
  );
}

export default App;
