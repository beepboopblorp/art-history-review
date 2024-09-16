let cardtype, randnum, cardid;
let randnums = [], cardnums = [], artnames = [], emptycards = [];

class info {
    constructor(artnum = "", name = "", date = "", material = "stone", form = "pretty", content = "cat", art_function = "death", context = "trade") {
        this.name = name;
        this.date = date;
        this.material = material;
        this.form = form;
        this.content = content;
        this.function = art_function;
        this.context = context;
        this.artnum = artnum;
    }
}

let art = [new info(0,"red",1900), new info(1,"orange",1910), new info(2,"yellow",1920), new info(3,"green",1930), new info(4,"blue",1940), new info(5,"indigo",1950), new info(6,"violet",1960), new info(7,"black",1970), new info(8,"brown",1980), new info(9,"white",1990), new info(10,"pink",2000)];

if (document.getElementById("submit_type")) {document.getElementById("submit_type").addEventListener("click", setcardtype);}

function setcardtype() {
    let properties = document.getElementsByName("select_type");
    for (let i=0; i<properties.length; i++) {
        if (properties[i].checked) {
            cardtype = properties[i].value;
        } // add an html red error  message
    }

    if (cardtype) {
        console.log(cardtype);
        
        let choosetype = document.getElementsByName("select_type");
        for (let i=0; i<choosetype.length; i++) {choosetype[i].style.display = "none";}

        let cardslist = document.getElementsByClassName("matchcard");
        for (let i=0; i<cardslist.length; i++) {cardslist[i].style.display = "inline";}

        randassign();
        randcardassign();
        assigntocard();
    }

    for (let i=0; i < 18; i++) {
        let cardslist = document.getElementsByClassName("matchcard");
        console.log(cardslist[i].innerText);
    }
}

function randassign() {
    while (randnums.length < 10) {
        randnum = Math.floor(Math.random() * art.length);
        if (!randnums.includes(randnum)) {
            randnums.push(randnum);
        }
    }

    randnums.splice((randnums.length - 1),1);
}

function randcardassign() {
    while (cardnums.length < 10) {
        randnum = Math.floor(Math.random() * 18);
        if (!cardnums.includes(randnum)) {
            cardnums.push(randnum);
        }
    }

    cardnums.splice((cardnums.length - 1),1);
}

function assigntocard() {
    for (let i=0; i < 9; i++) {
        if (cardnums[i]) {
            cardid = "card" + (cardnums[i] + 1);
        } else if (cardnums[i] === 0) {
            cardid = "card1"
        }

        if (cardid) {
            switch (cardtype) {
                case "dates":
                    document.getElementById(cardid).innerText = art[randnums[i]].date;
                    break;

                case "materials":
                    document.getElementById(cardid).innerText = art[randnums[i]].material;
                    break;   

                case "forms":
                    document.getElementById(cardid).innerText = art[randnums[i]].form;
                    break;

                case "contents":
                    document.getElementById(cardid).innerText = art[randnums[i]].content;
                    break;

                case "functions":
                    document.getElementById(cardid).innerText = art[randnums[i]].function;
                    break;
                
                case "contexts":
                    document.getElementById(cardid).innerText = art[randnums[i]].context;
                    break;
            }

            artnames.push(art[randnums[i]].name);
        }
    }

    for (let i=0; i<18; i++) {
        cardid = "card" + (i + 1);
        if (!document.getElementById(cardid).innerText) {
            emptycards.push(cardid);
        }
    }

    for (let i=0; i < 9; i++) {
        switch (cardtype) {
            case "dates":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " date";
                break;

            case "materials":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " materials";
                break;   

            case "forms":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " forms";
                break;

            case "contents":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " contents";
                break;

            case "functions":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " functions";
                break;
            
            case "contexts":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " contexts";
                break;
        }
    }
}

if (document.getElementsByClassName("matchcard")) {document.getElementsByClassName("matchcard").addEventListener("click", clickyfuntime)}
let ccc = 0; //ccc = clicked card counter

function clickyfuntime() {
    
}