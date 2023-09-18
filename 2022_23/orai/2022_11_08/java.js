var lists = [5, 3, 9, 8, 10];
console.log("TÖmb elemeinek száma: " + lists.length);
console.log(lists.sort());
console.log(lists.reverse());
var tobbd;
for (let i = 0; j < 10; i++){
    for (let j = 0; j < 10; j++){
        tobbd[i][j]
    }
}

function ListaKeszit(){
    listElement = document.getElementById("lista");
    lists.forEach((element, index) => {
        listElement.add(new Option(element, index));
    });
}