const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:3002');

socket.onopen = () => {
  console.log('WebSocket connection established.');
};

socket.onmessage = (event) => {
  console.log('Received message:', event.data);
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

socket.onclose = () => {
  console.log('WebSocket connection closed.');
};

module.exports = socket;
