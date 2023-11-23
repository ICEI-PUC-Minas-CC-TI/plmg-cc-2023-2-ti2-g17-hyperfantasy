document.addEventListener("DOMContentLoaded", function() {
  const deletarContaBtn = document.getElementById("deletarContaBtn");
  const deletarContaForm = document.getElementById("deletarContaForm");
  const confirmarBtn = document.getElementById("confirmarBtn");
  const username = localStorage.getItem('username');
  
  //PARTE REFERENTE A EXCLUSAO DE CONTA
  deletarContaBtn.addEventListener("click", function() {
    deletarContaForm.style.display = "block";
    alterarSenhaForm.style.display = "none";
    deletarContaBtn.style.display = 'none';
    alterarSenhaBtn.style.display = 'none';
  });

  confirmarBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const confirmarSenhaInput = document.querySelector(".confirmarSenha");
    
  
      fetch("http://localhost:8081/usuarios/login", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      senha: confirmarSenhaInput.value,
    })
  })
  .then(function (res) {
    if (res.ok) {
      document.getElementById('mensagemSenhaIncorreta').style.display = 'none';
      return res.json();
    } else if (res.status === 401) {
      document.getElementById('mensagemSenhaIncorreta').style.display = 'block';
      return res.text().then(function (errorText) {
        throw new Error('Falha na autenticação');
      });
    } else {
      throw new Error('Erro');
    }
  })
  .then(function (data) {
    const usernameToDelete = data.username; 
    console.log(usernameToDelete);

    const deleteUrl = `http://localhost:8081/usuarios/excluir/${encodeURI(usernameToDelete)}`;

    return fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
   
    });
  })
  .then(function (deleteRes) {
    if (deleteRes.ok) {
      alert('Volte sempre que desejar');
      window.location.href = '/index.html';
      return deleteRes.json();
      
    } else if (deleteRes.status == 500) {
      document.getElementById('mensagemSenhaIncorreta').style.display = 'none';
       alert('Exclua seus personagens antes de excluir a conta');
      return deleteRes.text().then(function (errorText) {
        throw new Error('Falha na autenticação');
      });
    }
  })
  .catch(function (error) {
    console.error('Erro ao fazer login ou excluir usuário', error);
  });
  });
  
  
//PARTE REFERENTE A ALTERAÇAO DE SENHA
  const nomeDeUsuarioElement = document.getElementById("nomeDeUsuario");
  const alterarSenhaBtn = document.getElementById("alterarSenhaBtn");
  const alterarSenhaForm = document.getElementById("alterarSenhaForm");
  const salvarSenhaBtn = document.getElementById("salvarSenhaBtn");
  nomeDeUsuarioElement.textContent = username;

  alterarSenhaBtn.addEventListener("click", function() {
    alterarSenhaForm.style.display = "block";
    deletarContaBtn.style.display = 'none';
    alterarSenhaBtn.style.display = 'none';
  });
  salvarSenhaBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const novaSenha = document.getElementById("novaSenha").value;
    if (novaSenha.trim()!== '') {
    fetch(`http://localhost:8081/usuarios/${username}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        senha: novaSenha,
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Sucesso', data);
        alterarSenhaForm.style.display = "none";
        document.getElementById('mensagem').style.display = 'block';
        deletarContaBtn.style.display = 'block';
      })
      .catch(error => {
        console.error('Erro', error);
      });
      }
      else{
        alert('Por favor, preencha o campo antes de prosseguir.');
      }
  });

});
//PARTE REFERENTE A EXIBIÇAO DE PERSONAGENS
function listarPersonagens(username) {
  const url = `http://localhost:8080/personagem/${username}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const personagensContainer = document.getElementById('personagens-container');
      if (data.length > 0) {
        data.forEach(personagem => {
          const anchor = document.createElement('a');
          anchor.style.display = 'block';
          anchor.style.padding = '20px';
          anchor.style.backgroundColor = ' #bebebe';
          anchor.style.textDecoration = 'none';
          anchor.style.color = 'none';
          anchor.style.border = '1px solid #ccc';
          anchor.style.borderRadius = '5px';
          anchor.style.transition = 'background-color 0.3s';
          anchor.style.width = '200px';
          anchor.style.marginBottom = '20px';
          anchor.classList.add('personagem-link');
          anchor.href = `detalhesPersonagem.html?id=${personagem.id}`;
          anchor.textContent = `${personagem.nome}`;
          anchor.addEventListener('click', function (event) {
            event.preventDefault(); 
            window.location.href = anchor.href; 
          });
          anchor.addEventListener('mouseover', () => {
            anchor.style.backgroundColor = '#e0e0e0';
          });
          anchor.addEventListener('mouseout', () => {
            anchor.style.backgroundColor = '#f0f0f0';
          });
          personagensContainer.appendChild(anchor);
        });
      } else {
        console.log("Sem personagens");
      }
    })
    .catch(error => {
      console.error('Erro ao buscar personagens:', error);
    });
}
function excluirPersonagem(personagemId) {
  const url = `http://localhost:8080/personagem/excluir/${personagemId}`;
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
          alert('Personagem excluido com sucesso!');
          window.location.reload();
          
      } else {
        console.error('Erro ao excluir personagem');
      }
    })
    .catch(error => {
      console.error('Erro ao fazer solicitação de exclusão:', error);
    });
}
function editarPersonagem(personagemId) {
  window.location.href = 'MeusPersonagens/index2.html'
  const url = `http://localhost:8080/personagem/excluir/${personagemId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
          alert('Personagem excluido com sucesso!');
          window.location.href = '/index.html';
          
      } else {
        console.error('Erro ao excluir personagem');
      }
    })
    .catch(error => {
      console.error('Erro ao fazer solicitação de exclusão:', error);
    });
}
listarPersonagens(localStorage.getItem('username'));
