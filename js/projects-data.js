// projects-data.js
// Dados dos projetos - adicione seus projetos aqui
// Última atualização: 2026-04-24

window.PROJECTS = [
  {
    id: "gerador-de-senha",
    title: "Gerador de Senha",
    subtitle: ["Frontend & Ferramentas", "Engenharia de Software"],
    description: "Um gerador de senhas aleatórias intuitivo e seguro. Permite personalizar o comprimento da senha e oferece funcionalidade de cópia rápida com um clique.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    domain: ["engineering"],
    image: "pictures/gerador-de-senhas/mockup.png",
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
