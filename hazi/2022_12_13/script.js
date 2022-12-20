//1. feladat: Példák írása legalább 10 matematikai függvényre.
/*2. feladat: {name: "Tom Swayer", birthdate: 1876, death: 1945},
              {name: "Bart Simpson", birthdate: 1989, death: 2017},
              {name: "Doctor Strange", birthdate: 1930, death: 2020},
              {name: "Peter Griffin", birthdate: 1999, death: 2017},
              {name: "Ragnar Lothbrok", birthdate: 760, death: 800}
ki élt a leghosszabb ideig? mennyi ideig élt? 
*/

//1. feladat

function Szamol(){
    const muvelet = prompt("Írja be a számolás módját: (abs, max, min, cos, exp, log2, log10, sqrt, round, pow)");  
    const szam_1 = prompt ("Írja be az első számot: ");  
    const szam_2 = prompt ("Írja be a második számot: ");  
    let eredmeny;
    if (muvelet == "exp") {   
        eredmeny = Math.exp(szam_1) + " és " + Math.exp(szam_2);  
    }  
    else if (muvelet == "abs") { 
        eredmeny = Math.abs(szam_1) + " és " + Math.abs(szam_2);  
    }  
    else if (muvelet == "max") { 
        eredmeny = Math.max(szam_1, szam_2);  
    }  
    else if (muvelet == "min"){  
        eredmeny = Math.min(szam_1, szam_2);   
    }
    else if(muvelet == "cos"){
        eredmeny = Math.cos(szam_1) + " és " + Math.cos(szam_2);
    } 
    else if(muvelet == "log2"){
        eredmeny = Math.log2(szam_1) + " és " + Math.log2(szam_2);
    }
    else if (muvelet == "log10"){
        eredmeny = Math.log10(szam_1) + " és " + Math.log10(szam_2);
    }
    else if(muvelet == "sqrt"){
        eredmeny = Math.sqrt(szam_1) + " és " + Math.sqrt(szam_2);
    }
    else if (muvelet == "round"){
        eredmeny = Math.round(szam_1) + " és " + Math.round(szam_2);
    }
    else if (muvelet == "pow"){
         const hatv_1 = prompt ("Írja be az első hatványkitevőt: ");  
         const hatv_2 = prompt ("Írja be a második hatványkitevőt: ");
        eredmeny = Math.pow(szam_1, hatv_1) + " és " + Math.pow(szam_2, hatv_2);
    }
window.alert(" Az eredmeny: " + eredmeny);  
}

//2. feladat

const Persons = [
    {name: "Tom Swayer", birthdate: 1876, death: 1945},
    {name: "Bart Simpson", birthdate: 1989, death: 2017},
    {name: "Doctor Strange", birthdate: 1930, death: 2020},
    {name: "Peter Griffin", birthdate: 1999, death: 2017},
    {name: "Ragnar Lothbrok", birthdate: 760, death: 800}
]

function Feladat_2(){
    for (let i = 0; i < Persons.length; i++) {
        var maximum = 0;
        if (Persons.death - Persons.birthdate > maximum){
            maximum == Persons.death - Persons.birthdate;
        }
    }
    console.log(maximum)
}
Szamol();
Feladat_2();