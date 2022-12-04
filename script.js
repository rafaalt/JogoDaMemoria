
const cartas = document.querySelectorAll('.carta');
var cartasViradas = 0;
var valor1 = 0;
var valor2 = 0;
var i1 = 0;
var acertos = 0;

var vetor = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
for(let i = 0; i < cartas.length; i++){
    cartas[i].addEventListener('click', () => {
        inverterCarta(i);
    })
}
for(let i = cartas.length-1; i >= 0; i--){
    var aux = Math.floor(Math.random() * (i+1));
    var numCarta = vetor[aux];
    vetor.splice(aux,1);
    //cartas[i].setAttribute("src",`timesBR/time${numCarta}.png`);
    cartas[i].setAttribute("value",numCarta);
}

function reiniciar(){
    vetor = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    cartasViradas = 0;
    valor1 = 0;
    valor2 = 0;
    i1 = 0;
    acertos = 0;
    for(let i = cartas.length-1; i >= 0; i--){
        var aux = Math.floor(Math.random() * (i+1));
        var numCarta = vetor[aux];
        vetor.splice(aux,1);
        cartas[i].setAttribute("src",`timesBR/time0.png`);
        cartas[i].setAttribute("value",numCarta);
        cartas[i].style.visibility = "visible";
    }
}

function inverterCarta(i){
        if(i1 != i){
        if(cartasViradas<2){
        var valor = cartas[i].getAttribute("value");
        cartas[i].setAttribute("src",`timesBR/time${valor}.png`);
        cartasViradas++;
        if(cartasViradas == 2){
            setTimeout(function() {
                if(valor1 == valor){//Acertou
                    acertos++;
                    cartas[i1].style.visibility = "hidden";
                    cartas[i].style.visibility = "hidden";
                    cartas[i1].setAttribute("src",`timesBR/time0.png`);
                    cartas[i].setAttribute("src",`timesBR/time0.png`);
                    cartasViradas = 0;
                    valor1 = 0;
                    i1 = 0;
                    if(acertos==8){
                        alert("Parabens voce venceu!");
                        reiniciar();
                    }
                }
                else{
                    cartas[i1].setAttribute("src",`timesBR/time0.png`);
                    cartas[i].setAttribute("src",`timesBR/time0.png`);
                    cartasViradas = 0;
                    valor1 = 0;
                    i1 = 0;
                }
            }, 1000);
        }
        else{
            valor1 = valor;
            i1 = i;
        }
    }
}
}