// console.log("test code");

// const keyMaster = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
// const binId = "65566e2c12a5d376599a7516";
// const apiUrl = "https://api.jsonbin.io/v3";

// let DataJson;
// await getDataJson();
// console.log("voici les données récupérés ",DataJson);

// async function getDataJson() {
//     const data = await fetch(apiUrl+"/b/"+binId, {
//         method: 'GET',
//         headers: {
//             'X-Master-Key':keyMaster,
//         }
//     });
//     DataJson = await data.json();
// }



// let mesJoueurs = DataJson.record.joueurs;
// console.log("les joueurs choisie sont ",mesJoueurs);


// let myTable = document.createElement("table");
// document.body.appendChild(myTable);


// mesJoueurs.forEach(joueur => {
//     let uneRow = document.createElement("tr");
//     uneRow.innerText = joueur.prenom;
//     uneRow.style.border = "1px solid black"
//     myTable.appendChild(uneRow);
//     console.log("les attributs sont ",Object.keys(joueur)); // object.keys est l'attribut du joueur( nom, prenom, poste)
//     for (let i = 0; i<5; i++){
    
//     let uneCellule = document.createElement("td");
//     uneCellule.innerText = [i];
//     uneRow.appendChild(uneCellule);
//     }
// });

//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------METHODE POST envoi donnée formulaire dans le Bin-------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

const keyMaster = "$2a$10$sIvMxOzunGBB5JXAmSeYjO.3ZdozgJXu7oXypD4UO9GP16Sx6ATBm";
const binId = "65566e2c12a5d376599a7516";
const apiUrl = "https://api.jsonbin.io/v3";

let infoJson;

async function postFormulaire(infoJson){
    const data = await fetch(`${apiUrl}/b`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Master-Key': keyMaster,
            'X-Bin-Name': binId,
        },
        body: JSON.stringify(infoJson),
    }
    );
}

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
let recupInfo = new FormData(form);
infoJson = Object.fromEntries(recupInfo);
console.log(infoJson);
    postFormulaire(infoJson);
})

// -----------------------------------------------------------------------------------------------------------
//------------------------------------------METHODE GET récupère donnée du Bin--------------------------------
//------------------------------------------------------------------------------------------------------------

await getFormulaire();

async function getFormulaire(infoJson) {
    const data = await fetch(apiUrl+"/b/"+binId, {               
        method: `GET`,
        headers: {
            'X-Master-Key': keyMaster,
        }
    });
    infoJson = await data.json();

    console.log("get list json: ",infoJson.record);
}





