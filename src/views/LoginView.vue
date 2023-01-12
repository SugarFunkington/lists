<template>
  <div class="container p-2">

    <!-- Google -->
    <button class="button is-fullwidth is-rounded mt-4" @click="store.googleSignIn">
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

    <!-- Email -->
    <router-link to="/email">
      <button class="button is-fullwidth is-rounded mt-4">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-envelope"/>
        </span>
        <span>
          Continue with Email
        </span>
      </button>
    </router-link>

  </div>

  <button class="button is-rounded" @click="store.checkUser">Check User</button>
  <button class="button is-rounded" @click="store.accountSignOut">Signout</button>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from "@/store/useAuth"

const store = useAuthStore()

onMounted(() => {
  store.getGoogleRedirectResult()
})

</script>