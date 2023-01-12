<template>
  <div>Home Page</div>
  <router-link to="/">
    <button>Back to login</button>
  </router-link>

  <button class="button is-primary" @click="logUser">Log current user</button>
</template>

<script setup>

const logUser = () => console.log('user')

</script>
