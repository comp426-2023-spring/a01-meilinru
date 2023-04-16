var http = require('http');
var fs = require('fs');
var min = require('minimist')  
const args = min(process.argv.slice(2));
const port = args['port'] || 3000;
data = fs.readFile('./public/index.html', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
});	
const server = http.createServer((req, res) => {	
   	res.statusCode = 200;
   	res.setHeader('Content-Type', 'text/html');
    	res.end(data);	
});
server.listen(port, () => {
	console.log('Server listening on port ${port}');
})
