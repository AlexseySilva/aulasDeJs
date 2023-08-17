function menu() {



    opcao = parseInt(prompt(
        "------Menu principal------\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Vendedor \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do Sistema"
    ));


    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break
        case 2:
            cadastrar_vendedor();
            break
        case 3:
            cadastrar_produto();
            break
        default:
            alert("Finalizando o Sistema de Cadastro")
        // document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!</p>";
    }
}

function cadastrar_cliente() {
    let x = "n";
    cliente = "*- Relatório de Clientes -*<br> <br>"

    while (x.toUpperCase() != "S") {
    
        nome = prompt("Digite o nome do cliente");
        id = parseInt(prompt("Digite o id do cliente"));
        endereco = prompt("Digite o endereco do cliente");

        cliente = cliente + "id : " + id + "<br>" +
            "nome : " + nome.toUpperCase() + "<br>" +
            "endereco : " + endereco.toUpperCase() + "<br>" +
            "<br>+----------------------------+<br><br>"

        confirm = prompt("finalizar Cadastro? - S para sim ou N para não");

        if (confirm.toUpperCase() == "S") {
            x = "S"
        }
        document.getElementById("cliente").innerHTML = "<p>" + cliente + "</p>"
    }
}

//vendedor
function cadastrar_vendedor() {
    let x = "n";
    vendedor = "*- Relatório do vendedor -*<br> <br>"

    while (x.toUpperCase() != "S") {
        
        nome = prompt("Digite o nome do vendedor");
        id = parseInt(prompt("Digite o id do vendedor"));  
        endereco = prompt("Digite o endereco do vendedor");

        vendedor = vendedor + "id : " + id + "<br>" +
            "nome : " + nome.toUpperCase() + "<br>" +
            "endereco : " + endereco.toUpperCase() + "<br>" +
            "<br>+----------------------------+<br><br>"

        confirm = prompt("finalizar Cadastro? - S para sim ou N para não");

        if (confirm.toUpperCase() == "S") {
            x = "S"
        }
        document.getElementById("vendedor").innerHTML = "<p>" + vendedor + "</p>"
    }
}

//produto
function cadastrar_produto() {
    let x = "n";
    produto = "*- Relatório do produto -*<br> <br>"

    while (x.toUpperCase() != "S") {
        
        nome = prompt("Digite o nome do produto");
        id = parseInt(prompt("Digite o id do produto"));  
        valor = parseFloat(prompt("valor do produto"));

        produto = produto + "id : " + id + "<br>" +
            "nome : " + nome.toUpperCase() + "<br>" +
            "<blink>valor: " + valor.toFixed(2).replace(".", ",") + "<br></blink>" +
            "<br>+----------------------------+<br><br>"

        confirm = prompt("finalizar Cadastro? - S para sim ou N para não");

        if (confirm.toUpperCase() == "S") {
            x = "S"
        }
        document.getElementById("produto").innerHTML = "<p>" + produto + "</p>"
    }
}