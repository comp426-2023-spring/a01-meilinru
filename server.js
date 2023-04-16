const http = require('http');
var fs = require('fs');
var min = require('minimist')  
let args = min(process.argv.slice(2), {
		default: {
port: 8080
},
});
const port = args.port;

fs.readFile('./public/index.html', 'utf8', (err, data) => {
		if (err) {
		console.error(err);
		return;
		}
		console.log(data);	

		const server = http.createServer((req, res) => {	
				res.statusCode= 200;		
				res.setHeader('Content-Type', 'text/html');
				res.end(data);	
				});
		server.listen(port), () => {
		console.log('Server listening on port ${port}');
		});
});
