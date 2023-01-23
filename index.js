


//task one

/*let fs = require('fs');

fs.writeFile('my_data.txt', 'Aziz Zulfikorov,1983', function(err){
    if (err) throw err;
    console.log("Saved");
});
*/



//task two 

/*
let fs = require('fs');

fs.writeFile('count.json', '{"count":0}', function(err){
    if(err) throw err;
    console.log('Saved');
});

fs.readFile('count.json', function(err, data){
    if(err) throw err
    console.log(JSON.parse(data));
})

fs.writeFile('count.json', '{"count":1}', function(err){
    if(err) throw err;
    console.log('Updated');
})

fs.readFileSync('count.json', function(err, data){
    if(err) throw err
    console.log(JSON.parse(data));
})*/


//task three

/*

let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);*/


//created another html file with some content 

let http = require('http');
let fs = require('fs');

fs.writeFile('index2.html', "<h1>Hello world!</h1>", function(err){
    if(err) throw err;
    console.log('Updated');
})

http.createServer(function(req,res){
    fs.readFile('index2.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
    
}).listen(8080);