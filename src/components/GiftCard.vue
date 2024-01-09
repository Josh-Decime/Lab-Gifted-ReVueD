<template>
    <div class="gift-card">
        <p>{{ giftProp.tag }}</p>
        <img :src="giftProp.url" alt="gift image" @click="openGift(giftProp.id)">


    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Gift } from '../models/gift.js';
import { giftService } from '../services/GiftService.js';
import Pop from '../utils/Pop.js';
export default {
    props: { giftProp: { required: true, type: Gift } },
    setup(props) {

        async function openGift(id) {
            try {
                await giftService.openGift(id)
            } catch (error) {
                Pop.error(error)
            }
        }


        return {
            openGift,
        }
    }
};
</script>


<style lang="scss" scoped>
.gift-card {
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 4px;

    img {
        width: 100%;
    }
}
</style>