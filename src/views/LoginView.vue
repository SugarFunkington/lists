<template>
  <div class="container">
    <form>
      <!-- Display Name -->
      <div class="field">
        <label for="display-name" class="label">What should we call you?</label>
        <div class="control has-icons-left">
          <input class="input" type="text" placeholder="Display name" id="display-name"/>
          <span class="icon is-small is-left">
            <font-awesome-icon icon="fa-solid fa-user-astronaut"/>
          </span>
        </div>
      </div>
     
      <!-- Email -->
      <div class="field">
        <label for="email" class="label">Email</label>
        <div class="control has-icons-left">
          <input class="input" type="email" placeholder="someone@email.com" id="email"/>
          <span class="icon is-small is-left">
            <font-awesome-icon icon="fa-solid fa-at"/>
          </span>
        </div>
      </div>
      
      <!-- Password -->
      <div class="field">
        <label for="password" class="label">Password</label>
        <div class="control has-icons-left">
          <input class="input" type="password" placeholder="We won't tell anyone!"/>
          <span class="icon is-small is-left">
            <font-awesome-icon icon="fa-solid fa-lock"/>
          </span>
        </div>
      </div>
  
      <!-- Submit -->
      <div class="field">
        <div class="control">
          <button class="button is-link">Get started</button> 
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  components: {
    
  }
}
</script>
