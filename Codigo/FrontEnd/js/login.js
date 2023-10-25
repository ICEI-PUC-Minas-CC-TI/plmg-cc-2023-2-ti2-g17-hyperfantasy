const formulario = document.querySelector("form");
const Iusername = document.querySelector(".username");
const Isenha = document.querySelector(".senha");


function limpar() {
  Iusername.value = "";
  Isenha.value = "";
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
      window.location.href = '/home/index3.html';
    })
    .catch(function (error) {
      console.error('Erro ao fazer login', error);
    });
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  login();
  localStorage.setItem('username',Iusername.value);
  limpar();
  document.getElementById('mensagemErroU').style.display = 'none';
});
