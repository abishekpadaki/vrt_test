var http = require('http');
var fs = require('fs');
var opn = require('opn');

const PORT=8000; 

fs.readFile('./test-report.html', function (err, html) {

    if (err) throw err;    
    opn('http://localhost:'+PORT); 
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
        console.log("Listening on "+PORT)
         
    }).listen(PORT);
});