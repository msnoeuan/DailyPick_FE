// ./src/components/Nav.jsx
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.svg'
import { routes } from '../Routes/AppRoutes'
import { useNavigate } from 'react-router-dom'  // 버튼 라우팅을 위해

function Nav() {
    const navigate = useNavigate()

    return (
        <div className = 'flex flex-row items-center px-20 py-4'>
            <img src = {Logo} alt = '로고' className = 'mr-auto ml-20' />

            <div className='mx-auto'>
                {routes.map(r => {
                    if(r.inLink === true) {
                        return <Link className = 'text-textColor mx-7 text-sm' key = {r.path} to = {r.path}>{r.label}</Link>
                    }
                })}
            </div>
            
            <div className='ml-auto mr-20'>
                <button className = 'mx-1 h-[30px] w-[70px] border border-gray rounded-lg' onClick={() => navigate ('/login')}>로그인</button>
                <button className = 'mx-1 h-[30px] w-[70px] bg-green text-white rounded-lg' onClick={() => navigate('/register')}>회원가입</button>
            </div>
            
        </div>
    )
}

export default Nav