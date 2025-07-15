// ./src/components/Store.jsx
import { useStoreStore } from "../../Stores/useStoreStore"
import Loc from '../assets/images/Loc.svg'
import Star from '../assets/images/Star.svg'

function StoreComp() {
    const title = useStoreStore(state => state.title)
    const rating = useStoreStore(state => state.rating)
    const loc = useStoreStore(state => state.loc)
    const price_range = useStoreStore(state => state.title)

    return (
        <div className="flex flex-col rounded-md bg-white w-85 h-95">
            <img src= "" alt="이미지" className="rounded-t-md w-full h-1/2 bg-gray"/>

            <div className="flex flex-col gap-2 items-start mx-8 my-4">
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
