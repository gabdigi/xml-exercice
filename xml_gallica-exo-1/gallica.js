let gallicaAPIURL   = "https://gallica.bnf.fr/SRU?version=1.2&operation=searchRetrieve&query="
let cql             = "dc.type";
let operator        = ["all", "any", "adj", "prox"];
let and             = "&";
let separator       = "%20";
let types           = [
    "monographie",
    "carte",
    "image",
    "fascicule",
    "manuscrit",
    "partition",
    "sonore",
    "objet",
    "video"
];

let collapse        = "collapsing=true";

let request1             = gallicaAPIURL + cql + separator + operator[0] + separator + types[1] + and + collapse;

LoadData(request1)
    .then(data => {
        console.log(request1);
        console.log(data);

        let oaiData   = data.getElementsByTagName("oai_dc:dc");
        let affichage = document.querySelectorAll("#data1")

        for(let i=0; i<oaiData.length; i++){
            let gallicadata = oaiData[i];
            for(let j=0; j<gallicadata.children.length; j++){
                let value = gallicadata.children[j].textContent;
                console.log(value)

                affichage[j].innerHTML = value;
            }
        }

    })

let request2             = gallicaAPIURL + cql + separator + operator[1] + separator + types[2] + and + collapse;

    LoadData(request2)
    .then(data => {
        console.log(request2);
        console.log(data);

        let oaiData = data.getElementsByTagName("oai_dc:dc");
        let affichage = document.querySelectorAll("#data2")

        for(let i=0; i<oaiData.length; i++){
            let gallicadata = oaiData[i];
            for(let j=0; j<gallicadata.children.length; j++){
                let value = gallicadata.children[j].textContent;
                console.log(value)

                affichage[j].innerHTML = value;
            }
        }

    })

let request3             = gallicaAPIURL + cql + separator + operator[1] + separator + types[5,6] + and + collapse;

    LoadData(request3)
    .then(data => {
        console.log(request3);
        console.log(data);

        let oaiData = data.getElementsByTagName("oai_dc:dc");
        let affichage = document.querySelectorAll("#data3")

        for(let i=0; i<oaiData.length; i++){
            let gallicadata = oaiData[i];
            for(let j=0; j<gallicadata.children.length; j++){
                let value = gallicadata.children[j].textContent;
                console.log(value)

                affichage[j].innerHTML = value;
            }
        }

    })

async function LoadData(request){
    console.log(request)
    const response = await fetch(request);
    const rawdata  = await response.text();
    const xml      = await new window.DOMParser().parseFromString(rawdata, "text/xml");
    return xml;
}