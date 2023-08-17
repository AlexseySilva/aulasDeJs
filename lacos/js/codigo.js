/*FOR([inicializacao];[condicao1];[expressao final]){
    declaracao
}
*/
 let valor = ''
 let valor2 = parseInt(prompt("Digite o valor: "))
 /*
for (let i = 0; i <= 10; i++) {
    valor += i + "<br>"
    resposta.innerHTML = valor;

} */

/* for (let i = 0; i <= 10; i++) {
    valor += i*2 + "<br>"
    resposta.innerHTML = valor;

} */
for (let i = 0; i <= 10; i++) {
    valor += i + ' X ' +valor2 + " = " + i*valor2 + "<br>"
    resposta.innerHTML = valor;

}