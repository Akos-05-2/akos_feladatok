window.addEventListener('DOMContentLoaded', () => {
    const mezok = Array.from(document.querySelectorAll('.tile')); 
    const jatekosHely = document.querySelector('.display-player'); 
    const torlesGomb = document.querySelector('#reset'); 
    const jelento = document.querySelector('.announcer');
    
    let tabla = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']; 
    let jatekos = 'X'; 
    let aktiv = true; 
    let dbx = 0;
    let dbo = 0;
    let dbdontetlen = 0;

    const jatekosX_gyoz = 'jatekosX_gyoz'; 
    const jatekosO_gyoz = 'jatekosO_gyoz'; 
    const dontetlen = 'Döntetlen'; 

    const gyozelem = [ 
        [0, 1, 2, 3], 
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],

        [0, 4, 8, 12], 
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],

        [0, 5, 10, 15], 
        [3, 6, 9, 12]

    ];

    function eldontes() { 
        let megnyerve = false;
        let lehetoseg1 = 4;
        for (let i = 0; i <= 9; i++) { 
            const gyoz_lehetoseg = gyozelem[i]; 
            const a = tabla[gyoz_lehetoseg[0]];
            const b = tabla[gyoz_lehetoseg[1]];
            const c = tabla[gyoz_lehetoseg[2]];
            const d = tabla[gyoz_lehetoseg[3]];
            if (a === '' || b === '' || c === '' || d === '' ) { 
                continue;
            }
            if (a === b && b === c && c === d) { 
                megnyerve = true;
                break;
            }
            if (tabla.includes(a) || tabla.includes(b) || tabla.includes(c) || tabla.includes(d)){
                lehetoseg1--;
                if (lehetoseg1 == 0){
                    jelents(dontetlen);
                    aktiv = false;
                    window.alert(dbx + " - " + dbo + " a döntetlenek száma: " + dbdontetlen)
                    return;
                }
            }
        }

    if (megnyerve) { 
            jelents(jatekos === 'X' ? jatekosX_gyoz : jatekosO_gyoz);
            aktiv = false;
            if (jatekos === 'X'){
                window.alert(dbx + " - " + dbo + " a döntetlenek száma: " + dbdontetlen);
            }
            else{
                window.alert(dbx + " - " + dbo + " a döntetlenek száma: " + dbdontetlen);
            }
            return;
        }

    if (!tabla.includes('')){ 
        jelents(dontetlen);
        aktiv = false;
        window.alert(dbx + " - " + dbo + " a döntetlenek száma: " + dbdontetlen)
        return;
    }
    
    }

    const jelents = (type) => { 
        switch(type){
            case jatekosO_gyoz:
                jelento.innerHTML = ' <span class="playerO">O</span> játékos  nyert';
                dbo++;
                break;
            case jatekosX_gyoz:
                jelento.innerHTML = '<span class="playerX">X</span> játékos  nyert';
                dbx++;
                break;
            case dontetlen:
                jelento.innerText = 'Döntetlen';
                
                break;
        }
        jelento.classList.remove('hide');
    };

    const ellenorzes = (mezo) => { 
        if (mezo.innerText === 'X' || mezo.innerText === 'O'){
            return false;
        }

        return true;
    };

    const frissit =  (index) => { 
        tabla[index] = jatekos;
    }

    const kovetkezik = () => { 
        jatekosHely.classList.remove(`player${jatekos}`);
        jatekos = jatekos === 'X' ? 'O' : 'X';
        jatekosHely.innerText = jatekos;
        jatekosHely.classList.add(`player${jatekos}`);
    }

    const aktivitas = (mezo, index) => { 
        if(ellenorzes(mezo) && aktiv) {
            mezo.innerText = jatekos;
            mezo.classList.add(`player${jatekos}`);
            frissit(index);
            eldontes();
            kovetkezik();
        }
    }
    
    const torles = () => { 
        tabla = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        aktiv = true;
        jelento.classList.add('hide');

        if (jatekos === 'O') {
            kovetkezik();
        }

        mezok.forEach(mezo => {
            mezo.innerText = '';
            mezo.classList.remove('playerX');
            mezo.classList.remove('playerO');
        });
    }

    mezok.forEach( (mezo, index) => { 
        mezo.addEventListener('click', () => aktivitas(mezo, index));
    });

    torlesGomb.addEventListener('click', torles); 
});