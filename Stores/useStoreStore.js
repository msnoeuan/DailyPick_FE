// zustand 저장소
import {create} from 'zustand'

export const useStoreStore = create((set, get) => ({
    storeAll : [],
    

    title : "",
    rating : "",
    loc : "",
    price_range : ""

}))

