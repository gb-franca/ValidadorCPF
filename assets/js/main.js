function main(){
    const cpfInput = document.querySelector('#cpf');
    const validarBnt = document.querySelector('#validar');
    const resultadoP = document.querySelector('#resultado');

    validarBnt.addEventListener('click', () =>{
        console.log("Botão Apertado")
        const cpf = cpfInput.value

        if(validaCPF(cpf)){
            exibirResultado("CPF Válido!", "valido");
        } else {
            exibirResultado("CPF Inválido!", "invalido");
        }
    });

    function validaCPF(cpf){
        const cpfLimpo = cpf.replace(/[.\-]/g, '')

        if(cpfLimpo.length != 11 || /^(\d)\1{10}$/.test(cpfLimpo)){
            return false;
        }

        let soma = 0;
        for(let i = 0; i < 9; i++){
            soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
        };

        let resto = 11 - (soma % 11);
        let digitoVerificardor_1 = resto >= 10 ? 0 : resto;
        
        if(digitoVerificardor_1 != parseInt(cpfLimpo.charAt(9))){
            return false;
        }

        soma = 0
        for(let i = 0; i < 10; i++){
            soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
        }

        resto = 11 - (soma % 11);
        let digitoVerificardor_2 = resto >= 10 ? 0 : resto;

        if(digitoVerificardor_2 != parseInt(cpfLimpo.charAt(10))){
            return false;
        }

        return true;
    };

    function exibirResultado(mensagem, classe){
        resultadoP.textContent = mensagem;
        resultadoP.classList.remove('valido', 'invalido')
        resultadoP.classList.add(classe);
    };    
};

main();