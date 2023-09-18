const nevLista = document.getElementById("nevLista");
const pElemek = nevLista.getElementsByTagName("p");
const tabla = document.getElementById("nevTabla");
const tbody = tabla.querySelector("tbody");
const nevek = [];
for (let i = 0; i < pElemek.length; i++) {
    const nev = pElemek[i].textContent;
    nevek.push(nev);
}
nevek.sort();
nevek.forEach(function(nev) {
    const sor = document.createElement("tr");
    const cella = document.createElement("td");
    cella.textContent = nev;
    sor.appendChild(cella);
    tbody.appendChild(sor);
});
