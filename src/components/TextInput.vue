<template>
    <div class="field">
        <label :for="label" class="label">{{label}}</label>
        <div class="control has-icons-left">
          <input class="input is-rounded" :type='type' :placeholder="placeholder" :id="label" :name="name" v-model="value"/>
          <span class="icon is-small is-left">
            <font-awesome-icon :icon="('fa-solid fa-'+icon)"/>
          </span>
        </div>
        <p class="help is-danger">{{errorMessage}}</p>
    </div>
</template>

<script>
export default {
    name: 'TextInput'
}
</script>

<script setup>

import { defineProps, toRef } from 'vue';
import { useField } from 'vee-validate';
// import * as yup from 'yup';

const props = defineProps({
    name: {
        type: String,
        required:true,
    },
    type: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    }
});


const nameRef = toRef(props, 'name');

const { errorMessage, value } = useField(nameRef);

</script>


