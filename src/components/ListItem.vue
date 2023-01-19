<template>
    <div class="card" @click="toggleSelected()">
        <div class="card-content">
            <div class="content">
                <div class="columns is-mobile">
                    <div class="column is-10">
                        <h3>{{ props.header }}</h3>
                        <p>{{ props.subheader }}</p>
                    </div>
                    <div class="column is-2">
                        <input type="checkbox" :id="props.id" v-model="check.state"/>
                        {{ check.state }}
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
import { defineProps, reactive } from 'vue'

const props = defineProps({
    header: String,
    subheader: String,
    done: Boolean,
    id: Number
})

let check = reactive({
                state: props.done
            });


function toggleSelected() {
   check.state = !check.state
}

</script>

<style scoped>
.card {
    margin-bottom:24px;
}
</style>