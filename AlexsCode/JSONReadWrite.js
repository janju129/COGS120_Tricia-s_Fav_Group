'use strict'

//This function takes in a local JS file (hard coded currently)
//and parses it. Prints its contents out to console. 
function readJson()
{
    var fs=require('fs');
    var data=fs.readFileSync('data.json', 'utf8');
    var words=JSON.parse(data);
    for(var i = 0; i < words.table.length; i++){
        console.log(words.table[i].name + " " + words.table[i].message);
    }
}

readJson();

function writeJson()
{
    var fs = require('fs');
    var data=fs.readFileSync('data.json', 'utf8');
    var words=JSON.parse(data);
    var myData = {"name":"aaaa", "message":"going for a run in 5 minutes"};
    var jsonit = JSON.stringify(myData);
    words.table.push(jsonit);
    for(var i = 0; i < words.table.length; i++){
        console.log(words.table[i].name + " " + words.table[i].message);
    }
}

writeJson();