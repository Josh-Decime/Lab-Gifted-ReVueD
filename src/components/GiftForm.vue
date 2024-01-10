<template>
    <div class="component">
        <form @submit.prevent="">
            <div>
                <input required class="form-control" type="text" id="gift-tag" name="tag" minlength="3" maxlength="30"
                    placeholder="Your tag line here..">
            </div>
            <div>
                <input required class="form-control" type="url" minlength="3" maxlength="500"
                    placeholder="Your gift url...">
            </div>


        </form>


    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
export default {
    setup() {


        return {

        }
    }
};
</script>


<style lang="scss" scoped></style>