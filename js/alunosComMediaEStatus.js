const listaAlunos = [
  {
    nome: "Jonas",
    notas: [1, 4, 10, 8],
  },
  {
    nome: "Adam",
    notas: [10, 5, 6, 8],
  },
  {
    nome: "Marta",
    notas: [7, 7, 8, 8],
  },
];

// Criar funçao que receba uma lista de notas e retorne a media
// Criar funcao que receba uma media e retorne "aprovado" se a media for maior ou igual a 7 e reprovado se menor que 7

function soma(listaNumeros = []) {
  return listaNumeros.reduce(
    (acumulado, numeroAtual) => acumulado + numeroAtual
  );
}

function calcularMedia(listaNotas = []) {
  const quantidadeElementos = listaNotas.length;
  const media = soma(listaNotas) / quantidadeElementos;
  return media;
}

function definirStatus(media = 0) {
  return media < 7 ? "reprovado" : "aprovado";
}

const listaAlunosComMediaEStatus = () =>
  listaAlunos.map((aluno) => {
    const media = calcularMedia(aluno.notas);
    const status = definirStatus(media);
    const alunoComMediaEStatus = {
      nome: aluno.nome,
      media: media,
      status: status,
    };
    return alunoComMediaEStatus;
  });

function pintaTabela() {
  var div = document.querySelectorAll("td.td-body").forEach((item) => {
    const c = item.childNodes;
    for (var i = 0; i < c.length; i++) {
      if (c[i].nodeValue == "reprovado") {
        item.style.backgroundColor = "red";
      } else {
        item.style.backgroundColor = "green";
      }
    }
  });
}
