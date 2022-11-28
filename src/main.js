import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('@/assets/main.scss')

//  FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faLock, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

library.add(faAt, faLock, faUserAstronaut)

// Firebase Initialization
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8mRfV8sYlZ-uovQRWNKVPilGl_sOLVAM",
  authDomain: "listit-437fb.firebaseapp.com",
  projectId: "listit-437fb",
  storageBucket: "listit-437fb.appspot.com",
  messagingSenderId: "985369070662",
  appId: "1:985369070662:web:b750edc56a03739e088e47",
  measurementId: "G-FRYD1W0NWJ",
  databaseURL: "https://listit-437fb-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
