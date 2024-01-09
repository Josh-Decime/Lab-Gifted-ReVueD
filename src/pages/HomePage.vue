<template>
  <section class="row">
    <div v-for="gift in gifts" class="col-3">
      <GiftCard :giftProp="gift" />
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { giftService } from '../services/GiftService.js';
import GiftCard from '../components/GiftCard.vue';
export default {
  setup() {
    onMounted(() => {
      getGifts()
    });



    async function getGifts() {
      try {
        await giftService.getGifts()
      }
      catch (error) {
        Pop.error(error)
      }
    }




    return {
      gifts: computed(() => AppState.gifts),


    };
  },
  components: { GiftCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
