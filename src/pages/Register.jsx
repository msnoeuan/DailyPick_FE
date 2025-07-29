// ./src/pages/Register.jsx
import Logo from '../assets/images/Logo.svg'
import Nav from "../components/Nav"
import RegisterForm from '../components/RegisterForm'

function Register() {
    return (
        <>
            <Nav />
            <div className="h-screen bg-bgYellow">
                <div  className = 'flex justify-center py-8'>
                    <img src = {Logo} alt = '로고' className='w-20'/>
                </div>
                
                <div>
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}

export default Register
