import React from 'react';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { GithubContextProvider } from './context/githubcontext';
import About from './components/About';
import SingleUserPage from './components/SingleUserPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='user/:login' element={<SingleUserPage/>}/>
    </Route>
  )
)
const App = () => {
  return (
    <GithubContextProvider>
      <RouterProvider router={router}/>
    </GithubContextProvider>
  );
}

export default App;
