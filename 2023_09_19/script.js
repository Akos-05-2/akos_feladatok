class Jarmu{
    constructor (marka, sebesseg = 0){
        this._marka = marka;
        this._sebesseg = sebesseg;
        this.utasok = [];
    }
    utasokFelvesz(utasNeve){
        if (typeof(utasNeve) === 'string'){
            this.utasok.push(utasNeve);
        }
    }
    info(){
        console.log(`${this._marka} márkájú jármű, melynek sebessége ${this.sebesseg} km/h és ${this.utasok.length} utast szállít`)
    }
    get sebesseg() {
        return this._sebesseg;
    }
    set sebesseg(ujErtek){
        if (typeof(ujErtek) === 'number' && ujErtek >= 0){
        this._sebesseg = ujErtek;
        }
        else{
            console.log(`Hibás érték: ${ujErtek}, csak nullánál nagyobb szám lehet`);
        }
    }
    get marka() {
        return this._marka;
    }
    set marka(ujMarka){
        this._marka = ujMarka;
    }
}

class Auto extends Jarmu{
    constructor (marka, sebesseg = 0, onvezeto = false){
        super(marka, sebesseg);
        this.onvezeto = onvezeto;
    }
    info(){
        console.log(`${this._marka} márkájú jármű, melynek sebessége ${this.sebesseg} km/h, ${this.utasok.length} utast szállít, önvezető: ${this.onvezeto? 'igen' : 'nem'}`);
    }
    dudal(){
        console.log('Duda');
    }
}

jarmu = new Jarmu("Skoda", 12);
jarmu.utasokFelvesz('Kiss Elemér');
jarmu.sebesseg = 60;
console.log(jarmu.marka);
jarmu.info();

const auto1 = new Auto("Trabant", 40, false);
const auto2 = new Auto("Tesla", 250, true);
auto1.utasokFelvesz('Bill Gates');
auto2.utasokFelvesz('Elon Musk');
auto1.dudal();
auto1.info();
auto2.info();

console.log(jarmu instanceof Jarmu);
console.log(auto1 instanceof Auto);
