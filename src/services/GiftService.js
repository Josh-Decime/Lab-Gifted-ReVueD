import { AppState } from "../AppState.js";
import { giftApi } from "./AxiosService.js";
import { api } from "./AxiosService.js";
import { Gift } from "../models/gift.js";



class GiftService {

    async getGifts() {
        console.log('🫴🎁')
        const response = await api.get('api/gifts')
        console.log('📡🫴🎁', response)
        // console.log('reading data', response.data)
        AppState.gifts = response.data.map(gift => new Gift(gift))
    }

    async openGift(id) {
        // console.log('id:', id)
        let foundGift = AppState.gifts.find(gift => gift.id == id)
        // if (!foundGift.opened)
        foundGift.opened = true
        console.log('🎁 open gift', foundGift)
        const response = await api.put(`api/gifts/${id}`, foundGift)
        console.log('response data:', response.data)
        this.getGifts()
    }


}

export const giftService = new GiftService()