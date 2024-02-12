1. O padrão de middleware nos permite projetar um pipeline de funções que pode modificar ou aumentar os dados recebidos antes que eles atinjam a função alvo.

2. Um gerenciador de middleware gerencia funções de middleware.

3. Os dados/solicitações recebidos são tratados sequencialmente pelas funções de middleware que podem invocar um retorno de chamada (geralmente uma variável chamada next) para invocar o próximo middleware no pipeline.

4. Este padrão se tornou popular pela estrutura de aplicativo expressjs

5. Expressjs permite que os desenvolvedores escrevam todos os tipos de middleware, como analisadores, registradores, gerenciadores de sessão e proteção contra ataques.
