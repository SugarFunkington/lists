<template>
  <div class="container p-2">
    <form @submit.prevent="onSubmit">
      
      <!-- Display Name -->
      <TextInput type="text" label="What should we call you?" placeholder="Display name" icon="user-astronaut"/>
     
      <!-- Email -->
      <TextInput type="email" label="Email" placeholder="someone@email.com" icon="at" />

      <!-- Password -->
      <TextInput type="password" label="Password" placeholder="Shhh we won't tell" icon="lock" />

      <!-- Submit -->
      <div class="field">
        <div class="control">
          <input type="submit" value="Get started" class="button is-link"/>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'EmailLoginView'
}

</script>

<script setup>
import TextInput from '../components/TextInput.vue'

function onSubmit() {
  console.log('Submitted');
}

</script>