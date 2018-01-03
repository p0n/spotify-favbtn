var dash_button = require('node-dash-button');

console.log(process.env.MAC_ADDRESS);
var dash = dash_button(process.env.MAC_ADDRESS, null, 5000, 'udp');
dash.on("detected", function (){
	console.log("Hello, World!!");
});

