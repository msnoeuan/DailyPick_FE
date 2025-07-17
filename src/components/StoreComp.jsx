// ./src/components/Store.jsx
import { useStoreStore } from "../Stores/useStoreStore"
import Loc from '../assets/images/Loc.svg'
import Star from '../assets/images/Star.svg'
import EmptyHeart from '../assets/images/EmptyHeart.svg'
import FillHeart from '../assets/images/FillHeart.svg'
import {useState} from 'react'

function StoreComp() {
    const [liked, setLiked] = useState(false)
    const toggleLike = () => setLiked(liked => !liked)

    return (
        <div className="flex flex-col rounded-md bg-white w-85 h-95">
            <div className="relative w-full h-1/2">
                <img src= "" alt="" className="rounded-t-md w-full h-full bg-gray"/>
                <div className="absolute top-2 left-2 rounded-md w-10 bg-green z-10 flex justify-center">카페</div>
                <button onClick={toggleLike} className="absolute top-2 right-2">
                    <img  src = {liked ? FillHeart : EmptyHeart} />
                </button>
            </div>

            <div className="flex flex-col gap-2 items-start mx-5 my-5">
                <div className="font-bold">
                    가게명
                </div>
                <div className="flex gap-2">
                    <img src = {Star} alt = '평점' className = 'h-4' />
                    <span className="font-bold text-xs">4.5</span>
                </div>
                <div className="flex gap-2">
                    <img src = {Loc} alt = '위치' className = 'h-4' />
                    <span className="text-xs">위치</span>
                </div>
                <div>
                    <span className="font-bold text-green">10,000 ~ 25,000</span>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="rounded-md bg-white border border-gray w-xs h-8 font-bold">상세보기</button>
            </div>
        </div>
    )

}

export default StoreComp
