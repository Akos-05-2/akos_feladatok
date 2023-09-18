function changeInnerHtml() {
  document.getElementById("paragrafus").innerHTML = "Zöld";
  let html = "<table  border = '1'>";
  for (let i = 1; i <= 10; i++) {
    html += "<tr>";
    for (let j = 1; j <= 10; j++) {
      if (i + j - 1 === 10) {
        html += "<td class = 'piros'>" + "1" + "</td>";
      } else if (i === j) {
        html += "<td id = " + i + j + " onmouseover = 'over(" + i + "," + j + ")' onmouseleave = 'leave(" + i + "," + j + ")'>" + "1" + "</td>";
      } else {
        html += "<td>" + "0" + "</td>";
      }
    }
    html += "</tr>";
  }
  html += "</table>";
  document.getElementById("paragrafus").innerHTML = html;
}
  function Feltolt(){
    let Tomb = [];
    for (let i = 0; i < 10; i++) {
      let sor = []
      for (let j = 0; j < 10; j++) {
        if (i + j - 1 === 10){
          sor[j] = "<td id = "+i + j+" onmouseover = 'over("+i+"," +j+")'>" + "1" +"</td>";
      }
      
      else if (i  === j){
          sor[j] = "<td id = "+i + j+" onmouseover = 'over("+i+"," +j+")'>" + "1" +"</td>";
      }

      else{ 
          sor[j] = "<td>" + "0" + "</td>";
      }
    }
    Tomb.push(sor);
  }
  return Tomb;
  }
  tombKiir(Feltolt())
  function tombKiir(Tomb){
    html = "<table>";
    for (let i = 0; i < 10; i++) {
      html += "<tr>";
      for (let j = 0; j < 10; j++) {
         html += Tomb[i][j];
      }
      html += "</tr>";
    }
    html += "</table>";
    return html;
  }
  function Kiir(id){
    document.getElementById(id).innerHTML = tombKiir(Feltolt());
  }
  function over(i, j) {
    id = i,toString();
    document.getElementById(id).style.backgroundColor = "red";
  }
  function leave(i, j) {
    id = i.tostring()
    document.getElementById(id).style.backgroundColor = "white";
  }