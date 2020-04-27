import socketIOClient from 'socket.io-client';

import { baseURL } from './baseURL.json';

//const socket = socketIOClient(baseURL);

const socket = socketIOClient(baseURL, {
    secure: true,
    transports: ['websocket'],
  });

export default socket;