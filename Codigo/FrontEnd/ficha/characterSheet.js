const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iusername = localStorage.getItem('username');
const Iocupacao = document.querySelector(".ocupacao");
const Inivel = document.querySelector(".nivel");
const Isexo = document.querySelector(".sexo");
const IlocalNascimento = document.querySelector(".lNascimento");
const IlocalResidencia = document.querySelector(".lResidencia");
const Iclasse = document.querySelector(".nomeC");
const Ihabilidade = document.querySelector(".habilidade");
const Imagia = document.querySelector(".nomeM");
const Imana= document.querySelector(".mana");
const Idescricao= document.querySelector(".descricaoM");
const Iforca = document.querySelector(".forca");
const Iagilidade = document.querySelector(".agilidade");
const Iinteligencia = document.querySelector(".inteligencia");
const Ireflexos = document.querySelector(".reflexos");

  function cadastrarP() {
    if (
      Inome.value === "" ||
      Iocupacao.value === "" ||
      Inivel.value === "" ||
      Isexo.value === "" ||
      IlocalNascimento.value === "" ||
      IlocalResidencia.value === "" ||
      Iclasse.value === "" ||
      Ihabilidade.value === "" ||
      Imagia.value === "" ||
      Imana.value === "" ||
      Idescricao.value === "" ||
      Iforca.value === "" ||
      Iagilidade.value === "" ||
      Iinteligencia.value === "" ||
      Ireflexos.value === ""
    ) {
      alert('Preencha todos os campos obrigatórios');
      return;
    }
    fetch("http://localhost:8080/personagem", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: Inome.value,
        jogador: Iusername,
        ocupacao: Iocupacao.value,
        nivel: parseInt(Inivel.value),
        sexo: Isexo.value,
        localNascimento: IlocalNascimento.value,
        localResidencia: IlocalResidencia.value,
        nomeC: Iclasse.value,
        habilidadeC: Ihabilidade.value,
        nomeM: Imagia.value,
        manaM: parseInt(Imana.value),
        descricaoM: Idescricao.value,
        forca: parseInt(Iforca.value),
        agilidade: parseInt(Iagilidade.value),
        inteligencia: parseInt(Iinteligencia.value),
        reflexos: parseInt(Ireflexos.value),
      })
    })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Erro ao cadastrar personagem');
      }
    })
    .then(function (data) {
      alert('Personagem cadastrado com sucesso', data);
      window.location.href = '/MeusPersonagens/index2.html';
    })
    .catch(function (error) {
      console.error('Erro ao cadastrar personagem', error);
    });
  }
  
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  cadastrarP();
});
