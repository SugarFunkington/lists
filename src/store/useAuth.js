
import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router/index.js'

export const useAuthStore = defineStore('authStore', () => {

    const auth = useFirebaseAuth()

    function googleSignIn() {
        let provider = new GoogleAuthProvider();

        signInWithRedirect(auth, provider);

        localStorage.setItem('user', 'Google');
    }
    
    function getGoogleRedirectResult() {
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                
                // The signed-in user info.
                const user = result.user;
                
                console.log(`Success: ${user}, Token: ${token}`);
                router.push('/home')
    
            }).catch((error) => {
                // Handle Errors here.
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
              const uid = user.uid;
              console.log(`Signed in: ${uid}`)
              // ...
            } else {
              // User is signed out
              // ...
              console.log('No user')
            }
          });
    }

    function accountSignOut() {
        signOut(auth).then(() => {
            localStorage.user = null
            router.push('/')
        })
    }

    return { googleSignIn, facebookSignIn, twitterSignIn, checkUser, getGoogleRedirectResult, accountSignOut }
})