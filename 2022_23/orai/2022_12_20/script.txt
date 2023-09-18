Animal = [ 
    {name: "Rex", species: "Németjuhász", age: 5},
    {name: "Bubu", species: "Foxi", age: 3},
    {name: "Zsömle", species: "Tacskó", age: 8},
    {name: "Gömböc", species: "Masztif", age: 9},
    {name: "Kormi", species: "Puli", age: 7}
]

function Tabla(arr) {
    var table = document.createElement("table");
    var head = document.createElement("tr");
  
    var head_name = document.createElement("th");
    head_name.textContent = "Név";
    head.appendChild(head_name);
  
    var speciesHeader = document.createElement("th");
    speciesHeader.textContent = "Fajta";
    head.appendChild(speciesHeader);
  
    var ageHead = document.createElement("th");
    ageHead.textContent = "Kor";
    head.appendChild(ageHead);
  
    table.appendChild(head);
  
    for (var i = 0; i < arr.length; i++) {
      var row = document.createElement("tr");
  
      var nameCell = document.createElement("td");
      nameCell.textContent = arr[i].name;
      row.appendChild(nameCell);
  
      var speciesCell = document.createElement("td");
      speciesCell.textContent = arr[i].species;
      row.appendChild(speciesCell);
  
      var ageCell = document.createElement("td");
      ageCell.textContent = arr[i].age;
      row.appendChild(ageCell);
  
      table.appendChild(row);
    }
    document.body.appendChild(table);
}

function Hozzaad(nameV, speciesV, ageV){
	var Obj = {name: nameV, species: speciesV, age: ageV};
	console.log(Obj, Animal);
	Animal.push(Obj);
}


function Atlag() {
    var osszes = 0;
    var szam = 0;
  
    for (var i = 0; i < Animal.length; i++) {
      osszes += Animal[i].age;
      szam++;
    }
    var atlag = osszes / szam;
  
    console.log(atlag);
  }

function Torol(i) {
    var torol = []
    if (i >= 0 && i < Animal.length){
        torol = Animal.splice(i, 1);
    }
    console.log(Animal) 
}
function Oreg(){
	var max = 0;
	for (var i = 1; i < Animal.length; i++)
		if (Animal[i].age > max)
			max = i;

	console.log(Animal[max]);
}
Tabla(Animal);
Hozzaad("Kutya", "Vizsla", 10);
Atlag();
Torol();
Oreg();
