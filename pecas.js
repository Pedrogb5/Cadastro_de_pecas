var lista_pecas = ["Peca 1", "Peca 2", "Peca 3", "Peca 4"]
var input = window.prompt("Digite o nome da peca: ")
var peso_peca = parseFloat(window.prompt("Digite o peso da peca: "))

if (lista_pecas.length > 10) {
    console.log("Cadastro nao aplicado: limite maximo de pecas atingido")
}
else {
    if (peso_peca <= 60){
      lista_pecas.push(input)
      console.log("Cadastro bem sucedido")
      console.log(lista_pecas)
    }
    else {
        console.log("Cadastro nao aplicado: a peca excede o limite de peso")
    }
}


