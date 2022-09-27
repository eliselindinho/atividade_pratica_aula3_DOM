let nomeUsuario = document.getElementById("nome-usuario");
let feedbackNomePositivo = document.getElementById("feedback-positivo");
let feedbackNomeNegativo = document.getElementById("feedback-negativo");

let sobrenomeUsuario = document.getElementById("sobrenome-usuario");
let feedbackSobrenomePositivo = document.getElementById("feedback-positivo");
let feedbackSobrenomeNegativo = document.getElementById("feedback-negativo");

let CpfUsuario = document.getElementById("cpf-usuario");
let feedbackPositivo = document.getElementById("feedback-positivo");
let feedbackNegativo = document.getElementById("feedback-negativo");

let validaCpf = (cpfRecebido) => {
  console.log(cpfRecebido.value.length);
  if (cpfRecebido.value.length == 11) {
    feedbackNegativo.setAttribute("hidden", "true");
    feedbackPositivo.removeAttribute("hidden");
  } else {
    feedbackPositivo.setAttribute("hidden", "true");
    feedbackNegativo.removeAttribute("hidden");
  }
};

let botaoValida = document.getElementById("botao-valida");
botaoValida.onclick = () => {
  validaCpf(CpfUsuario);
};
