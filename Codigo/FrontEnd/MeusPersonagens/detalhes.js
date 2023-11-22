
document.addEventListener('DOMContentLoaded', function () {
    
       //PARTE REFERENTE A ALTERAÇAO DE SENHA
    const salvar = document.getElementById("salvar");
    const urlParams = new URLSearchParams(window.location.search);
    const id= urlParams.get('id');
    
    if (id) {
        const detalhesUrl = `http://localhost:8080/personagem/busca/${id}`;

        fetch(detalhesUrl)
            .then(response => response.json())
            .then(personagem => {
                console.log(personagem); 
                preencherFormulario(personagem);
            })
            .catch(error => {
                console.error('Erro ao obter detalhes do personagem:', error);
            });
    }
   
    //////////salvar
  salvar.addEventListener("click", function(event) {
    event.preventDefault();
    const njogador = document.getElementById('jogador').value;
    const nnome = document.getElementById('nome').value;
    const nocupacao = document.getElementById('ocupacao').value;
    const nnivel = document.getElementById('nivel').value;
    const nsexo = document.getElementById('sexo').value;
    const nlNascimento = document.getElementById('lNascimento').value;
    const nlResidencia = document.getElementById('lResidencia').value;
    const nnomeC = document.getElementById('nomeC').value;
    const nhabilidade = document.getElementById('habilidade').value;
    const nnomeM = document.getElementById('nomeM').value;
    const nmana = document.getElementById('mana').value;
    const ndescricaoM = document.getElementById('descricaoM').value;
    const nforca = document.getElementById('forca').value;
    const nagilidade = document.getElementById('agilidade').value;
    const ninteligencia = document.getElementById('inteligencia').value;
    const nreflexos = document.getElementById('reflexos').value;

// Verificar se algum dos campos está vazio
    if (
    nnome.trim() !== '' &&
    nocupacao.trim() !== '' &&
    nnivel.trim() !== '' &&
    nsexo.trim() !== '' &&
    nlNascimento.trim() !== '' &&
    nlResidencia.trim() !== '' &&
    nnomeC.trim() !== '' &&
    nhabilidade.trim() !== '' &&
    nnomeM.trim() !== '' &&
    nmana.trim() !== '' &&
    ndescricaoM.trim() !== '' &&
    nforca.trim() !== '' &&
    nagilidade.trim() !== '' &&
    ninteligencia.trim() !== '' &&
    nreflexos.trim() !== ''
    ) {
        const detalhesUrll = `http://localhost:8080/personagem/${id}`;
        fetch(detalhesUrll, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jogador: njogador,
            nome: nnome,
            ocupacao: nocupacao,
            nivel: nnivel,
            sexo: nsexo,
            localNascimento: nlNascimento,
            localResidencia: nlResidencia,  // Corrigido aqui
            nomeC: nnomeC,
            habilidadeC: nhabilidade,
            nomeM: nnomeM,
            manaM: nmana,
            descricaoM: ndescricaoM,
            forca: nforca,
            agilidade: nagilidade,
            inteligencia: ninteligencia,
            reflexos: nreflexos,
        })
        })
        .then(response => {
            if (response.ok) {
                alert('Personagem atualizado com sucesso');
                window.location.href = '/MeusPersonagens/index2.html';

            } else {
                // Lógica para tratamento de erro
                console.error('Erro ao atualizar personagem');
            }
        })
        .catch(error => {
            // Lógica para tratamento de erro
            console.error('Erro ao fazer solicitação de atualização:', error);
        });
    }
      else{
        alert('Por favor, preencha o campo antes de prosseguir.');
      }
  });
});

 // Função para abrir o modal
 function abrirModal() {
    event.preventDefault();
    document.getElementById('modal').style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    event.preventDefault();
    document.getElementById('modal').style.display = 'none';
}
function confirmarExclusao() {
    event.preventDefault();
  
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const urlExcluir = `http://localhost:8080/personagem/excluir/${id}`;
  
    fetch(urlExcluir, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(function (deleteRes) {
        if (deleteRes.ok) {
          alert('Personagem excluído com sucesso!');
          window.location.href = '/MeusPersonagens/index2.html';
          return deleteRes.json();
        } else if (deleteRes.status === 500) {
          document.getElementById('mensagemSenhaIncorreta').style.display = 'none';
          alert('Exclua seus personagens antes de excluir a conta');
          return deleteRes.text().then(function (errorText) {
            throw new Error('Falha na autenticação');
          });
        }
      })
      .catch(function (error) {
        console.error('Erro ao fazer login ou excluir personagem', error);
      });
  
  }

function preencherFormulario(personagem) {
    const campos = {
        'jogador':personagem.jogador,
        'nome': personagem.nome,
        'ocupacao': personagem.ocupacao,
        'nivel': personagem.nivel,
        'sexo': personagem.sexo,
        'lNascimento': personagem.localNascimento,
        'lResidencia': personagem.localResidencia,
        'nomeC': personagem.nomeC,
        'habilidade': personagem.habilidadesC,
        'nomeM': personagem.nomeM,
        'mana': personagem.manaM,
        'descricaoM': personagem.descricaoM,
        'forca': personagem.forca,
        'agilidade': personagem.agilidade,
        'inteligencia': personagem.inteligencia,
        'reflexos': personagem.reflexos
      };
    
      for (const campo in campos) {
        const valor = campos[campo];
        const elemento = document.getElementById(campo);
        if (elemento) {
          elemento.value = valor;
        }
    }
}

