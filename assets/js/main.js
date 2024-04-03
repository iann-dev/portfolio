import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".feprocic",
  `Como palestrante na Feira Científica denominada FEPROCIC, tive a oportunidade de abordar uma ampla gama de tópicos, 
  desde os fundamentos do desenvolvimento web até conceitos mais avançados, incluindo o uso de frameworks. 
  Durante a apresentação, compartilhei conhecimentos essenciais sobre o desenvolvimento web, 
  explorando desde os princípios básicos até abordagens mais sofisticadas, com ênfase especial na utilização de frameworks. 
  Essa participação na FEPROIC permitiu-me disseminar informações relevantes e inspirar o interesse dos participantes por diferentes aspectos do desenvolvimento web,
   proporcionando uma visão abrangente e aprofundada da área.`,
  "Palestrante em Feira Cientifica",
  "FEPROCIC",
  "Nov 2022 & Nov 2023"
);

hoverChangeExperience(
  ".monitoria",
  `No último ano, ministrei aulas para turmas do primeiro ano, atualmente no segundo ano,
  abordando temas como desenvolvimento, design, programação e projetos web. Enfatizei a 
  compreensão prática desses conceitos, incentivando o pensamento crítico e a aplicação dos conhecimentos. 
  Destaquei o desenvolvimento de habilidades em programação, design e resolução de problemas, 
  visando preparar os alunos para desafios no campo tecnológico contemporâneo`,
  "Ministrante de aula",
  "Monitorias e Aulas",
  "Fev 2023 - Jun 2023 (4 meses)"
);

hoverChangeExperience(
  ".ArduinoDay",
  `Como aluno do curso de informática, minha formação não se limitou apenas ao estudo de desenvolvimento web. 
  Tive a oportunidade de explorar diversas áreas, incluindo a robótica, na qual participei ativamente de competições, 
  como o Arduino Day, apresentando um Seguidor de Linha. Essa experiência proporcionou uma ampla visão
   das aplicações práticas e interdisciplinares da informática, enriquecendo minha formação acadêmica.`,
  "Competidor na Area de Robotica",
  "Robotica",
  "Fev 2023 - Mar 2022 (1 mes)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
