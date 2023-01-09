<template>
    <div class="field">
        <label for="password" class="label">Password</label>
        <div class="control has-icons-left">
          <input class="input" type="password" placeholder="Shh we won't tell..." id="password" name="password" v-model="value" @keyup="checkValidity(value)"/>
          <span class="icon is-small is-left">
            <font-awesome-icon icon="fa-solid fa-lock"/>
          </span>
        </div>
      </div>
      <p class="help" :class="{'is-success': validation.minChars}">Minimum 8 characters</p>
      <p class="help" :class="{'is-success': validation.num}">Includes at least 1 number</p>
      <p class="help" :class="{'is-success': validation.uppercase}">Includes at least 1 uppercase letter</p>
      <p class="help" :class="{'is-success': validation.specialChar}">Includes at least 1 special character </p>
      <p class="help is-danger">{{errorMessage}}</p>
</template>

<script>
export default {
    name: 'PasswordSignupInput'
}
</script>

<script setup>
/* eslint-disable */
import { reactive } from 'vue';
import { useField } from 'vee-validate';

const { errorMessage, value } = useField('password');

// Function on key input that checks validation
// For text + email, only validate on blur
// For password, validate on keypress
// (Check Vee-validate handlers for this?) Function that checks 3 validations: length, uppercase, symbol
// Returns object {length: true, uppercase: false, symbol: false}
// Use v-if with returned object to show validation
// Use v-if type=password to show all validation
// Continue to use vee-validate on inputs for form submission
// Need to show PW validation as errors on submit

const validation = reactive({
    minChars: false,
    num: false,
    uppercase:false,
    specialChar:false
})

const checkValidity = (value) => {
    validation.minChars = (value.length >= 8)
    validation.num = /^.*[0-9].*$/.test(value)
    validation.uppercase = /^.*[A-Z].*$/.test(value)
    validation.specialChar = /^.*[$&+,:;=?@#|'<>.\-^*()%!].*$/.test(value)
}

</script>


