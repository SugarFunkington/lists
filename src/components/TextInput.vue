<template>
    <div class="field">
        <label :for="label" class="label">{{label}}</label>
        <div class="control has-icons-left">
          <input class="input" :type='type' :placeholder="placeholder" :id="label"/>
          <span class="icon is-small is-left">
            <font-awesome-icon :icon="('fa-solid fa-'+icon)"/>
          </span>
        </div>
      </div>
</template>

<script>
export default {
    name: 'TextInput'
}
</script>

<script setup>
/* eslint-disable */
// import { useField } from 'vee-validate';
import { defineProps } from 'vue';

const props = defineProps({
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
})
</script>


