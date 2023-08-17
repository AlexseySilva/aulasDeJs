/* Criando a função MENU */
function menu() {



    opcao = parseInt(prompt(
        "------Menu principal------\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do Sistema"
    ));


    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break
        case 2:
            cadastrar_colaborador();
            break
        case 3:
            cadastrar_produto();
            break
        default:
            alert("Finalizando o Sistema de Cadastro");
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!</p>";
    }
}
/* Função cadastrar Cliente */

function cadastrar_cliente() {
    let x = 'n';
    relatorio = "*- Relatório de Clientes -*<br><br>";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do cliente"));
        nome = prompt("Digite o nome do cliente");
        endereco = prompt("Digite o endereço do cliente");
        relatorio = relatorio + "iD: " + id + "<br>" +
            "Nome: " + nome + "<br>" +
            "Endereço: " + endereco + "<br>" +
            "<br>+----------------------+<br>"
        confirme = prompt("Finalizar cadastro S - para sim ou N - para não?");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        }/* else{
            break
        } */
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";
    }

}            /* Colaborador */
/* id nome função */
function cadastrar_colaborador() {
    let x = 'n';
    colaboradores = "*- Relatório de Colaboradores -*<br><br>";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do Colaborador"));
        nome = prompt("Digite o nome do Colaborador");
        funcao = prompt("Digite o endereço do Colaborador");
        salario = prompt("Digite o Salario do Colaborador");
        colaboradores = colaboradores + "iD: " + id + "<br>" +
            "Nome: " + nome + "<br>" +
            "Endereço: " + funcao + "<br>" +
            "Salrio" + salario + "<br>"
        "<br>+----------------------+<br>"
        confirme = prompt("Finalizar cadastro S - para sim ou N - para não?");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        }
        document.getElementById("colaborador").innerHTML = "<p>" + colaboradores + "</p>";
    }
}

                            /*Produto  */

function cadastrar_produto() {
    let x = 'n';
    produto = "*- Relatório de produto -*<br><br>";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do Produto"));
        nome = prompt("Digite o nome do Produto");
        validade = prompt("Digite a validade do produto");
        produto = produto + "iD: " + id + "<br>" +
            "Nome: " + nome + "<br>" +
            "Endereço: " + validade + "<br>" +
        "<br>+----------------------+<br>"
        confirme = prompt("Finalizar cadastro S - para sim ou N - para não?");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        }
        document.getElementById("produto").innerHTML = "<p>" + produto + "</p>";
    }
}
