const dash_button = require('node-dash-button');
const applescript = require('applescript');
 
console.log("Listening " + process.env.MAC_ADDRESS + " ...");
let dash = dash_button(process.env.MAC_ADDRESS, null, 5000, 'udp');
dash.on("detected", function (){
	console.log("Getting current track id ...");
	let script = 'tell application "Spotify" to return id of current track';
	applescript.execString(script, function(err, rtn) {
		if (err) {
			console.log(err);
		} else {
			console.log(rtn);
		}
	});
});
 