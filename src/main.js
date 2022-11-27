import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('@/assets/main.scss')

//  FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faLock, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

library.add(faAt, faLock, faUserAstronaut)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
