// ./src/components/LoginForm.jsx
import { Link } from 'react-router-dom'
import {useState} from 'react'
import ShowPwd from '../assets/images/ShowPwd.svg'
import HidePwd from '../assets/images/HidePwd.svg'

function LoginForm() {
    const [showPwd, setShowPwd] = useState(false)
    const togglePwd = () => setShowPwd(!showPwd)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex flex-col w-1/4 bg-white rounded-md py-10 pb-30 gap-5'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='text-xl font-bold'>로그인</span>
                    <span className='text-textColor text-sm'>로그인하여 맛집을 탐색해보세요</span>
                </div>

                <form action="" className='flex flex-col w-full justify-center items-center px-10'>
                    <div className='flex flex-col w-full pb-5'>
                        <span>아이디</span>
                        <input type="text" placeholder='아이디를 입력하세요' className='border border-gray rounded-md focus:outline-none' />
                    </div>

                    <div className='flex flex-col w-full pb-2'>
                        <span>비밀번호</span>
                        <div className='border border-gray rounded-md flex'>
                            <input type={showPwd ? "text" : "password"}  placeholder='비밀번호를 입력하세요' className='focus:outline-none flex-1' />
                            <button type="button" onClick={togglePwd} className='px-3'>{showPwd ? <img src = {ShowPwd} /> : <img src = {HidePwd} />}</button>
                        </div>
                    </div>

                    <div className='w-full pb-5'>
                        <input type="checkbox" />
                        <span>로그인 상태 유지</span>
                    </div>

                    <div className='w-full'>
                        <button className='bg-green rounded-md text-white w-full p-2'>
                            로그인
                        </button>
                    </div>
                </form>

                <div className='flex flex-row justify-center items-center gap-2 px-10'>
                    <div className='flex-grow border-t border-gray'></div>
                    <span className='text-gray text-xs'>또는</span>
                    <div className='flex-grow border-t border-gray'></div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2'>
                    <Link to = "" className='text-green'>아이디 찾기</Link>
                    <span className='text-gray'>|</span>
                    <Link to = ""  className='text-green'>비밀번호 찾기</Link>
                </div>

                <div className='flex flex-row justify-center'>계정이 없으신가요? <Link to = "/register" className='text-green'>회원가입</Link></div>
            </div>
        </div>
    )

}

export default LoginForm