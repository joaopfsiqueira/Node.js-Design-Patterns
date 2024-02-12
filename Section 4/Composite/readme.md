# Composite pattern

-   Em resumo, é um padrão de design estrutural que permite compor objetos em estruturas de árvore para representar hierarquias.

1. Componente: Define a interface comum para todos os componentes (folhas e compostos).
   Pode declarar métodos padrão para adicionar, remover ou obter componentes filhos.

2. Folha (Leaf): Implementa a interface do componente.
   Representa os objetos "folha" na hierarquia, ou seja, objetos que não têm filhos.
   Executam tarefas específicas relacionadas a um componente individual.

3. Composto: Também implementa a interface do componente.
   Pode ter filhos (componentes) que podem ser folhas ou outros compostos.
   Delega operações para seus filhos e pode realizar operações próprias.

Exemplos:

Componente: Poderia ser uma interface ou classe abstrata que define métodos como adicionar, remover e obterFilhos.

Folha (Leaf): Poderia ser uma classe representando uma palavra.

Composto: Poderia ser uma classe representando um parágrafo que pode conter palavras (folhas) ou outros parágrafos (compostos).
