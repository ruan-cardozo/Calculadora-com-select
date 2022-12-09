let op = function() {
    alert("Escolha uma opção antes");
} 

function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function div(num1, num2) {
        if(num1==0){
            return 0;
        }
    if(num2 == 0){
        return "Erro divisão por zero";
    }else {
        return num1 / num2;
    }
}

function operation() {
    const answer = document.getElementById('answer');
    const select = document.getElementById('operation');

    const selectedOperation = select.selectedIndex;

    switch (selectedOperation) {
        case 0:
            answer.innerText = 'Adição';
            op = sum;
            break;
        case 1:
            answer.innerText = 'Subtração';
            op = sub;
            break;
        case 2:
            answer.innerText = 'Multiplicação';
            op = mult;
            break;
        case 3:
            answer.innerText = 'Divisão';
            op = div;
            break;
        default:
            break;
    }
}

function calculate() {
    // referências aos elementos
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const answer = document.getElementById('answer');

    // valores dos inputs
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const resp = op(num1, num2);

    answer.innerText = resp;
}