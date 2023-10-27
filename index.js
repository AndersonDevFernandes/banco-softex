// Definindo o objeto "banco"
const banco = {
  conta: "",
  saldo: 0,
  tipoConta: "",
  agencia: "",

  // Função para buscar saldo e imprimir na tela
  buscarSaldo: function () {
    alert(`Saldo disponível na conta ${this.conta}: R$ ${this.saldo.toFixed(2)}`);
  },

  // Função para realizar um depósito
  deposito: function (valor) {
    this.saldo += valor;
    alert(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    this.buscarSaldo(); // Exibe o novo saldo
  },

  // Função para realizar um saque
  saque: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      alert(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
      this.buscarSaldo(); // Exibe o novo saldo
    } else {
      alert("Saldo insuficiente para realizar o saque.");
    }
  },

  // Função para solicitar o número da conta e imprimir na tela
  numeroDaConta: function () {
    alert(`Número da conta: ${this.conta}`);
  },
};

// Solicitar informações ao usuário através de prompts
banco.conta = prompt("Informe o número da conta:");
banco.tipoConta = prompt("Informe o tipo da conta:");
banco.agencia = prompt("Informe a agência:");

const opcao = prompt("Escolha uma operação:\n1. Buscar Saldo\n2. Realizar Depósito\n3. Realizar Saque\n4. Número da Conta");

if (opcao === "1") {
  banco.buscarSaldo();
} else if (opcao === "2") {
  const valorDeposito = parseFloat(prompt("Informe o valor do depósito:"));
  banco.deposito(valorDeposito);
} else if (opcao === "3") {
  const valorSaque = parseFloat(prompt("Informe o valor do saque:"));
  banco.saque(valorSaque);
} else if (opcao === "4") {
  banco.numeroDaConta();
} else {
  alert("Opção inválida");
}
