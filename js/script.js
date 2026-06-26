const lotes =[];
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

    const form = document.getElementById("formLote");

form.addEventListener("submit", function(event){

event.preventDefault();

const descricao = document.getElementById("descricao").value;

const comprimento = Number(document.getElementById("comprimento").value);

const largura = Number(document.getElementById("largura").value);

const area = calcularArea(comprimento, largura);

const valor = calcularValor(area);

const adicional = calcularAdicional(valor);

const lote = {

descricao,

comprimento,

largura,

area,

valor,

adicional

};

lotes.push(lote);

mostrarLotes();

form.reset();

});

function mostrarLotes(){

    const lista = document.getElementById("lista");
    
    lista.innerHTML = "";
    
    for(let lote of lotes){
    
    lista.innerHTML += `
    
    <div class="card">
    
    <h3>${lote.descricao}</h3>
    
    <p>Comprimento: ${lote.comprimento} m</p>
    
    <p>Largura: ${lote.largura} m</p>
    
    <p>Área: ${lote.area} m²</p>
    
    <p>Valor do lote: R$ ${lote.valor.toFixed(2)}</p>
    
    <p>Valor adicional:
    ${lote.adicional === "Isento"
    ? "Isento"
    : "R$ " + lote.adicional.toFixed(2)}
    </p>
    
    </div>
    
    `;
    
    }
    
    }