// ./src/components/RegisterForm.jsx
import { Link } from "react-router-dom"

function RegisterForm() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex flex-col w-1/4 bg-white rounded-md py-10 pb-10 gap-5'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='text-xl font-bold'>회원가입</span>
                    <span className='text-textColor text-sm'>회원가입하여 맛집을 탐색해보세요</span>
                </div>
                
                <form action="" className='flex flex-col w-full justify-center items-center px-10 gap-4'>
                    <div className='flex flex-col w-full'>
                        <span>아이디</span>
                        <div className="flex w-full gap-2">
                            <input type="text" placeholder='아이디를 입력하세요' className='border border-gray rounded-md focus:outline-none flex-1' />
                            <button className="border border-gray rounded-md text-gray p-1">중복확인</button>
                        </div>
                    </div>

                    <div className='flex flex-col w-full pb-2'>
                        <span>비밀번호</span>
                        <input type="text" placeholder='비밀번호를 입력하세요' className='border border-gray rounded-md focus:outline-none' />
                    </div>

                    <div className='flex flex-col w-full pb-2'>
                        <span>비밀번호 확인</span>
                        <input type="text" placeholder='비밀번호를 다시 입력하세요' className='border border-gray rounded-md focus:outline-none' />
                    </div>

                    <div className='flex flex-col w-full pb-2'>
                        <span>비밀번호</span>
                        <input type="text" placeholder='아이디를 입력하세요' className='border border-gray rounded-md focus:outline-none' />
                    </div>

                    <div className='flex flex-col w-full pb-2'>
                        <span>학교 이메일</span>
                        <div className="flex w-full gap-2">
                            <input type="text" placeholder='example@university.ac.kr' className='border border-gray rounded-md focus:outline-none flex-1' />
                            <button className="border border-gray rounded-md text-gray p-1">인증발송</button>
                        </div>
                    </div>

                    <div className='flex flex-col w-full pb-2'>
                        <span>인증번호 확인</span>
                        <div className="flex w-full gap-2">
                            <input type="text" placeholder='인증번호를 입력하세요' className='border border-gray rounded-md focus:outline-none flex-1' />
                            <button className="border border-gray rounded-md text-gray p-1">인증확인</button>
                        </div>
                    </div>

                    <div className='w-full pd-5'>
                        <button className='bg-green rounded-md text-white w-full p-2'>
                            회원가입
                        </button>
                    </div>
                </form>

                <div className='flex flex-row justify-center'>이미 계정이 있으신가요?<Link to = "/login" className='text-green'>로그인</Link></div>
            </div>

            

        </div>
    )
}

export default RegisterForm