export default class Cl_empresa{
    constructor(){
        this.acMontoAdicional = 0;
    }

    procesarpersonal(pe){
        this.acMontoAdicional += pe.montoAdicional()
    }

    totalMontoAdicional(){
        return this.acMontoAdicional;
    }
}