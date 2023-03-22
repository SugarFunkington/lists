import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'

require('@/assets/main.scss')

//  FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTags, faUserPlus, faPlus, faAt, faLock, faUserAstronaut, faArrowRight, faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTags,faUserPlus, faPlus, faAt, faLock, faUserAstronaut, faArrowRight, faArrowLeft, faEnvelope, faGoogle, faFacebook, faTwitter)

// Firebase Initialization
import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef } from "firebase/database";

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

const pinia = createPinia();

const firebaseApp = initializeApp(firebaseConfig);

export const db = getDatabase(firebaseApp);
export const todosRef = dbRef(db, 'todos')

createApp(App)
    .use(router)
    .use(pinia)
    .use(VueFire, {
      firebaseApp,
      modules: [
        VueFireAuth(),
      ],
    })
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
