let cardtype, randnum, cardid;
let randnums = [], cardnums = [], artnames = [], emptycards = [], art = [], terms = [], unitarts = [];
let ccc = 0, ecc = 0; //ccc = clicked card counter, ecc = end correct counter
let artcompared, cardcompared, chosen_unit, matchcardappear;
let units = document.getElementsByClassName("select_unit");
let unitchosen = false;

class info {
    constructor(artnum = "", name = "", date = "", material = "", form = "", culture = "", artist = "") {
        this.name = name;
        this.date = date;
        this.material = material;
        this.artist = artist;
        this.form = form;
        this.culture = culture;
        this.artnum = artnum;
    }
}

class def {
    constructor(word = "", defin = "") {
        this.word = word;
        this.defin = defin;
    }
}

async function fetchartinfo() {
    let data;
    try {
        let response = await fetch('http://localhost:3000/art');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
    } catch (error) {
        console.log(error);
    }
    
    for(i=0; i < data.length; i++) {
        art.push(new info(data[i].ID, data[i].Name, data[i].Date, data[i].Material, `<img title="${data[i].Name}" class="cardforms" style="max-width: 150px; max-height: 150px; position: relative; z-index: -1;" src="${data[i].Image}">`, data[i].Culture, data[i].Artist));
    }
    
    art.sort(function(a,b){return a.artnum - b.artnum});
    assign_unitarts();
    let artistnum = 0;
    if (cardtype == "artist") {
        for (i=0; i < unitarts.length; i++) { if(unitarts[i].artist) artistnum++;}
        if(artistnum < 9) {artisterror();} else {afterthefetch();}
    } else {
        afterthefetch();
    }
}

async function fetchterminfo() {
    let data;
    try {
        let response = await fetch('http://localhost:3000/terms');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
    } catch (error) {
        console.log(error);
    }

    for(i=0; i < data.length; i++) {
        terms.push(new def(data[i].Term, data[i].Definition));
    }
    
    afterthefetch();
}

function showloading() {
    document.getElementById("loading").style.display = "inline";
}

function hideloading() {
    document.getElementById("loading").style.display = "none";
}

function afterthefetch() {
    hideloading();
    let cardslist = document.getElementsByClassName("matchcard");
    for (let i=0; i<cardslist.length; i++) {cardslist[i].style.display = "inline";}
    randassign();
    randcardassign();
    assigntocard();
}

for (i=0; i < units.length; i++) {
    if (units[i]) {
        units[i].addEventListener("click", unitselect);
    }
}

function resetchoices() {
    for (i=0; i < units.length; i++) {
        units[i].style.backgroundColor = "black";
        units[i].style.color = "rebeccapurple";
    }

    unitchosen = false;
    chosen_unit = "";
    cardtype = "";
    document.getElementById("selecttype").style.display = "none";
    document.getElementById("submit_type").style.display = "none";
}

function unitselect() {
    if(unitchosen) resetchoices();

    unitchosen = true;
    this.style.backgroundColor = "rebeccapurple";
    this.style.color = "black";
    chosen_unit = this.value;
    
    if(chosen_unit == "terms") {
        cardtype = "terms";
    } else {
        document.getElementById("selecttype").style.display = "inline";
    }

    document.getElementById("submit_type").style.display = "inline";
}

if (document.getElementById("submit_type")) {document.getElementById("submit_type").addEventListener("click", setcardtype);}

for (let i=0; i < 18; i++) {
    let matchcardid = "card" + (i + 1);
    document.getElementById(matchcardid).addEventListener("click", clickyfuntime);
}

function artisterror() {
    document.getElementById("selectunit").style.display = "none";
    let choosetype = document.getElementsByName("select_type");
    for (let i=0; i<choosetype.length; i++) {
        choosetype[i].style.display = "none";
    }
    document.getElementById("endbox").style.display = "inline";
    document.getElementById("endboxp").innerText = "An error occured. Not enough artists to play matching game. Click return to play again."
}

function setcardtype() {
    if(!cardtype) {
        let properties = document.getElementsByName("select_type");
        for (let i=0; i<properties.length; i++) {
            if (properties[i].checked) {
                cardtype = properties[i].value;
            } else {
                document.getElementById("errormsg").innerText = "No property was selected. Try again.";
            }
        }
    }

    if(((chosen_unit == "1B") || (chosen_unit == "2B") || (chosen_unit == "2C") || (chosen_unit == "3")) && (cardtype == "artist")) {
        artisterror();
    } else {
        if (cardtype) {
            document.getElementById("selectunit").style.display = "none";

            let choosetype = document.getElementsByName("select_type");
            for (let i=0; i<choosetype.length; i++) {choosetype[i].style.display = "none";}

            showloading();
            if(cardtype == "terms") {
                fetchterminfo();
            } else {
                fetchartinfo();
            }
        }
    }
}

function assign_unitarts() {
    switch (chosen_unit) {
        case "1B":
            unitarts = []; for (i=0; i < 11; i++) {unitarts.push(art[i]);} break;
            
        case "2B":
            unitarts = []; for (i=11; i < 25; i++) {unitarts.push(art[i]);} break;
            
        case "2C":
            unitarts = []; for (i=25; i < 47; i++) {unitarts.push(art[i]);} break;
        
        case "3":
            unitarts = []; for (i=47; i < 64; i++) {unitarts.push(art[i]);} break;

        case "4A":
            unitarts = []; for (i=64; i < 81; i++) {unitarts.push(art[i]);} break;

        case "4B":
            unitarts = []; for (i=81; i < 98; i++) {unitarts.push(art[i]);} break;

        case "5A":
            unitarts = []; for (i=98; i < 124; i++) {unitarts.push(art[i]);} break;

        case "5B":
            unitarts = []; for (i=124; i < 152; i++) {unitarts.push(art[i]);} break;
            
        case "7":
            unitarts = []; for (i=152; i < 166; i++) {unitarts.push(art[i]);} break;

        case "6":
            unitarts = []; for (i=166; i < 180; i++) {unitarts.push(art[i]);} break;

        case "8A":
            unitarts = []; for (i=180; i < 191; i++) {unitarts.push(art[i]);} break;

        case "8B":
            unitarts = []; for (i=191; i < 212; i++) {unitarts.push(art[i]);} break;

        case "9":
            unitarts = []; for (i=212; i < 223; i++) {unitarts.push(art[i]);} break;

        case "10":
            unitarts = []; for (i=223; i < 250; i++) {unitarts.push(art[i]);} break;

        case "all":
            unitarts = []; for (i=0; i < 250; i++) {unitarts.push(art[i]);} break;
            
        case "frq":
            let nums = [2,3,7,8,10,12,14,18,19,21,22,24,27,28,29,31,32,34,35,38,41,42,43,44,45,47,49,52,53,54,55,56,58,59,60,61,65,66,68,69,72,74,75,76,77,78,82,84,85,86,88,89,90,92,93,99,100,101,103,104,105,107,108,109,111,113,115,116,118,119,121,122,126,133,138,140,141,143,144,146,147,148,151,168,172,173,175,177,179,183,185,186,192,195,197,198,199,200,201,204,205,206,207,209,210,212,215,216,220,221,222,224,229,232,233,235,236,239,243,244,245];
            unitarts = []; for(i=0; i < nums.length; i++) {unitarts.push(art[nums[i] - 1]);} break;
    }
}

function randassign() {
    let unfiltered = true;
    let bac = 0; //blank artist counter
    if (cardtype != "artist" && cardtype != "terms") {
        while (randnums.length < 9) {
            randnum = Math.floor(Math.random() * unitarts.length);
            if (!randnums.includes(randnum)) {
                randnums.push(randnum);
            }
        }
    } else if (cardtype == "artist") {
        while (unfiltered) {
            if (unitarts[bac].artist) {
                if (((unitarts.length - 1) == bac) || (unitarts.length == bac)) {
                    unfiltered = false;
                } else {
                    bac++;
                }
            } else {
                if (((unitarts.length - 1) == bac) || (unitarts.length == bac)) {
                    unitarts.splice(bac, 1);
                    unfiltered = false;
                } else {
                    unitarts.splice(bac, 1);
                }
            }
        }
        while (randnums.length < 9) {
            randnum = Math.floor(Math.random() * unitarts.length);
            if (!randnums.includes(randnum)) {
                randnums.push(randnum);
            }
        }
    } else if (cardtype == "terms") {
        while (randnums.length < 9) {
            randnum = Math.floor(Math.random() * terms.length);
            if (!randnums.includes(randnum)) {
                randnums.push(randnum);
            }
        }
    } else {
        document.getElementById("endbox").innerHTML = `<p>An error occured. Click return to play again.</p>
                                                            <a id="return" href="index.html">Return</a>`;
    }
}

function randcardassign() {
    while (cardnums.length < 9) {
        randnum = Math.floor(Math.random() * 18);
        if (!cardnums.includes(randnum)) {
            cardnums.push(randnum);
        }
    }
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
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].date;
                    document.getElementById(cardid).value = unitarts[randnums[i]].date;
                    document.getElementById(cardid).title = "info";
                    break;

                case "materials":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].material;
                    document.getElementById(cardid).value = unitarts[randnums[i]].material;
                    document.getElementById(cardid).title = "info";
                    break;
                    
                case "artist":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].artist;
                    document.getElementById(cardid).value = unitarts[randnums[i]].artist;
                    document.getElementById(cardid).title = "info";
                    break;

                case "cultures":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].culture;
                    document.getElementById(cardid).value = unitarts[randnums[i]].culture;
                    document.getElementById(cardid).title = "info";
                    break;
                case "terms":
                    document.getElementById(cardid).innerText = terms[randnums[i]].defin;
                    document.getElementById(cardid).value = terms[randnums[i]].word;
                    document.getElementById(cardid).title = "info";
                    break;
            }

            if(cardtype == "terms") {
                artnames.push(terms[randnums[i]]);
            } else {
                artnames.push(unitarts[randnums[i]]);
            }
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
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " date";
                document.getElementById(emptycards[i]).value = artnames[i].date;
                document.getElementById(emptycards[i]).title = "name";
                break;

            case "materials":
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " material";
                document.getElementById(emptycards[i]).value = artnames[i].material;
                document.getElementById(emptycards[i]).title = "name";
                break;   

            case "artist":
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " artist";
                document.getElementById(emptycards[i]).value = artnames[i].artist;
                document.getElementById(emptycards[i]).title = "name";
                break;

            case "cultures":
                document.getElementById(emptycards[i]).innerText = artnames[i].name + " culture";
                document.getElementById(emptycards[i]).value = artnames[i].culture;
                document.getElementById(emptycards[i]).title = "name";
                break;
            case "terms":
                document.getElementById(emptycards[i]).innerText = artnames[i].word;
                document.getElementById(emptycards[i]).value = artnames[i].word;
                document.getElementById(emptycards[i]).title = "name";
                break;
        }
    }

    if (cardtype == "forms") {
        formimgs();
    }
}

function formimgs() {
    for (i=0; i<9; i++) {
        cardid = "card" + (cardnums[i] + 1);
        document.getElementById(cardid).innerHTML = unitarts[randnums[i]].form
        document.getElementById(cardid).value = unitarts[randnums[i]].name;
        document.getElementById(cardid).title = "info";
    }

    emptycards = [];
    for (let i=0; i<18; i++) {
        if (!(cardnums.includes(i))) {
            emptycards.push("card" + (i+1));
        }
    }

    for (i=0; i<9; i++) {
        document.getElementById(emptycards[i]).innerText = artnames[i].name + " form";
        document.getElementById(emptycards[i]).value = artnames[i].name;
        document.getElementById(emptycards[i]).title = "name";
    }
}

function clickyfuntime() {
    if (this.style.borderColor === "green") {
        return;  // exit the function if the card is already marked as correct
    }

    let cardslist = document.getElementsByClassName("matchcard");
    ccc = 0;
    for (let i=0; i < 18; i++) {
        if ((cardslist[i].style.color == "white")) {
            ccc += 1;
        }
    }

    if (ccc == 0) {
        this.style.color = "white";
        this.style.backgroundColor = "#333";
        this.style.borderWidth = "5px";
        if ((cardtype == "forms") && (this.title == "info")) {
            for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                if (document.getElementsByClassName("cardforms")[i].title == this.value) {
                    document.getElementsByClassName("cardforms")[i].style.zIndex = 2;
                }
            }
        }
    } else if (ccc == 1) {
        this.style.color = "white";
        this.style.backgroundColor = "#333";
        this.style.borderWidth = "5px";
        if ((cardtype == "forms") && (this.title == "info")) {
            for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                if (document.getElementsByClassName("cardforms")[i].title == this.value) {
                    document.getElementsByClassName("cardforms")[i].style.zIndex = 2;
                }
            }
        }
        correctcheck(this); 
    }
}

function correctcheck(thisclicked) {
    let cardslist = document.getElementsByClassName("matchcard");
    for (let y = 0; y < cardslist.length; y++) {
        if (cardslist[y].style.color === "white" && cardslist[y] !== thisclicked) {
            let cardcompared = cardslist[y];
            let isMatch = ((thisclicked.value === cardcompared.value) && (thisclicked.title !== cardcompared.title));
            if (isMatch) {
                istrue(thisclicked, cardcompared);
            } else {
                isfalse(thisclicked, cardcompared);
            }
        }
    }
}

function istrue(thisclicked, otherclicked) {
    thisclicked.style.borderColor = "green";
    thisclicked.style.backgroundColor = "white";
    thisclicked.style.color = "black";

    otherclicked.style.borderColor = "green";
    otherclicked.style.backgroundColor = "white";
    otherclicked.style.color = "black";

    let allMatched = true;
    for (let i = 0; i < 18; i++) {
        let matchcardid = "card" + (i + 1);
        if (document.getElementById(matchcardid).style.borderColor !== "green") {
            allMatched = false;
            break;
        }
    }

    if (allMatched) {
        setTimeout(() => {
            document.getElementById("endbox").style.display = "inline";
            for (let i=0; i < 18; i++) {
                let matchcardid = "card" + (i + 1);
                document.getElementById(matchcardid).style.display = "none";
            }
        }, 500);
    }
}

function isfalse(thisclicked, otherclicked) {
    setTimeout(() => {
        thisclicked.style.backgroundColor = "red";
        otherclicked.style.backgroundColor = "red";
        setTimeout(() => {
            thisclicked.style.borderWidth = "2px";
            thisclicked.style.borderColor = "rebeccapurple";
            thisclicked.style.backgroundColor = "lightgrey";
            thisclicked.style.color = "lightgrey";
            if ((cardtype == "forms") && (thisclicked.title == "info")) {
                for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                    if (document.getElementsByClassName("cardforms")[i].title == thisclicked.value) {
                        document.getElementsByClassName("cardforms")[i].style.zIndex = "-1";
                    }
                }
            }

            otherclicked.style.borderWidth = "2px";
            otherclicked.style.borderColor = "rebeccapurple";
            otherclicked.style.backgroundColor = "lightgrey";
            otherclicked.style.color = "lightgrey";
            if ((cardtype == "forms") && (otherclicked.title == "info")) {
                for (i=0; i < document.getElementsByClassName("cardforms").length; i++) {
                    if (document.getElementsByClassName("cardforms")[i].title == otherclicked.value) {
                        document.getElementsByClassName("cardforms")[i].style.zIndex = "-1";
                    }
                }
            }
        }, 750);
    }, 250);
}