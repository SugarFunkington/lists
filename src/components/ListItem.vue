<template>
    <div class="card" @click="toggleSelected()">
        <div class="card-content">
            <div class="content">
                <div class="columns is-mobile">
                    <div class="column is-10">
                        <h3>Order something new for the garden</h3>
                        <p>Better make it something nice!</p>
                    </div>
                    <div class="column is-2">
                        <input type="checkbox" id="checkbox" v-model="checked"/>
                        <label for="checkbox">{{ checked }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>

<script setup>
import { reactive } from 'vue'

let checked = reactive(true);
let selected = false;

function toggleSelected() {
    selected = !selected;
    console.log(selected)
}
</script>

<style scoped>
.card {
    margin-bottom:24px;
}
</style>