document.addEventListener("DOMContentLoaded", function() {
  const nomeDeUsuarioElement = document.getElementById("nomeDeUsuario");
  const alterarSenhaBtn = document.getElementById("alterarSenhaBtn");
  const alterarSenhaForm = document.getElementById("alterarSenhaForm");
  const salvarSenhaBtn = document.getElementById("salvarSenhaBtn");
  const username = localStorage.getItem('username');
  nomeDeUsuarioElement.textContent = username;
  alterarSenhaBtn.addEventListener("click", function() {
    alterarSenhaForm.style.display = "block";
    document.getElementById('alterarSenhaBtn').style.display = 'none';
  });

  salvarSenhaBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
    
    const novaSenha = document.getElementById("novaSenha").value;
    
    fetch(`http://localhost:8080/usuarios/${username}`, {
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
      .then(function(res) {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          return res.text().then(function(errorText) {
            throw new Error('Falha na autenticação');
          });
        } else {
          throw new Error('Erro');
        }
      })
      .then(function(data) {
        console.log('Sucesso', data);
        alterarSenhaForm.style.display = "none";
        document.getElementById('mensagem').style.display = 'block';
       
      })
      .catch(function(error) {
        console.error('Erro', error);
      });
      
  });
});
