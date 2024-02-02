1. O padrão de retorno de chamada é o padrão para gerenciar o resultado de um método assíncrono
2. Retornos de chamada aninhados tornam-se incontroláveis e ilegíveis
3. Retornos de chamada aninhados são frequentemente chamados de 'inferno de retorno de chamada'

Dentro do arquivp app.js temos um exemplo de callback hell.

O melhor jeito de se tratar isso é utilizando promises e async/await.

Movendo códigos e chamando funções ao invés de deixar tudo poluído.
