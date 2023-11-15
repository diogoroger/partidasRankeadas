

function calculoVitorias(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

let vitorias = 16;
let derrotas = 3;
let nivel;

let saldoVitorias = calculoVitorias(vitorias, derrotas);

if (vitorias <= 10 ){
    nivel = "Ferro";
     }
    if (saldoVitorias >= 11 && saldoVitorias <=20){
    nivel = "Bronze";
     }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50 ){
    nivel = "Prata";
     }
    else if (saldoVitorias >= 51  &&  saldoVitorias <= 80 ){
    nivel = "Ouro";
     }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90 ){
    nivel = "Diamante";
     }
     else if (saldoVitorias >= 91 && saldoVitorias <= 100 ){
    nivel = "Lendário";
     }
    else if  ( saldoVitorias >= 101){
    nivel = "Imortal";
    }
    

   

  console.log("O herói tem saldo de " + saldoVitorias )
  console.log(" O heroi está no nível " + nivel)