var szoveg = "Boci boci tarka";  
    var visszafele = "";  

    for(var i=szoveg.length-1; i >= 0 ; i--)
      {
        visszafele = visszafele + szoveg[i];
      }
      console.log(visszafele);
      var eredmeny = document.getElementById("eredm");
      eredmeny.innerHTML = visszafele;
    var tomb = ["lightblue", "pink", "yellow", "lightgreen"];    

    for(var i = 0; i < tomb.length; i++)
      {
        var listaelem = document.createElement('li');            
        listaelem.onclick = function() { document.body.style.backgroundColor = this.innerHTML; };  
        listaelem.innerHTML = tomb[i];                      
        document.getElementById("lista").appendChild(listaelem);     
      }
    var ember = {
      nev : "Kis Jani",
      cim : "Zöld utca 45",
      kedvenc: "körte"
      
    }
    var ember2 = {
      nev : "Nagy Panka Nóri",
      cim : "Dunakeszi Bruh utca 6",
      kedvenc: "tészta"
      
    }
    var ember3 = {

      nev : "Gec Imre",
      cim : "Budapest  Szent István út 8",
      kedvenc: "ismeretlen"
      
    }
    var emberek = [ember, ember2, ember3];

    for(var i= 0; i<emberek.length; i++ )
      {
        var listaelem = document.createElement('li');           
        listaelem.onclick = function() { document.getElementById("adat").innerHTML = emberek[i]["nev"] + emberek[i]["cim"] + emberek[i]["kedvenc"]  };  
        listaelem.innerHTML = emberek[i]["nev"];           
        document.getElementById("nev").appendChild(listaelem); 
      }