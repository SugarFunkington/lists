
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Firebase imports
import { auth } from '../main.js'
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router/index.js'

export const useAuthStore = defineStore('authStore', () => {

    const state = ref({
        user: null
    })

    const setState = computed((payload) => state.value.user = payload)

    function googleSignIn() {
        let provider = new GoogleAuthProvider();

        signInWithRedirect(auth, provider);
    }
    
    function getGoogleRedirectResult() {
        getRedirectResult(auth)
            .then((result) => {
                console.log('3')
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                
                // The signed-in user info.
                const user = result.user;
                
                console.log(`Success: ${user}, Token: ${token}`);
                
                router.push('/home')
    
            }).catch((error) => {
                // Handle Errors here.
                console.log('4')
                console.log(error)
    
                const errorCode = error.code;
                const errorMessage = error.message;
    
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(`Error code: ${errorCode}, Message: ${errorMessage}, Credential: ${credential}`)
            });
    }

    function facebookSignIn() {
        console.log('Facebook');
    }

    function twitterSignIn() {
        console.log('Twitter');
    }

    function checkUser() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              console.log('signed in')
              const uid = user.uid;
              console.log(uid)
              // ...
            } else {
              // User is signed out
              // ...
              console.log('nope')
            }
          });
    }

    function accountSignOut() {
        signOut(auth).then(() => {
            console.log('signed out')
        })
    }

    return { state, setState, googleSignIn, facebookSignIn, twitterSignIn, checkUser, getGoogleRedirectResult, accountSignOut }
})