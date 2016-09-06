var options = {
   baseUrl: 'localhost:8080',
   path: '/socket',
   protocol: window.location.protocol === 'https:' ? 'wss:' : 'ws:'
};

var fullUrl = options.protocol + "//" + options.baseUrl + options.path;

window.ws = new WebSocket(fullUrl);

ws.onopen = function() {
   console.log('connection opened')
   ws.send('Message from the client. I\'m connected baby!');
}

ws.onclose = function() {
   console.log('connection closed')
}

ws.onmessage = function(msg) {
   console.log('msg: ', msg)
}

ws.onerror = function(e) {
   throw(e)
};
