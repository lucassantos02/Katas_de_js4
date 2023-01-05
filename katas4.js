let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: [],
};

  
function normalizarDados(pessoa) {
    pessoa.nome = pessoa.nome.charAt(0).toUpperCase() + pessoa.nome.slice(1);
    pessoa.nomeDeUsuario = pessoa.nomeDeUsuario.toLowerCase();
    return pessoa;
};
console.log(normalizarDados(pessoa));
 
  
function criarListaDeUsuario(pessoa) {
    let listaDeUsuario = [];
    let data = new Date();
    let idade = 2023 - pessoa.anoNascimento;
    if (idade >= 18) {
      listaDeUsuario.push(pessoa);
    };
    return listaDeUsuario;
};
console.log(criarListaDeUsuario(pessoa));

function calcularVale(pessoa) {
    let valorDoLitro = 6.99;
    let distanciaTrab = 0;
    let valorEmReais = "";
    pessoa.valeCombustivel = 0;
    if (pessoa.temCarro == true) {
      distanciaTrab = parseInt(pessoa.distanciaDoTrabalho.slice(0, -2));
      pessoa.valeCombustivel = distanciaTrab * valorDoLitro * 0.7;
      if (distanciaTrab >= 100) {
        pessoa.valeCombustivel += 15;
      };
    };
    valorEmReais = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(pessoa.valeCombustivel.toFixed(2));
    return valorEmReais;
};
console.log(calcularVale(pessoa));
  
let endereco = {
    cidade: "Curitiba",
    logradouro: "Rua Dali",
    numero: 10,
    tipo: [],
};
  
function atualizarEndereco(residencia, estado) {
    endereco.tipo.push(residencia);
    endereco.estado = estado;
    return endereco;
};
console.log(atualizarEndereco("casa", "Paraná"));
  
  
function adicionarEnderecoEmPessoa(pessoa, endereco) {
    pessoa.endereco.push(endereco);
    return pessoa;
};
console.log(adicionarEnderecoEmPessoa(pessoa, endereco));