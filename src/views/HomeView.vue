<template>
  <router-link to="/">
    <button class="button is-secondary" @click="store.accountSignOut()">Sign Out</button>
  </router-link>

  <button class="button is-primary" @click="store.checkUser()">Check user</button>

  <!-- <FullList /> -->

  <!-- Action Buttons -->
  <div class="columns is-gapless is-mobile is-centered action-buttons-container">
    <!-- Share -->
    <div class="column is-3 has-text-centered">
      <button class="button is-rounded secondary-action">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-user-plus"/>
        </span>
      </button>
    </div>
  
    <!-- Add item -->
    <div class="column is-3 has-text-centered">
      <button class="button is-rounded primary-action">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-plus"/>
        </span>
      </button>
    </div>
  
    <!-- Labels -->
    <div class="column is-3 has-text-centered">
      <button class="button is-rounded secondary-action">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-tags"/>
        </span>
      </button>
    </div>
  </div>

</template>

<script setup>
/* eslint-disable */
import { useAuthStore } from '@/store/useAuth'
import FullList from '@/components/FullList.vue'

const store = useAuthStore()



</script>

<style>
.primary-action {
  height:75px;
  width:75px;
}

.secondary-action {
  height:50px;
  width:50px;
  margin-top:25px;
}

.action-buttons-container {
  width:100%;
  position:fixed;
  bottom:50px;
}
</style>
