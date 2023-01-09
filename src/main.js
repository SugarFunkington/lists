import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('@/assets/main.scss')

//  FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faLock, faUserAstronaut, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faAt, faLock, faUserAstronaut, faArrowRight, faGoogle, faFacebook, faTwitter)

// Firebase Initialization
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getDatabase(app);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
