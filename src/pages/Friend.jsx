// ./src/pages/Friend.jsx
import {useState} from 'react'
import Nav from "../components/Nav"
import FriendTabBar from "../components/FriendTabBar"

function Friend() {
    const [activeTab, setActiveTab] = useState("list")

    return (
        <>
            <Nav />
            <div className="h-screen bg-bgYellow">
                <div  className = 'flex flex-col justify-center py-20 gap-5 px-120'>
                        <div className="text-2xl font-bold">친구 관리</div>
                        <div className="text-lg text-textColor">친구를 추가하고 함께 맛집을 탐험해보세요</div>
                        <FriendTabBar activeTab = {activeTab} setActiveTab = {setActiveTab} />
                </div>

                {activeTab === "list" && <div>친구목록</div>}
                {activeTab === "request" && <div>친구요청</div>}
                {activeTab === "add" && <div>친구추가</div>}
                
            </div>
        </>
    )

}

export default Friend