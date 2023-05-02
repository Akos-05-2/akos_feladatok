Fiok = [{
    username: "Pisti",
    password: "Pistike",
    firstname: "Kis",
    lastname: "Pista",
    email: "kis.pista2005@gmail.com"
}];

function Ellenoriz(){
    let felnev = document.getElementById("fnev").value;
    let jelszo = document.getElementById("passw").value; 
    for (let i = 0; i < Fiok.length; i++) {
        if (Fiok[i].username == "" || Fiok[i].password == ""){
            continue;
        }
        if (Fiok[i].username != felnev){
            window.alert("Hibás felhasználónév!");
            break;
        }
        if (Fiok[i].password != jelszo){
            window.alert("Hibás jelszó!");
            break;
        }
        if (Fiok[i].username != felnev && Fiok[i].password != jelszo){
            window.alert("Hibás felhasználónév és jelszó, vagy nem létezik a felhasznáóli fiók!");
            break;
        }
        else{
            window.alert("Sikeres bejelentkezés!");
            window.open("index.html", "_self"); //mongodb ejs registration
            break;
        }
    }    
}

function Regisztral(){
    window.open("reg.html", "_self");
}

function Uj_felhasznalo(new_firstname, new_lastname, new_username, new_password, new_email){
    let felnev = document.getElementById("fnev").value;
    let jelszo = document.getElementById("passw").value; 
    new_firstname = document.getElementById("veznev").value;
    new_lastname = document.getElementById("kernev").value;
    new_email = document.getElementById("email").value;
    new_username = document.getElementById("fnev").value;
    new_password = document.getElementById("passw").value;
    let new_password_2 = document.getElementById("passw_valid").value;
    var felhasznalo = {firstname: new_firstname, lastname: new_lastname, username: new_username, password: new_password, email: new_email};
    Fiok.push(felhasznalo);
    for (let i = 0; i < Fiok.length; i++) {
        if (new_password != new_password_2){
            window.alert("A jelszavak nem egyeznek meg!");
            delete (Fiok[Fiok.length - 1]);
        }
        if (new_firstname == "" || new_lastname == "" || new_email == "" || new_username == "" || new_password == "" || new_password_2 == "" ){
        window.alert("Nem adott meg minden adatot!")
        delete (Fiok[Fiok.length - 1]);
        }
        if (Fiok[i] != Fiok){
            window.open("index.html", "_self");
        }
    }
    
    console.log(Fiok);
}