import Login from "../pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Post from "../pages/Post/Post";
import Comments from "../pages/Comments/Comments";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/main" element={<Home/>}/> 
                <Route path="/posts/:id" element={<Comments/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router