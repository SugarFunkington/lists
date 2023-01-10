<template>
    <router-link to="/">
        <button class="button is-primary is-rounded">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-arrow-left"/>
            </span>
        </button>
    </router-link>

    <form @submit.prevent="onSubmit">
      <!-- Email -->
      <TextInput type="email" label="Email" placeholder="someone@email.com" icon="at" name="email"/>
      <PasswordSignupInput />

      <!-- Submit -->
      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary is-rounded">
            <span>
                Continue
            </span>
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-arrow-right"/>
            </span>
          </button>
        </div>
      </div>
    </form>
</template>

<script>
export default {
    name: "EmailLoginView",
    components: { TextInput, PasswordSignupInput }
}
</script>

<script setup>

import TextInput from '@/components/TextInput.vue'
import PasswordSignupInput from '@/components/PasswordSignupInput.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'

// Validation schema
const schema = yup.object({
  email: yup.string().required().email('Email is required'),
});

useForm({
  validationSchema: schema,
});

// Handle form submissions
const { handleSubmit } = useForm({
  validationSchema: schema
});

function onInvalidSubmit({ values, errors, results }) {
  console.log(values);
  console.log(errors);
  console.log(results)
}

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
}, onInvalidSubmit)

</script>

