<template>
    <div class="card" @click="toggleSelected()" :class="{done: check.state, 'focussed-item': focus.state}" :id="props.id">
        <div class="card-content">
            <div class="content">
                <div class="columns is-mobile is-vcentered">
                    <div class="column is-10" :class="{'text-strikethrough': check.state}">
                        <h3>{{ props.header }}</h3>
                        <p>{{ props.subheader }}</p>
                    </div>
                    <div class="column is-2">
                        <div class="round">
                            <input type="checkbox" :id="`checkbox-for-${props.id}`" v-model="check.state"/>
                            <label :for="`checkbox-for-${props.id}`"></label>
                        </div>
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

// eslint-disable-next-line
const props = defineProps({
    header: String,
    subheader: String,
    done: Boolean,
    id: String,
    inFocus: Boolean
})

let check = reactive({
                state: props.done
            });

let focus = reactive({
    state: props.inFocus
})


function toggleSelected() {
   check.state = !check.state
}

// eslint-disable-next-line
defineExpose({
    props, focus
})

</script>

<style scoped>
.card {
    margin-bottom:24px;
    transition: 0.2s linear;
}

.done {
    opacity:0.2;
}

.text-strikethrough {
    text-decoration: line-through;
}

.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

label {
    pointer-events: none;
}

.focussed-item {
    border:1px solid red;
    /* transform: scale(1.075); */
}
</style>