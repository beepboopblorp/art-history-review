require('dotenv').config()
const http = require('http');
const apikey = process.env.API_KEY;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url == '/art') {
        fetchart(res);
    } else if (req.url == '/terms') {
        fetchterms(res);
    } else {
        res.end(JSON.stringify({message: "wrong url"}));
    }
});

server.listen(3000, 'localhost', () => {console.log("listening on port 3000");});

async function fetchart(res) {
    let baseurl = "https://api.airtable.com/v0/appdBUgtvIa4EvA6y/tblaaRZKkZSGAmEGk";
    let response = await fetch(baseurl, {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${apikey}`}});
    let data = await response.json();
    let art = [];
    let temp;

    for (let i=0; i < data.records.length; i++) {
        temp = data.records[i];
        art.push({'ID': temp.fields.ID, 'Name': temp.fields.Name, 'Date': temp.fields.Date, 'Material': temp.fields.Material, 'Culture': temp.fields.Culture, 'Image': temp.fields.Image, 'Artist': temp.fields.Artist});
    }

    while (data.offset) {
        response = await fetch(baseurl + "?offset=" + encodeURIComponent(data.offset), {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${apikey}`}});
        data = await response.json();
        for (let i=0; i < data.records.length; i++) {
            temp = data.records[i];
            art.push({'ID': temp.fields.ID, 'Name': temp.fields.Name, 'Date': temp.fields.Date, 'Material': temp.fields.Material, 'Culture': temp.fields.Culture, 'Image': temp.fields.Image, 'Artist': temp.fields.Artist});
        }
    }

    res.end(JSON.stringify(art));
}

async function fetchterms(res) {
    let baseurl = "https://api.airtable.com/v0/appdBUgtvIa4EvA6y/tbluyCWaQt497jnJl";
    let response = await fetch(baseurl, {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${apikey}`}});
    let data = await response.json();
    let terms = [];
    let temp;

    for (let i=0; i < data.records.length; i++) {
        temp = data.records[i];
        terms.push({'Term': temp.fields.Term, 'Definition': temp.fields.Definition});
    }

    while (data.offset) {
        response = await fetch(baseurl + "?offset=" + encodeURIComponent(data.offset), {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${apikey}`}});
        data = await response.json();
        for (let i=0; i < data.records.length; i++) {
            temp = data.records[i];
            terms.push({'Term': temp.fields.Term, 'Definition': temp.fields.Definition});
        }
    }

    res.end(JSON.stringify(terms));
}