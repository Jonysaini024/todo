
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import About from './pages/About';
import CreateTask from './pages/CreateTask';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';

import Navbar from './components/Navbar';

import Register from './auth/Register';
// import Login1 from './auth/Login1';
import Singup from './auth/Singup';
import { AuthProvider } from './auth/AuthContext';
import { TaskProvider } from './context/TaskContext';
import ProtectedRoute from './auth/ProtectedRoute';
import EditProfile from './pages/EditProfile';



function App() {
  return (
    <>
   
      <BrowserRouter>
        <AuthProvider>
          <TaskProvider>
                 <Navbar/>
    
      <Routes>
          <Route path='/' element={<Home />}>
            {/* <Route path='/Login' element={<Login1 />}></Route> */}
            <Route path='/Singup' element={<Singup />}></Route>
            <Route path='/Register' element={<Register />}></Route>
        </Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/task-list' element={<ProtectedRoute><TaskList/></ProtectedRoute>}></Route>
        <Route path='/create-task' element={<ProtectedRoute><CreateTask/></ProtectedRoute>}></Route>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
        <Route path='/editprofile' element={<ProtectedRoute><EditProfile/></ProtectedRoute>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>
          </TaskProvider>
          </AuthProvider>
      </BrowserRouter>
      </>
  );
}


export default App;
