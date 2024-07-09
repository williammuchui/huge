import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LayoutPage } from "./pages/Layout";
import {HomePage } from "./pages/Home";
import {AboutPage } from "./pages/About";
import {SignUpPage} from "./pages/SignUp";
import {LogInPage} from "./pages/LogIn";
import {ContactPage} from "./pages/Contact";
import {BlogsPage} from "./pages/Blogs";
import {NoPage} from "./pages/NoPage";

export function App(){
    return (
    <BrowserRouter basename="app">
        <Routes>
        <Route path="/" element={<LayoutPage/>}>
        <Route index element={<HomePage/>}/>
        <Route path="home" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="login" element={<LogInPage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="blogs" element={<BlogsPage/>}/>
        <Route path="*" element={<NoPage/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
    )
}
