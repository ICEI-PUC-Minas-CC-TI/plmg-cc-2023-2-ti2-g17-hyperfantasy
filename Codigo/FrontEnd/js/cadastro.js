const formulario = document.querySelector("form");
const Iusername = document.querySelector(".username");
const Isenha = document.querySelector(".senha");
const IconfirmarSenha = document.querySelector(".confirmar-senha"); 

function limpar() {
  Isenha.value = "";
  IconfirmarSenha.value = "";
}
function cadastrar() {
  const senha = Isenha.value;
  const confirmarSenha = IconfirmarSenha.value;

  if (senha !== confirmarSenha) {
    document.getElementById('mensagemErro').style.display = 'block';
    return;
  } 
  if (senha.length < 4) {
    document.getElementById('mensagemErroComprimento').style.display = 'block';
    return; 
  }
else {
    document.getElementById('mensagemErro').style.display = 'none';
    fetch("http://localhost:8081/usuarios", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: Iusername.value,
        senha: senha,
      })
    })
    .then(function (res) {
      if (res.ok) {
        
        return res.json();
      } else if (res.status === 409) { 
        document.getElementById('mensagemErroU').style.display = 'block';
        return res.text().then(function (errorText) {
          Iusername.value = "";
          throw new Error('Nome de usuário indisponível');
        });
      } else {
        throw new Error('Erro ao cadastrar usuário');
      }
    })
    .then(function (data) {
      console.log('Usuário cadastrado com sucesso', data);
      Iusername.value = '';
      Isenha.value = '';
      IconfirmarSenha.value = '';
      window.location.href = 'index.html';
    })
    .catch(function (error) {
      console.error('Erro ao cadastrar usuário', error);
    });
  }
}
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  limpar();
  document.getElementById('mensagemErroU').style.display = 'none';
  
});
