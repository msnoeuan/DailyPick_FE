// ./src/components/Footer.jsx
function Footer() {
    return (
        <div className="bg-[#101827] text-white ">
            <div className="h-80">
                <div className="grid grid-cols-4 h-full items-center">
                    <div className="justify-self-center flex flex-col gap-3">
                        <div className="font-bold text-xl">DailyPick</div>
                        <div>대학가 최고의 맛집 랭킹 플랫폼</div>
                    </div>
                    
                    <div className="justify-self-center flex flex-col gap-3">
                        <div className="font-bold text-xl">서비스</div>
                        <div>맛집 찾기</div>
                        <div>투표하기</div>
                        <div>친구관리</div>
                    </div>

                    <div className="justify-self-center flex flex-col gap-3">
                        <div className="font-bold text-xl">고객지원</div>
                        <div>맛집 찾기</div>
                        <div>문의하기</div>
                        <div>자주 묻는 질문</div>
                    </div>

                    <div className="justify-self-center flex flex-col gap-3">
                        <div className="font-bold text-xl">회사</div>
                        <div>회사소개</div>
                        <div>개인정보처리방침</div>
                        <div>이용약관</div>
                    </div>
                </div>
            </div>

            <div className="h-20 flex justify-center items-center">
                <div className="w-full h-full mx-30 border-t border-[#393941] flex justify-center items-center">
                    <div>@2025 DailyPick. All rights reserved.</div>
                </div>
            </div>
        </div>
        
    )
}

export default Footer