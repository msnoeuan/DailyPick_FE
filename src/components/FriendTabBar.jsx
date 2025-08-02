// ./src/components/FriendTabBar
import FriendList from '../assets/images/FriendList.svg'
import FriendRequest from '../assets/images/FriendRequest.svg'
import AddFriend from '../assets/images/AddFriend.svg'

function FriendTabBar({activeTab, setActiveTab}) {
    const tabs = [
        {
            id : "list",
            label : "친구 목록",
            icon : FriendList
        },
        {
            id : "request",
            label : "친구 요청",
            icon : FriendRequest
        },
        {
            id : "add",
            label : "친구 추가",
            icon : AddFriend
        },
    ]

    return (
        <div className="w-full bg-[#EBEBEC] grid grid-cols-3 border border-gray rounded-md">
            {tabs.map(tab => (
                <button 
                    key={tab.key} 
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex justify-center gap-2 border border-gray rounded-md my-0.5 ${activeTab === tab.id ? "bg-white" : "bg-[#EBEBEC]}"}`}
                >
                    <img src={tab.icon} />
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

export default FriendTabBar