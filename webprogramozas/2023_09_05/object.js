objektum = [
    {nev: "Paprika Jancsi", eletkor: 45},
    {nev: "Kis János", eletkor: 15},
    {nev: "Bekre Pál", eletkor: 20},
    {nev: "Nap Pali", eletkor: 32},
    {nev: "Nagy Lajos", eletkor: 10}
]


function Tabla(tab){
    var tabla = document.createElement("table");
    var head = document.createElement("tr");

    var nev_head = document.createElement("th");
    nev_head.textContent = "Név";
    head.appendChild(nev_head);

    var eletkor_head = document.createElement("th");
    eletkor_head.textContent = "Életkor";
    head.appendChild(eletkor_head);

    tabla.appendChild(head);

    for (let i = 0; i < objektum.length; i++) {
        var row = document.createElement("tr");
        
        var nevCella = document.createElement("td");
        nevCella.textContent = tab[i].nev;
        row.appendChild(nevCella);

        var eletkorCella = document.createElement("td");
        eletkorCella.textContent = tab[i].eletkor;
        row.appendChild(eletkorCella);

        tabla.appendChild(row);
    }
    document.body.appendChild(tabla);
}

Tabla(objektum);