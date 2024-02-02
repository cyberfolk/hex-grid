import { createApp } from 'vue'
import './assets/styles/general.scss'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).mount('#app')

if (CSS.paintWorklet) {
    CSS.paintWorklet.addModule('./src/assets/js/polygon-border.js');
} else {
    alert("Your browser cannot run this demo. Consider Chrome or Edge instead")
}
