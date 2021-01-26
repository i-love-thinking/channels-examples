import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNativeSock from 'vue-native-websocket-vue3'

// Correctly decide between ws:// and wss://
const wsScheme = window.location.protocol == 'https:' ? 'wss' : 'ws'
const wsPath = wsScheme + '://' + window.location.host + '/chat/stream/ws/'
createApp(App)
  .use(store)
  .use(router)
  .use(VueNativeSock, wsPath, { store: store, format: 'json' })
  .mount('#app')
