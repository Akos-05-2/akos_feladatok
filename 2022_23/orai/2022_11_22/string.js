function Kiir(szoveg){
    document.getElementById("eredmeny").innerHTML += szoveg + "</br>";
    
}
var szoveg = "Orbán Viktor bolitikus";
var szovegtomb = "1,2,3,4,5"

function tombKiir(tomb){
    tomb.forEach(element => {
        
    });
}

function Tomb(szamsorozat){
    let osszeg = 0;
       szamsorozat.forEach(element => {
        osszeg += element;
       });
       return osszeg;
}

function Csinald(szamsorozat){
    //Kiir(szoveg.length);
    //Kiir(szoveg.substring(5));
    //Kiir(szoveg.substring(-5, 15));
    //Kiir(szoveg.replace("Maci", "Macika"));
    //Kiir(szoveg.concat(" ", ["buborék", "fdthálidsfélizsdtgoifxhyd-lkrghjfslégháefgéOQWSIHgzurádxp"]));
    //Kiir(szoveg.charAt(8));
    //tombKiir(szoveg.split(" "));
    //Kiir(szoveg.toLocaleLowerCase());
    //Kiir(szoveg.toLocaleUpperCase());
    //Kiir(szoveg.trim());
    Kiir(szoveg.replaceAll("b", "B" && "c", "C"));
   
    
    
    
    
}