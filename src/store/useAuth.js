import { defineStore } from 'pinia'

// Firebase imports
import { auth } from '../main.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('authStore', () => {
    const state = ref({
        user: null
    })

    const setState = computed((state, payload) => {
        state.user = payload
        console.log(state.user)
    })

})