import React from 'react';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProfilePreview from './views/ProfilePreview/ProfilePreview';
import NotAuthorized from './views/NotAuthorized/NotAuthorized';
import LoginForm from './views/LoginForm/LoginForm';
import Register from './views/RegisterForm/Register';
import Blogs from './views/Blogs/Blogs';
import MostInterestingBlogs from './views/MostInterestingBlogs/MostInteresting';
import News from './views/News/News';
import RegistrationSuccess from './views/RegistrationSuccess/RegistrationSuccess';
import Login from './views/Login/Login';
import RegisterPage from './views/RegisterPage/RegisterPage';
import NewBlog from './views/NewBlog/NewBlogForm';
import BlogPreview from './views/BlogPreview/BlogPreview';
import EditBlog from './views/EditBlog/EditBlog';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      { (location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/successful-registration" || location.pathname === "/notAuthorized") ? "" : <Navbar/>}
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/profile" element={ <ProfilePreview/> }/>
        <Route path="/notAuthorized" element={ <NotAuthorized/> }/>
        <Route path="/login-page-old" element={ <LoginForm/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/register-page-old" element={ <Register/> }/>
        <Route path="/register" element={ <RegisterPage/> }/>
        <Route path="/allblogs" element={ <Blogs/> }/>
        <Route path="/most-interesting-blogs" element={ <MostInterestingBlogs/> }/>
        <Route path="/news" element={ <News/> }/>
        <Route path="/successful-registration" element={ <RegistrationSuccess/> }/>
        <Route path="/new-blog" element={ <NewBlog/> }/>
        <Route path="/blog" element={<BlogPreview/>} />
        <Route path="/edit-blog" element={<EditBlog />} />
      </Routes>
      { (location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/successful-registration" || location.pathname === "/notAuthorized") ? "" : <Footer/>}
    </div>
  );
}

export default App;
