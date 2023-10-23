const formulario = document.querySelector("form");
const Iusername = document.querySelector(".username");
const Isenha = document.querySelector(".senha");
let detalhesUsernameElement;
let detalhesSenhaElement;

function limpar() {
  Iusername.value = "";
  Isenha.value = "";
}

function loadExternalHTML() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'MeusPersonagens/index2.html', true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(xhr.responseText, 'text/html');
      // Verifique se os elementos existem no documento antes de atribuir valores
      var detalhesUsername = doc.getElementById('detalhes-username');
      var detalhesSenha = doc.getElementById('detalhes-senha');

      if (detalhesUsername && detalhesSenha) {
        detalhesUsername.value = Iusername;
        detalhesSenha.value = Isenha;
      } else {
        console.error('Os elementos "detalhes-username" e/ou "detalhes-senha" não foram encontrados no documento.');
      }
    } else {
      console.error('Erro ao carregar o arquivo externo.');
    }
  };
  xhr.send();
}

function login() {
  fetch("http://localhost:8080/usuarios/login", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: Iusername.value,
      senha: Isenha.value,
    })
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else if (res.status === 401) {
        document.getElementById('mensagemErroU').style.display = 'block';
        return res.text().then(function (errorText) {
          throw new Error('Falha na autenticação');
        });
      } else {
        throw new Error('Erro');
      }
    })
    .then(function (data) {
      console.log('Sucesso', data);
      loadExternalHTML();
      window.location.href = '/home/index3.html';
    })
    .catch(function (error) {
      console.error('Erro ao fazer login', error);
    });
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  login();
  limpar();
  document.getElementById('mensagemErroU').style.display = 'none';
});
