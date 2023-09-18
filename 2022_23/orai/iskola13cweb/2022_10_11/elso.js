function changeInnerHTML() {
    let html="<table border='1'>"
    for (let i = 1; i <= 10; i++) {
        html +="<tr>" 
        for (let j = 1; j <= 10; j++) {    
            if (i+j-1 === 10) {
                html+= "<td class='piros'>"+ "1" +"</td>"  
            } else if (i === j) {
                html+= "<td id='"+i+j+"' onmouseover='over("+i+","+j+")' onmouseleave='leave("+i+","+j+")'>"+ "1" +"</td>"  
            } else {
                html+= "<td>"+ "0" +"</td>"        
            }
            
        }   
        html+="</tr>"
    }
    html+="</table>"

    document.getElementById("paragrafus").innerHTML = html 
}

function over(i,j) {
    id = i.toString()+j
    console.log(id)
    document.getElementById(id).style.backgroundColor='red'
}

function leave(i,j) {
    id = i.toString()+j
    console.log(id)
    document.getElementById(id).style.backgroundColor='white'
}