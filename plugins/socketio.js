import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
//import socketio from 'socket.io';
Vue.use(VueSocketio, 'ws://localhost:7000');

//export const SocketInstance = socketio('ws://echo.websocket.org');

//Vue.use(VueSocketio, SocketInstance)