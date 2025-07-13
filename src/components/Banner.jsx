// ./src/components/Banner.jsx
import { IoIosSearch } from "react-icons/io"

function Banner() {
    return (
        <div className="bg-green h-55 flex flex-col items-center justify-center gap-6">
            <div className="text-white text-2xl font-bold">우리 학교 최고의 맛집을 찾아보세요</div>
            <div className="text-white text-xs">친구들과 함께 투표하고 리뷰하는 대학가 맛집 랭킹</div>

            <div className="flex bg-white border border-gray rounded-md w-md gap-2">
                <IoIosSearch className="w-6 h-6"/>
                <input placeholder="맛집을 검색해보세요" className="w-120"/>
            </div>
        </div>
    )

}

export default Banner