import socketIOClient from 'socket.io-client';

import { baseURL } from './baseURL.json';

//const socket = socketIOClient(baseURL);

const socket =  socketIOClient(BASE_URL, {
    secure: true,
    transports: ['websocket'],
  });

export default socket;