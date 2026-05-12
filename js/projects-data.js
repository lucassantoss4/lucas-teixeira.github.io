// projects-data.js
// Dados dos projetos - adicione seus projetos aqui
// Última atualização: 2026-04-24

window.PROJECTS = [
  {
    id: "pendulo-de-ondas",
    title: "Análise da Dinâmica do Pêndulo de Ondas",
    subtitle: ["Data Science", "Engenharia de Software"],
    description: "Análise técnica sobre a dinâmica de oscilação de pêndulos simples. Integração de modelagem matemática (SciPy) com forças dissipativas e validação de dados experimentais via Tracker.",
    tags: ["Python", "SciPy", "Física", "Modelagem Numérica"],
    domain: ["engineering", "ai"],
    image: "pictures/pendulo.png",
    repo: "https://github.com/lucassantoss4/An-lise-da-Din-mica-do-P-ndulo.git",
    live: "https://lucassantoss4.github.io/An-lise-da-Din-mica-do-P-ndulo/"
  },
  {
    id: "ninja-game",
    title: "Jogo Ninja - Pygame",
    subtitle: ["Game Development", "Engenharia de Software"],
    description: "Um jogo de arcade frenético com física de inércia, sistema de partículas e dificuldade progressiva. Desenvolvido com Pygame-ce seguindo padrões de arquitetura modular.",
    tags: ["Python", "Pygame", "OOP", "Game Design"],
    domain: ["engineering"],
    image: "pictures/Pygame.png",
    repo: "https://github.com/lucassantoss4/pygame.git",
    live: "https://lucassantoss4.github.io/pygame/"
  },
  {
    id: "gerador-de-senha",
    title: "Gerador de Senha",
    subtitle: ["Frontend & Ferramentas", "Engenharia de Software"],
    description: "Um gerador de senhas aleatórias intuitivo e seguro. Permite personalizar o comprimento da senha e oferece funcionalidade de cópia rápida com um clique.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    domain: ["engineering"],
    image: "pictures/Gerador-de-senhas.png",
    repo: "https://github.com/lucassantoss4/GeradorDeSenhas.git",
    live: "https://geradordesenhas-upko.onrender.com/"
  }
];

// Configuração dos filtros por área
window.PROJECT_DOMAINS = [
  { key: "all", label: "Todos os Projetos" },
  { key: "backend", label: "Backend & APIs" },
  { key: "ai", label: "Inteligência Artificial" },
  { key: "systems", label: "Sistemas Escaláveis" },
  { key: "engineering", label: "Engenharia de Software" }
];
