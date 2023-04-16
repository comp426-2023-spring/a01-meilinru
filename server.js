var http = require('http');
var fs = require('fs');
var min = require('minimist')  
const args = min(process.argv.slice(2));
const port = args['port'] || 3000;
var data_copy;
fs.readFile('./public/index.html', 'utf8', (err, data) => {
		if (err) {
		console.error(err);
		return;
		}
		data_copy= data;
		})	
const server = http.createServer((req, res) => {	
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.end(data_copy);	
		})
server.listen(port);
console.log('Server listening on port ${port}');
