const formulario = document.querySelector("form");
const Iusername = document.querySelector(".username");
const Isenha = document.querySelector(".senha");

function cadastrar() {
  fetch("http://localhost:8080/usuarios", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: Iusername.value,  // Use "username" em vez de "nome"
      senha: Isenha.value
    })
  })
  
  .then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Erro ao cadastrar usuário');
    }
  })
  .then(function (data) {
    console.log('Usuário cadastrado com sucesso', data);
  })
  .catch(function (error) {
    console.error('Erro ao cadastrar usuário', error);
  });
}

function limpar() {
  Iusername.value = "";  // Corrija o uso dos dois pontos ":" para atribuir valores
  Isenha.value = "";
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  cadastrar();
  limpar();
});
