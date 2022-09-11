const request = require('request-promise');
const cheerio = require('cheerio');

var v = [];
var a = {};

function addItem(key,value){
    a[key] = a[key] || [];
    a[key].push(value);
}

request("https://kanpur.indiaicpc.in/?page_id=680",(error,res,html) => {
    if(!error && res.statusCode == 200){
        const $= cheerio.load(html);
        var x = $(".tg-efa0");
        var temp = [];
        x.each((i,data) => {
            temp.push($(data).text());
        });
        x = $(".tg-c3ow");
        x.each((i,data) => {
            temp.push($(data).text());
        });
        for(var i=0;i<temp.length;i += 2){
            v.push({name: temp[i], college: temp[i+1]});
        }
        for(var i=0;i<v.length;i++){
            addItem(v[i].college,v[i].name);
        }
        console.log(a);
    }
});

