/* eslint-disable */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Firebase imports
import { auth } from '../main.js'
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('authStore', () => {

    const state = ref({
        user: null
    })

    const setState = computed((state, payload) => {
        state.user = payload
        console.log(state.user)
    })

    function googleSignIn() {
        console.log('Google');

        // let provider = new GoogleAuthProvider();
        
        // signInWithRedirect(auth, provider)
    }

    function facebookSignIn() {
        console.log('Facebook');
    }

    function twitterSignIn() {
        console.log('Twitter');
    }

    return { state, setState, googleSignIn, facebookSignIn, twitterSignIn }
})