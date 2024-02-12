O Observer Pattern é um padrão popular usado em todos os tipos de aplicativos em JavaScript. A instância (ou model) mantém uma coleção de objetos (observadores) e irá notifica-los de todas as mudanças no seu estado.

Vamos imaginar que você precisa atualizar vários elementos simultaneamente quando ocorre algum evento (digitar dentro do campo de texto, etc.). Você precisa adicionar mais elementos (assinaturas, subscribers) que reagem (observam, observer) a uma alteração de um valor de entrada. A remoção de inscrições (cancelar a inscrição, unsubscribe) pode ser útil se você não precisa mais transmitir as alterações de estado para um objeto específico e é ai que entra o nosso main.js

Esta é uma versão muito simplificada do Observer Pattern, que pode resolver seu problema ao invés de usar soluções como Vue ou React.
