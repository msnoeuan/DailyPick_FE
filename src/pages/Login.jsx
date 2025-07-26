// ./src/pages/Login.jsx
import Logo from '../assets/images/Logo.svg'
import Nav from "../components/Nav"
import LoginForm from "../components/LoginForm"

function Login() {
    return (
        <>
            <Nav />
            <div className="h-screen bg-bgYellow">
                <div  className = 'flex justify-center py-8'>
                    <img src = {Logo} alt = '로고' className='w-20'/>
                </div>
                
                <div>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Login