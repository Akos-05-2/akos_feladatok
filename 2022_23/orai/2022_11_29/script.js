/*const tanulo = {nev: "Maci Laci", 
                cime: "Yellowstone",
                kedvenc: "Méz",
                KiirLog: function(){
                    console.log("A tanulo neve: ", this.nev);
                    console.log("A tanulo cime: ", this.cime);
                    console.log("A tanulo kedvenc étele: ", this.kedvenc);
                },
                kiirInnerHtml: function(){ 
                    return "A tanulo neve: " + this.nev + "<br/>" +
                    "A tanulo cime: " + this.cim + "<br/>" +
                    "A tanulo kedvenc étele: " + this.kedvenc;   
                }
            }
tanulo.KiirLog();

tanulo.kedvenc = "Mézes puszedli";
console.log("A tanulo kedvenc étele: ", tanulo["kedvenc"]);*/
function Fel_1(){
    let mondat = "Paprika";
    let hozzadas = ""; 
    for (let i = 1; i < mondat.length; i++) {
            hozzadas += mondat[i];
    }
    return hozzadas;
}

