let filmes = {
  "Ação": [
    { titulo: "Mad Max: Fury Road", idade: "16+" },
    { titulo: "John Wick", idade: "18+" },
    { titulo: "Die Hard", idade: "14+" },
    { titulo: "Gladiador", idade: "16+" },
    { titulo: "Matrix", idade: "16+" },
    { titulo: "Vingadores: Ultimato", idade: "12+" }
  ],
  "Comédia": [
    { titulo: "Monty Python and the Holy Grail", idade: "12+" },
    { titulo: "Superbad", idade: "16+" },
    { titulo: "The Hangover", idade: "18+" },
    { titulo: "As Branquelas", idade: "14+" },
    { titulo: "Zoolander", idade: "12+" },
    { titulo: "Escola de Rock", idade: "10+" }
  ],
  "Drama": [
    { titulo: "The Godfather", idade: "16+" },
    { titulo: "Shawshank Redemption", idade: "14+" },
    { titulo: "Forrest Gump", idade: "10+" },
    { titulo: "Parasita", idade: "16+" },
    { titulo: "Cisne Negro", idade: "18+" },
    { titulo: "O Jogo da Imitação", idade: "12+" }
  ],
  "Ficção Científica": [
    { titulo: "Interstellar", idade: "10+" },
    { titulo: "Blade Runner 2049", idade: "14+" },
    { titulo: "The Matrix", idade: "16+" },
    { titulo: "Duna", idade: "12+" },
    { titulo: "Star Wars: O Império Contra-Ataca", idade: "10+" },
    { titulo: "2001: Uma Odisseia no Espaço", idade: "12+" }
  ],
  "Animação": [
    { titulo: "Toy Story", idade: "Livre" },
    { titulo: "Spider-Man: Into the Spider-Verse", idade: "10+" },
    { titulo: "Viva – A Vida é uma Festa", idade: "Livre" },
    { titulo: "Up: Altas Aventuras", idade: "Livre" },
    { titulo: "Shrek", idade: "Livre" },
    { titulo: "Zootopia", idade: "Livre" }
  ],
  "Terror": [
    { titulo: "O Exorcista", idade: "18+" },
    { titulo: "A Noite dos Mortos-Vivos", idade: "16+" },
    { titulo: "Hereditário", idade: "18+" },
    { titulo: "Corra!", idade: "16+" },
    { titulo: "A Morte Te Dá Parabéns", idade: "14+" },
    { titulo: "It: A Coisa", idade: "16+" }
  ]
};

let generoSelecionado = "";
let filmeRecomendado = "";
let idadeIndicada = "";

function setup() {
  createCanvas(1000, 500);

  let titulo = createElement('h2', '🎬 Recomendador de Filmes 🎬');
  titulo.position(20, 5);
  titulo.style('color', '#FFF');
  titulo.style('font-family', 'Arial, sans-serif');
  titulo.style('text-shadow', '4px 4px 15px rgba(0, 0, 0, 0.8)');
  titulo.style('animation', 'scaleblink 3s infinite');

  let subtitulo = createElement('p', 'Escolha um gênero de filme:');
  subtitulo.position(20, 50);
  subtitulo.style('color', '#FFF');
  subtitulo.style('font-family', 'Arial, sans-serif');
  subtitulo.style('font-size', '18px');
  subtitulo.style('opacity', '0');
  subtitulo.style('animation', 'fadeIn 2s forwards 1s');

  // Organizar os botões por categoria com espaço entre eles
  let generos = ["Ação", "Comédia", "Drama", "Ficção Científica", "Animação", "Terror"];
  let posX = 20;
  let espacoEntre = 150; // Espaçamento padrão entre botões
  let espacoExtra = 100;  // Espaço extra entre Ficção Científica e Animação
  
  for (let i = 0; i < generos.length; i++) {
    let genero = generos[i];
    let botao = createButton(genero);
    estilizarBotao(botao, posX, 100);
    botao.mousePressed(() => recomendarFilme(genero));
    posX += espacoEntre;  // Aumentar o espaçamento entre os botões

    // Adiciona espaço extra antes do botão de Animação
    if (genero === "Ficção Científica") {
      posX += espacoExtra;
    }
  }

  filmeRecomendado = createElement('h3', '');
  filmeRecomendado.position(20, 200);
  filmeRecomendado.style('color', '#FFF');
  filmeRecomendado.style('font-family', 'Arial, sans-serif');
  filmeRecomendado.style('font-size', '20px');
  filmeRecomendado.style('opacity', '0');

  idadeIndicada = createElement('p', '');
  idadeIndicada.position(20, 250);
  idadeIndicada.style('color', '#FFF');
  idadeIndicada.style('font-family', 'Arial, sans-serif');
  idadeIndicada.style('font-size', '16px');
  idadeIndicada.style('opacity', '0');
}

function recomendarFilme(genero) {
  generoSelecionado = genero;
  let filmesDoGenero = filmes[generoSelecionado];
  let filmeAleatorio = random(filmesDoGenero);
  
  filmeRecomendado.html(`🎥 Recomendação: <strong>${filmeAleatorio.titulo}</strong>`);
  filmeRecomendado.style('opacity', '0');
  filmeRecomendado.style('animation', 'fadeIn 2s forwards');

  idadeIndicada.html(`📅 Indicação de idade: ${filmeAleatorio.idade}`);
  idadeIndicada.style('opacity', '0');
  idadeIndicada.style('animation', 'fadeIn 2s forwards');
}

function estilizarBotao(botao, x, y) {
  botao.position(x, y);
  botao.style('background', 'linear-gradient(145deg, #ff8a65, #ff7043)');
  botao.style('color', '#FFF');
  botao.style('font-family', 'Arial, sans-serif');
  botao.style('font-size', '16px');
  botao.style('border', 'none');
  botao.style('padding', '10px 20px');
  botao.style('border-radius', '12px');
  botao.style('box-shadow', '6px 6px 20px rgba(0, 0, 0, 0.3)');
  botao.style('cursor', 'pointer');
  botao.style('transition', 'all 0.5s ease');
  botao.mouseOver(() => {
    botao.style('transform', 'scale(1.05)');
    botao.style('background', 'linear-gradient(145deg, #ff7043, #ff8a65)');
    botao.style('box-shadow', '8px 8px 25px rgba(0, 0, 0, 0.5)');
  });
  botao.mouseOut(() => {
    botao.style('transform', 'scale(1)');
    botao.style('background', 'linear-gradient(145deg, #ff8a65, #ff7043)');
    botao.style('box-shadow', '6px 6px 20px rgba(0, 0, 0, 0.3)');
  });
}

function draw() {
  let t = millis() / 1000;
  let c1 = color(30 + sin(t) * 25, 87 + cos(t) * 20, 153);
  let c2 = color(125 + sin(t) * 30, 185, 232);
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

let css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `
  @keyframes scaleblink {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); text-shadow: 4px 4px 20px rgba(255, 255, 0, 0.8); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(css);
