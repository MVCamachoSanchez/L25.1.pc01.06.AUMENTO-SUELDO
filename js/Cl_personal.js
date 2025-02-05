export default  class Cl_personal{
    constructor(nombre, tipo, gana){
        this.nombre = nombre;
        this.tipo = tipo;
        this.gana = gana;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
    }

    set gana(gana){
        this._gana = gana;
    }
    get gana(){
        return this._gana;
    }

    montoAdicional(){
        if(this.tipo === 1){
            return this.gana * 0.2;
        }
        else{
            return this.gana * 0.1; 
        }
    }
}