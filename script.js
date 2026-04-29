


const readline = require('readline-sync');

// --- BANCO DE DADOS DE PERSONAGENS (50) ---
const personagens = [
  { id: 1, Nome: 'Alaric, o Justo', vida: 120, poder: 'Escudo de Fé', DanoPorAtaque: 15},
  { id: 2, Nome: 'Beatrix de Astora', vida: 100, poder: 'Estocada Veloz', DanoPorAtaque: 18 },
  { id: 3, Nome: 'Gromm, o Brutamontes', vida: 150, poder: 'Fúria de Sangue', DanoPorAtaque: 22 },
  { id: 4, Nome: 'Sir Kaelen', vida: 110, poder: 'Investida Montada', DanoPorAtaque: 16},
  { id: 5, Nome: 'Elowen da Alvorada', vida: 95, poder: 'Luz Ofuscante', DanoPorAtaque: 14 },
  { id: 6, Nome: 'Barão Von Drak', vida: 130, poder: 'Golpe Tirano', DanoPorAtaque: 19 },
  { id: 7, Nome: 'Thorgar de Ferro', vida: 160, poder: 'Pele de Rocha', DanoPorAtaque: 12 },
  { id: 8, Nome: 'Hilda, a Valquíria', vida: 115, poder: 'Grito de Guerra', DanoPorAtaque: 20 },
  { id: 9, Nome: 'Cedric, o Escudeiro', vida: 85, poder: 'Aparo Perfeito', DanoPorAtaque: 10 },
  { id: 10, Nome: 'Valerius de Ouro', vida: 105, poder: 'Lâmina Sagrada', DanoPorAtaque: 25},
  { id: 11, Nome: 'Mestre Ignis', vida: 70, poder: 'Bola de Fogo', DanoPorAtaque: 30 },
  { id: 12, Nome: 'Selene da Lua', vida: 75, poder: 'Raio Lunar', DanoPorAtaque: 24 },
  { id: 13, Nome: 'Malakor, o Sombrio', vida: 80, poder: 'Dreno de Alma', DanoPorAtaque: 28 },
  { id: 14, Nome: 'Elara Windrunner', vida: 85, poder: 'Tornado de Lâminas', DanoPorAtaque: 22 },
  { id: 15, Nome: 'Balthazar, o Alquimista', vida: 90, poder: 'Frasco Explosivo', DanoPorAtaque: 20 },
  { id: 16, Nome: 'Zora da Tempestade', vida: 78, poder: 'Corrente Elétrica', DanoPorAtaque: 27 },
  { id: 17, Nome: 'Finnegan, o Ilusionista', vida: 65, poder: 'Cópia Espelhada', DanoPorAtaque: 5 },
  { id: 18, Nome: 'Oráculo Myra', vida: 60, poder: 'Previsão de Golpe', DanoPorAtaque: 15 },
  { id: 19, Nome: 'Kaelthas Solarius', vida: 82, poder: 'Chuva de Meteoros', DanoPorAtaque: 35 },
  { id: 20, Nome: 'Vórtice', vida: 77, poder: 'Prisão Dimensional', DanoPorAtaque: 18 },
  { id: 21, Nome: 'Rato de Esgoto', vida: 70, poder: 'Apunhalada', DanoPorAtaque: 22 },
  { id: 22, Nome: 'Sombra Silenciosa', vida: 85, poder: 'Invisibilidade', DanoPorAtaque: 20 },
  { id: 23, Nome: 'Jax, o Desertor', vida: 100, poder: 'Tiro de Besta', DanoPorAtaque: 18 },
  { id: 24, Nome: 'Lira das Sombras', vida: 80, poder: 'Veneno Paralisante', DanoPorAtaque: 15 },
  { id: 25, Nome: 'Korg, o Saqueador', vida: 110, poder: 'Golpe Baixo', DanoPorAtaque: 17 },
  { id: 26, Nome: 'Dagger Pete', vida: 75, poder: 'Arremesso de Faca', DanoPorAtaque: 14 },
  { id: 27, Nome: 'Viper de Areia', vida: 88, poder: 'Nuvem de Poeira', DanoPorAtaque: 16 },
  { id: 28, Nome: 'Nyx, a Ladra de Jóias', vida: 72, poder: 'Passo Ágil', DanoPorAtaque: 12 },
  { id: 29, Nome: 'Garret Mão-Leve', vida: 68, poder: 'Roubo de Item', DanoPorAtaque: 8 },
  { id: 30, Nome: 'Mara dos Bosques', vida: 92, poder: 'Armadilha de Espinhos', DanoPorAtaque: 19 },
  { id: 31, Nome: 'Robin do Vale', vida: 90, poder: 'Flecha Certeira', DanoPorAtaque: 21 },
  { id: 32, Nome: 'Yara da Floresta', vida: 85, poder: 'Chamado da Matilha', DanoPorAtaque: 17 },
  { id: 33, Nome: 'Torin das Neves', vida: 95, poder: 'Flecha Congelante', DanoPorAtaque: 20 },
  { id: 34, Nome: 'Sven Olho de Águia', vida: 88, poder: 'Tiro Duplo', DanoPorAtaque: 23 },
  { id: 35, Nome: 'Lana a Rastreadora', vida: 92, poder: 'Marca do Caçador', DanoPorAtaque: 19 },
]

// --- BANCO DE DADOS DE INIMIGOS (50) ---
const inimigos = [
  { Nome: 'Zumbi Putrefato', vida: 60, poder: 'Mordida Infecciosa', DanoPorAtaque: 8 },
  { Nome: 'Esqueleto Guerreiro', vida: 50, poder: 'Golpe de Ossos', DanoPorAtaque: 12 },
  { Nome: 'Aparição Sombria', vida: 40, poder: 'Toque Gelado', DanoPorAtaque: 20 },
  { Nome: 'Carniçal Faminto', vida: 80, poder: 'Garras Venenosas', DanoPorAtaque: 15 },
  { Nome: 'Lich Decaído', vida: 120, poder: 'Explosão Arcana', DanoPorAtaque: 25 },
  { Nome: 'Cavaleiro da Morte', vida: 200, poder: 'Aura de Pavor', DanoPorAtaque: 22 },
  { Nome: 'Vulto de Nevoeiro', vida: 45, poder: 'Sufocamento', DanoPorAtaque: 18 },
  { Nome: 'Múmia Ancestral', vida: 110, poder: 'Praga de Areia', DanoPorAtaque: 16 },
  { Nome: 'Banshee Lamuriante', vida: 55, poder: 'Grito Agonizante', DanoPorAtaque: 24 },
  { Nome: 'Abominação de Carne', vida: 250, poder: 'Gancho de Ferrugem', DanoPorAtaque: 19 },
  { Nome: 'Lobo Alfa', vida: 70, poder: 'Uivo de Chamada', DanoPorAtaque: 14 },
  { Nome: 'Aranha Tecelã', vida: 40, poder: 'Teia Aprisionante', DanoPorAtaque: 10 },
  { Nome: 'Urso-Coruja', vida: 160, poder: 'Abraço Brutal', DanoPorAtaque: 20 },
  { Nome: 'Serpente Gigante', vida: 90, poder: 'Bote Venenoso', DanoPorAtaque: 18 },
  { Nome: 'Grifo Selvagem', vida: 130, poder: 'Mergulho Aéreo', DanoPorAtaque: 22 },
  { Nome: 'Warg das Sombras', vida: 85, poder: 'Perseguição Furiosa', DanoPorAtaque: 16 },
  { Nome: 'Quimera Instável', vida: 180, poder: 'Sopro de Fogo', DanoPorAtaque: 28 },
  { Nome: 'Hidra de Pântano', vida: 300, poder: 'Múltiplas Mordidas', DanoPorAtaque: 15 },
  { Nome: 'Morcego Vampiro', vida: 30, poder: 'Dreno de Sangue', DanoPorAtaque: 12 },
  { Nome: 'Basilisco de Pedra', vida: 140, poder: 'Olhar Petrificante', DanoPorAtaque: 14 },
  { Nome: 'Goblin Saqueador', vida: 35, poder: 'Golpe Traiçoeiro', DanoPorAtaque: 10 },
  { Nome: 'Hobgoblin Capitão', vida: 95, poder: 'Comando de Guerra', DanoPorAtaque: 18 },
  { Nome: 'Orc Furioso', vida: 110, poder: 'Fúria Implacável', DanoPorAtaque: 20 },
  { Nome: 'Xamã Orc', vida: 75, poder: 'Raio de Sangue', DanoPorAtaque: 24 },
  { Nome: 'Troll de Caverna', vida: 190, poder: 'Regeneração Rápida', DanoPorAtaque: 22 },
  { Nome: 'Bugbear Caçador', vida: 100, poder: 'Ataque em Emboscada', DanoPorAtaque: 21 },
  { Nome: 'Orc Arqueiro', vida: 65, poder: 'Flecha Incendiária', DanoPorAtaque: 16 },
  { Nome: 'Goblin Alquimista', vida: 45, poder: 'Bomba de Ácido', DanoPorAtaque: 18 },
  { Nome: 'Chefe Orc Grog', vida: 220, poder: 'Esmagar Crânio', DanoPorAtaque: 26 },
  { Nome: 'Worg Domado', vida: 80, poder: 'Mordida Serrada', DanoPorAtaque: 14 },
  { Nome: 'Elemental de Fogo', vida: 120, poder: 'Combustão Espontânea', DanoPorAtaque: 22 },
  { Nome: 'Gárgula de Pedra', vida: 150, poder: 'Pouso Esmagador', DanoPorAtaque: 15 },
  { Nome: 'Ninfa Corrompida', vida: 80, poder: 'Sedução Mortal', DanoPorAtaque: 18 },
  { Nome: 'Elemental de Gelo', vida: 140, poder: 'Prisão Congelante', DanoPorAtaque: 17 },
  { Nome: 'Djinn Caótico', vida: 160, poder: 'Vendaval de Lâminas', DanoPorAtaque: 25 },
  { Nome: 'Súcubo', vida: 90, poder: 'Beijo do Destino', DanoPorAtaque: 20 },
  { Nome: 'Gênio da Areia', vida: 135, poder: 'Tempestade Cega', DanoPorAtaque: 19 },
  { Nome: 'Assombração de Armadura', vida: 110, poder: 'Aço Fantasmagórico', DanoPorAtaque: 17 },
  { Nome: 'Íncubo das Sombras', vida: 95, poder: 'Pesadelo Vivo', DanoPorAtaque: 21 },
  { Nome: 'Fênix Negra', vida: 170, poder: 'Ressurreição Sombria', DanoPorAtaque: 26 },
  { Nome: 'Bandido das Estradas', vida: 65, poder: 'Golpe Baixo', DanoPorAtaque: 12 },
  { Nome: 'Assassino de Aluguel', vida: 70, poder: 'Apunhalada Crítica', DanoPorAtaque: 28 },
  { Nome: 'Mago Renegado', vida: 80, poder: 'Míssil Místico', DanoPorAtaque: 24 },
  { Nome: 'Cavaleiro Corrompido', vida: 150, poder: 'Investida Cruel', DanoPorAtaque: 20 },
  { Nome: 'Fanático do Culto', vida: 55, poder: 'Sacrifício Explosivo', DanoPorAtaque: 18 },
  { Nome: 'Arqueiro Mercenário', vida: 60, poder: 'Tiro na Perna', DanoPorAtaque: 16 },
  { Nome: 'Bruto de Aluguel', vida: 130, poder: 'Quebrar Ossos', DanoPorAtaque: 19 },
  { Nome: 'Espião das Sombras', vida: 50, poder: 'Bomba de Fumaça', DanoPorAtaque: 10 },
  { Nome: 'Inquisidor Sombrio', vida: 115, poder: 'Julgamento de Fogo', DanoPorAtaque: 22 },
  { Nome: 'General Traidor', vida: 250, poder: 'Tática de Massacre', DanoPorAtaque: 30 }
];

// --- MOTOR DO JOGO ---
function loopPrincipal() {

  console.log(`███████████████████████████
███████▀▀▀░░░░░░░▀▀▀███████
████▀░░░░░░░░░░░░░░░░░▀████
███│░░░░░░░░░░░░░░░░░░░│███
██▌│░░░░░░░░░░░░░░░░░░░│▐██
██░└┐░░░░░░░░░░░░░░░░░┌┘░██
██░░└┐░░░░░░░░░░░░░░░┌┘░░██
██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██
██▌░│██████▌░░░▐██████│░▐██
███░│▐███▀▀░░▄░░▀▀███▌│░███
██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██
██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██
████▄─┘██▌░░░░░░░▐██└─▄████
█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████
████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████
█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████
███████▄░░░░░░░░░░░▄███████
██████████▄▄▄▄▄▄▄██████████
███████████████████████████


`

)
  console.log("--- BEM-VINDO ÀS CRÔNICAS DE CASMURRO ---");
  

  const nomes = personagens.map(p => p.Nome);//para criar uma lista apenas com os nomes dos personagens
  const indexHeroi = readline.keyInSelect(nomes, "Selecione seu heroi:");
  
  if (indexHeroi === -1) return; // Cancelar
  
  const jogador = { ...personagens[indexHeroi] };
  console.log(`\nVocê escolheu: ${jogador.Nome}`);


  // Loop de Batalhas
  
}

loopPrincipal();

