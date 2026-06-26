const lotes =[] ;

function calcularArea(comprimento, largura){
    return comprimento * largura;
}

function calcularValor(area){
    return area * 550;
}

function calcularAdicional(valor){

    if(valor <= 20000){
    
    return "Isento";
    
    }
    
    else if(valor <= 100000){
    
    return valor * 0.05;
    
    }
    
    else if(valor <= 500000){
    
    return valor * 0.10;
    
    }
    
    else if(valor <= 1000000){
    
    return valor * 0.15;
    
    }
    
    else{
    
    return valor * 0.20;
    
    }
    
    }
    