// 15
let question = Number(prompt('Digite a quantidade de quilos'));

function mostrarKg() {
    return question;
}
console.log('Você tem', mostrarKg(), 'kg');

if (question > 50) {
    function mostrarExcesso() {
        return question - 50;
    }
    console.log('Você passou do limite', mostrarExcesso(), 'kg');
    
    function valorMulta() {
        return mostrarExcesso() * 4;
    }
    console.log('Sua multa é de', valorMulta(), 'R$');
    
} else {
    console.log('Peso permitido');
}

