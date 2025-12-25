let questiontype, chosen_unit, randq, randnum, ca, qredo;
let art = [], terms = [], unitarts = [], arttouse = [], lastnums = [];
let units = document.getElementsByClassName("select_unit");
let unitchosen = false, acceptableq = true;
let mcqc = [1,2,3,4];

class info {
    constructor(artnum = "", name = "", date = "", material = "", form = "form", culture = "", artist = "") {
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
        let response = await fetch('https://art-history-review.vercel.app/api/art');
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
    if (questiontype == "artist") {
            for (i=0; i < unitarts.length; i++) {
                if (unitarts[i].artist) {
                    arttouse.push(unitarts[i]);
                }
            }
            if (arttouse.length > 3) {
                afterthefetch();
            } else {
                artisterror();
            }
        } else {
            afterthefetch();
        }
}

async function fetchterminfo() {
    let data;
    try {
        let response = await fetch('https://art-history-review.vercel.app/api/terms');
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

function afterthefetch() {
    hideloading();
    setlastnums();
    assignq();
}

function showloading() {
    document.getElementById("loading").style.display = "inline";
}

function hideloading() {
    document.getElementById("loading").style.display = "none";
}

function setlastnums() {
    if (questiontype == "artist") {
        if(arttouse.length < 6) {
            for(let i = 0; i < arttouse.length/2; i++) {
                lastnums.push("");
            }
        } else {lastnums = ["", "", "", "", ""];}
    } else if (questiontype == "terms") {
        if(terms.length < 6) {
            for(let i = 0; i < terms.length/2; i++) {
                lastnums.push("");
            }
        } else {lastnums = ["", "", "", "", ""];}
    } else {
        if(unitarts.length < 6) {
            for(let i = 0; i < unitarts.length/2; i++) {
                lastnums.push("");
            }
        } else {lastnums = ["", "", "", "", ""];}
    }
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
    questiontype = "";
    document.getElementById("selecttype").style.display = "none";
    document.getElementById("submit_type").style.display = "none";
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

function unitselect() {
    if(unitchosen) resetchoices();

    unitchosen = true;
    this.style.backgroundColor = "rebeccapurple";
    this.style.color = "black";
    chosen_unit = this.value;

    if(chosen_unit == "terms") {
        questiontype = "terms";
    } else {
        document.getElementById("selecttype").style.display = "inline";
    }
    document.getElementById("submit_type").style.display = "inline";
}

if (document.getElementById("submit_type")) {document.getElementById("submit_type").addEventListener("click", setq);}

function artisterror() {
    document.getElementById("selectunit").style.display = "none";
    let choosetype = document.getElementsByName("select_type");
    for (let i=0; i<choosetype.length; i++) {
        choosetype[i].style.display = "none";
    }
    document.getElementById("endbox").style.display = "inline";
    document.getElementById("endboxp").innerText = "An error occured. There are not enough artists in this selection. Click return to play again."
}

function setq() {
    if(!questiontype) {
        let properties = document.getElementsByName("select_type");
        for (let i=0; i<properties.length; i++) {
            if (properties[i].checked) {
                questiontype = properties[i].value;
            } else {
                document.getElementById("errormsg").innerText = "No property was selected. Try again.";
            }
        }
    }

    if (questiontype) {
        document.getElementById("selectunit").style.display = "none";
        let choosetype = document.getElementsByName("select_type");
        for (let i=0; i<choosetype.length; i++) {choosetype[i].style.display = "none";}
    }

    showloading();
    
    if(questiontype == "terms") {
        fetchterminfo();
    } else {
        fetchartinfo();
    }
}

if (document.getElementById("showoptions")) {
    document.getElementById("showoptions").addEventListener("click", () => {
        if (document.getElementById("MC").style.display == "inline") {
            document.getElementById("MC").style.display = "none";
            document.getElementById("showoptions").style.color = "white";
            document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";
        } else {
            document.getElementById("showoptions").style.color = "rebeccapurple";
            document.getElementById("MC").style.display = "inline";
            document.getElementById("showoptions").style.backgroundColor = "white";
        }
    })
}

function assignq() {
    document.getElementById("questionthings").style.display = "inline";
    document.getElementById("showoptions").style.color = "white";
    document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";

    do {
        if (questiontype == "artist") {
            randq = Math.floor(Math.random() * arttouse.length);
        } else if (questiontype == "terms") {
            randq = Math.floor(Math.random() * terms.length);
        } else {
            randq = Math.floor(Math.random() * unitarts.length);
        }

        if(!lastnums.includes(randq)) {
            acceptableq = true;
        } else {
            acceptableq = false;
        }
    } while (!acceptableq)
    
    lastnums.push(randq);
    lastnums.splice(0, 1);
    let i = 0;
    switch (questiontype) {
        case "dates":
            document.getElementById("qask").innerText = unitarts[randq].name + " date";
            ca = Math.floor(Math.random() * 4);
            document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].date;
            mcqc.splice(ca, 1);
            while (i < 3) {
                randnum = Math.floor(Math.random() * unitarts.length);
                if ((unitarts[randnum].date != document.getElementById("answer1").innerText) && (unitarts[randnum].date != document.getElementById("answer2").innerText) && (unitarts[randnum].date != document.getElementById("answer3").innerText) && (unitarts[randnum].date != document.getElementById("answer4").innerText)) {
                    document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].date;
                    i++
                }
            }
            break;
        
        case "materials":
            document.getElementById("qask").innerText = unitarts[randq].name + " material";
            ca = Math.floor(Math.random() * 4);
            document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].material;
            mcqc.splice(ca, 1);
            i = 0;
            while (i < 3) {
                randnum = Math.floor(Math.random() * unitarts.length);
                if ((unitarts[randnum].material != document.getElementById("answer1").innerText) && (unitarts[randnum].material != document.getElementById("answer2").innerText) && (unitarts[randnum].material != document.getElementById("answer3").innerText) && (unitarts[randnum].material != document.getElementById("answer4").innerText)) {
                    document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].material;
                    i++
                }
            }
            break;

        case "artist":
            document.getElementById("qask").innerText = arttouse[randq].name + " artist";
            ca = Math.floor(Math.random() * 4);
            document.getElementById("answer" + (ca + 1)).innerText = arttouse[randq].artist;
            mcqc.splice(ca, 1);
            i = 0;
            while (i < 3) {
                randnum = Math.floor(Math.random() * arttouse.length);
                if ((arttouse[randnum].artist != document.getElementById("answer1").innerText) && (arttouse[randnum].artist != document.getElementById("answer2").innerText) && (arttouse[randnum].artist != document.getElementById("answer3").innerText) && (arttouse[randnum].artist != document.getElementById("answer4").innerText)) {
                    document.getElementById("answer" + mcqc[i]).innerText = arttouse[randnum].artist;
                    i++
                }
            }
            break;
            
        case "forms":
            document.getElementById("qask").innerText = unitarts[randq].name + " form";
            ca = Math.floor(Math.random() * 4);
            document.getElementById("answer" + (ca + 1)).innerHTML = unitarts[randq].form;
            mcqc.splice(ca, 1);
            i = 0;
            while (i < 3) {
                randnum = Math.floor(Math.random() * unitarts.length);
                if ((unitarts[randnum].form != document.getElementById("answer1").innerHTML) && (unitarts[randnum].form != document.getElementById("answer2").innerHTML) && (unitarts[randnum].form != document.getElementById("answer3").innerHTML) && (unitarts[randnum].form != document.getElementById("answer4").innerHTML)) {
                    document.getElementById("answer" + mcqc[i]).innerHTML = unitarts[randnum].form;
                    i++
                }
            }
            break;
            
        case "cultures":
            document.getElementById("qask").innerText = unitarts[randq].name + " culture";
            ca = Math.floor(Math.random() * 4);
            document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].culture;
            mcqc.splice(ca, 1);
            i = 0;
            while (i < 3) {
                randnum = Math.floor(Math.random() * unitarts.length);
                if ((unitarts[randnum].culture != document.getElementById("answer1").innerText) && (unitarts[randnum].culture != document.getElementById("answer2").innerText) && (unitarts[randnum].culture != document.getElementById("answer3").innerText) && (unitarts[randnum].culture != document.getElementById("answer4").innerText)) {
                    document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].culture;
                    i++
                }
            }
            break;

        case "terms":
            document.getElementById("qask").innerText = terms[randq].defin;
            ca = Math.floor(Math.random() * 4);
            document.getElementById("answer" + (ca + 1)).innerText = terms[randq].word;
            mcqc.splice(ca, 1);
            i = 0;
            while (i < 3) {
                randnum = Math.floor(Math.random() * terms.length);
                if ((terms[randnum].word != document.getElementById("answer1").innerText) && (terms[randnum].word != document.getElementById("answer2").innerText) && (terms[randnum].word != document.getElementById("answer3").innerText) && (terms[randnum].word != document.getElementById("answer4").innerText)) {
                    document.getElementById("answer" + mcqc[i]).innerText = terms[randnum].word;
                    i++
                }
            }
            break;
    }
    
}

//check mcq answers

function mcqreset() {
    mcqc = [1, 2, 3, 4];
    for (let i = 0; i < 4; i++) {
        document.getElementById("answer" + (i + 1)).style.backgroundColor = "rebeccapurple";
    }
    document.getElementById("MC").style.display = "none";
    assignq()
}

for (let i = 0; i < 4; i++) {
    if (document.getElementById("answer" + (i + 1))) {
        document.getElementById("answer" + (i + 1)).addEventListener("click", checkmcq);
    }
}

function checkmcq() {
    if (this.value == ca) {
        this.style.backgroundColor = "green";
        setTimeout(mcqreset, 1000);
    } else {
        this.style.backgroundColor = "red";
    }
}

if (document.getElementById("endgame")) {document.getElementById("endgame").addEventListener("click", endgame)}

function endgame() {
    document.getElementById("questionthings").style.display = "none";
    document.getElementById("endbox").style.display = "inline";
    document.getElementById("endboxp").innerText = "You completed the game! Click return to play again."
}