const apikey = process.env.API_KEY;

export default async function handler(req, res) {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        let baseurl = "https://api.airtable.com/v0/appdBUgtvIa4EvA6y/tbluyCWaQt497jnJl";
        let response = await fetch(baseurl, {headers: {'Authorization': `Bearer ${apikey}`}});
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
        res.status(200).json(terms);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}