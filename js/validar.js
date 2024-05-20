//criando os objetos dos elementos de texto do form

var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");


/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco do campo inputName mude, será chamada a função validarNome*/
nome.addEventListener('focusout', validarNome);

/*declaração tradicional de função validarNome(e)
'e' é o objeto do tipo evento que contém, alpem de outras propriedades, o objeto que iniciou o evento,
neste caso o objeto 'nome'
*/


function validarNome(e) {
    const nomeValue = e.target.value.trim();

    if (nomeValue.length < 6) {
        nomeHelp.textContent = "Nome inválido";
        nomeHelp.style.color = "red";
    } else if (/\d/.test(nomeValue)) {
        nomeHelp.textContent = "Nome inválido";
        nomeHelp.style.color = "red";
    } else {
        nomeHelp.textContent = "";
    }
}

const emailInput = document.getElementById("inputEmail");
const emailHelp = document.getElementById("inputEmailHelp");

emailInput.addEventListener('focusout', validarEmail);

function validarEmail(e) {
    const emailValue = e.target.value.trim();

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|br|net|org)$/.test(emailValue)) {
        emailHelp.textContent = "Formato de email inválido";
        emailHelp.style.color = "red";
    } else {
        emailHelp.textContent = "";
    }
}



//declaração de função de forma anônima usando uma expressão de função de seta =>

ano.addEventListener('focusout', () => {
    const regexAno = /^[0-9]{4}$/;
    const anoTrimado = ano.value.trim();

    if (!anoTrimado.match(regexAno)) {
        anoHelp.textContent = "Ano inválido";
        anoHelp.style.color = "red";
    } else {
        const anoNascimento = parseInt(anoTrimado);


        if (anoNascimento < 1900 || anoNascimento > 2022) {
            anoHelp.textContent = `Ano inválido`;
            anoHelp.style.color = "red";
        } else {
            anoHelp.textContent = "";
        }
    }
});

const senhaInput = document.getElementById("inputPassword");
const senhaHelp = document.getElementById("inputPasswordHelp");
const nomeUsuarioInput = document.getElementById("inputName");
const anoNascimentoInput = document.getElementById("inputYear");

senhaInput.addEventListener('input', () => {
    const senha = senhaInput.value;
    const nomeUsuario = nomeUsuarioInput.value.toLowerCase();
    const anoNascimento = anoNascimentoInput.value;

    if (senha.length <= 6 || senha.length >= 20) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
        return;
    } else if (!/\d/.test(senha)) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
        return;
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha)) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
    } else if (!/[a-zA-Z]/.test(senha)) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
    } else if (nomeUsuario && senha.toLowerCase().includes(nomeUsuario)) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
    } else if (anoNascimento && senha.includes(anoNascimento)) {
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color = "red";
    } else {
        if (senha.length < 8 || (!/[A-Z]/.test(senha) && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha) && !/\d/.test(senha))) {
            senhaHelp.textContent = "SENHA FRACA";
            senhaHelp.style.color = "#d8510c";
            passStrengthMeter.value = 10;
        } else if (senha.length > 8 && senha.length <= 12 && /[A-Z]/.test(senha) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha) && /\d/.test(senha)) {
            senhaHelp.textContent = "SENHA MODERADA";
            senhaHelp.style.color = "#ecd633";
            passStrengthMeter.value = 20;
        } else if (senha.length > 12 && senha.match(/[A-Z]/g).length > 1 && senha.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g).length > 1 && senha.match(/\d/g).length > 1) {
            senhaHelp.textContent = "SENHA FORTE";
            senhaHelp.style.color = "#05d614";
            passStrengthMeter.value = 30;
        }
    }

    const submitButton = document.querySelector(".btn.btn-primary");

    submitButton.addEventListener('click', function(e) {
    
        e.preventDefault();
        
        if (nomeHelp.textContent === "" && emailHelp.textContent === "" && anoHelp.textContent === "" && senhaHelp.textContent === "") {
            alert("Seus dados foram registrados");
        } else {
            alert("Seus dados não foram registrados");
        }
    });

    
});


