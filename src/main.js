import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons solid */
import { faHouseChimney, faUser,faNewspaper, faBookmark, faBars,faUsers,faBriefcase, faIdBadge, faPenRuler, faAt, faKey,faGear} from '@fortawesome/free-solid-svg-icons'

/* import specific icons regular */
import {faCircleUser,faMessage} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faHouseChimney, faUser,faNewspaper, faBookmark, faBars,faUsers, faBriefcase, faIdBadge, faPenRuler,faCircleUser, faAt,faMessage, faKey,faGear)

import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
