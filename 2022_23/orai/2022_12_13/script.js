const persons = [
    {name: "Tom Swayer", birthdate: 1876, death: 1945},
    {name: "Bart Simpson", birthdate: 1989, death: 2017},
    {name: "Doctor Strange", birthdate: 1930, death: 2020},
    {name: "Peter Griffin", birthdate: 1999, death: 2017},
    {name: "Ragnar Lothbrok", birthdate: 760, death: 800}
]

function feladat_1 (){
    persons.forEach ((value, i) => {
        console.log(i, value.death - value.birthdate);
    })
}

function feladat_2(){
    for (let i = 0; i < persons.length; i++) {
        console.log(i, persons[i].name);
    }
}

function feladat_3(){
    for (person of persons) {
        console.log(person);
    }
}

function feladat_4(){
    for (property in persons) {
        console.log(poperty, persons[property]);
    }
}

function bejaras(){
    for (const person of persons) {
        for (property in person) {
            console.log(property, person[property]);
        }
    }
}

function bejaras_2(){
    for (const person of persons) {
        for (property in person) {
            console.log(property + ": ", person[property]);
        }
    }
}
//Irassunk ki véletlenszerűen egy nevet a Person tömbből.
//floor: levágja a végét
//round: kerekít
//a random alapból 0 és 1 között ad vissza értéket

function random(){
    //console.log(persons[Math.floor(Math.random() * persons.length)].name);
    console.log(Math.floor(Math.random() * 11 + 1));
    
}
random();

//1. feladat: Példák írása az összes matematikai függvényre.
/*2. feladat: {name: "Tom Swayer", birthdate: 1876, death: 1945},
              {name: "Bart Simpson", birthdate: 1989, death: 2017},
              {name: "Doctor Strange", birthdate: 1930, death: 2020},
              {name: "Peter Griffin", birthdate: 1999, death: 2017},
              {name: "Ragnar Lothbrok", birthdate: 760, death: 800}
ki élt a leghosszabb ideig? mennyi ideig élt? 
*/