const apikey = process.env.API_KEY;

export default async function handler(req, res) {
    try {
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

        res.status(200).json(art);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}