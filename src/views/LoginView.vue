<template>
  <div class="container p-2">

    <!-- Google -->
    <button class="button is-fullwidth is-rounded mt-4">
      <span class="icon">
        <font-awesome-icon icon="fa-brands fa-google"/>
      </span>
      <span>
        Continue with Google
      </span>
    </button>

    <!-- FB -->
    <button class="button is-fullwidth is-rounded mt-4">
      <span class="icon">
        <font-awesome-icon icon="fa-brands fa-facebook"/>
      </span>
      <span>
        Continue with Facebook
      </span>
    </button>

    <!-- Twitter -->
    <button class="button is-fullwidth is-rounded mt-4">
      <span class="icon">
        <font-awesome-icon icon="fa-brands fa-twitter"/>
      </span>
      <span>
        Continue with Twitter
      </span>
    </button>

    <hr/>

    <form @submit.prevent="onSubmit">
      <!-- Email -->
      <TextInput type="email" label="Email" placeholder="someone@email.com" icon="at" name="email"/>

      <!-- Submit -->
      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary is-rounded">
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-arrow-right"/>
            </span>
          </button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
    name: "EmailLoginView",
    components: { TextInput }
}
</script>


<script setup>

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import TextInput from '@/components/TextInput.vue'

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