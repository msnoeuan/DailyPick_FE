// ./AppRoutes.jsx
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import Store from "../pages/Store"
import Friend from "../pages/Friend"
import Vote from "../pages/Vote"
import Login from '../pages/Login'
import Register from '../pages/Register'

export const routes = [
    {element: <Home />, path : "/", label : "홈", inLink : true},  
    {element: <Store />, path : "/store_id/", label : "맛집", inLink : true},
    {element: <Friend />, path : "/friend", label : "친구", inLink : true}, 
    {element: <Vote />, path : "/vote", label : "투표", inLink : true}, 
    {element: <Login />, path : "/login", label : "로그인", inLink : false}, 
    {element: <Register />, path : "/register", label : "회원가입", inLink : false}, 
]

function AppRoutes() {
    return (
        <Routes>
            {routes.map(r => (<Route key = {r.path} path = {r.path} element = {r.element} />))}
        </Routes>
    )
}

export default AppRoutes