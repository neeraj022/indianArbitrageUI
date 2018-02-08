import config from '~/config'
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
//import socketio from 'socket.io';
// Vue.use(VueSocketio, 'ws://localhost:7000');
Vue.use(VueSocketio, config.SERVER_HOST);

//export const SocketInstance = socketio('ws://echo.websocket.org');

//Vue.use(VueSocketio, SocketInstance)