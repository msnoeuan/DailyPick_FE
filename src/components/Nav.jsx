// ./src/components/Nav.jsx
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.svg'
import { routes } from '../Routes/AppRoutes'
import { useNavigate } from 'react-router-dom'  // 버튼 라우팅을 위해

function Nav() {
    const navigate = useNavigate()

    return (
        <div className = 'grid grid-cols-3 items-center px-60 py-4'>
            <div className='justify-self-start'>
                <img src = {Logo} alt = '로고' className = 'h-8' />
            </div>

            <div className='flex justify-center gap-8'>
                {routes.map(r => {
                    if(r.inLink === true) {
                        return <Link className = 'text-textColor text-xs' key = {r.path} to = {r.path}>{r.label}</Link>
                    }
                })}
            </div>
            
            <div className='justify-self-end gap-2'>
                <button className = 'mx-1 h-[30px] w-[70px] border border-gray rounded-md' onClick={() => navigate ('/login')}>로그인</button>
                <button className = 'mx-1 h-[30px] w-[70px] bg-green text-white rounded-md' onClick={() => navigate('/register')}>회원가입</button>
            </div>
            
        </div>
    )
}

export default Nav