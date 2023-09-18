

function feltolt() {
    let tobbDimTomb=[]    
    for (let i = 0; i < 10; i++) {
        let sor = []
        for (let j = 0; j < 10; j++) {
            if (i+j === 9) {
                sor[j] = "<td id='"+i+j+"' onmouseover='over("+i+","+j+")' onmouseleave='leave("+i+","+j+")'>"+ "1" +"</td>"  
            } else if (i === j) {
                sor[j]= "<td id='"+i+j+"' onmouseover='over("+i+","+j+")' onmouseleave='leave("+i+","+j+")'>"+ "1" +"</td>"  
            } else {
                sor[j]= "<td>"+ "0" +"</td>"        
            }
        }
        tobbDimTomb.push(sor)
    }
    return tobbDimTomb
}

function tombKiir(tobbDimTomb) {
    html = "<table>"
    for (let i = 0; i < 10 ;i++) {
        html+="<tr>"
        for (let j = 0; j < 10 ;j++) {
            html+=tobbDimTomb[i][j]
        }
        html+="</tr>"
    }  
    html += "</table>"
    return html;
}
function kiir(id) {
    document.getElementById(id).innerHTML = tombKiir(feltolt())
}
function over(i,j) {
    id = i.toString()+j
    document.getElementById(id).style.backgroundColor='red'
}

function leave(i,j) {
    id = i.toString()+j
    document.getElementById(id).style.backgroundColor='white'
}
