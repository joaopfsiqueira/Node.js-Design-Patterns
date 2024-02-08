**O que o é Adapter?**

Bom o nome **_“Adapter”_** é bastante sugestivo (adaptador em português). A ideia desse design pattern é fazer com que duas interfaces/classes diferentes consigam interagir entre si ou até mesmo substituir uma à outra sem causar um efeito colateral no seu código. Para isso, inserimos uma classe **_adaptadora_** que intermediará o retorno da nova ou velha interface para o código em produção. Podemos fazer uma comparação bem prática: os adaptadores de tomada. Quando você tem uma tomada que não é compatível com o cabo de força de seu eletrônico é necessário um “**adaptador”.** É exatamente o mesmo propósito da **_classe adapter_** que vamos inserir no nosso código.

No exemplo, basicamente temos duas libs, datafns e moment.

criamos uma classe adapter que pode receber as duas classes, apenas alterando o import dela! Para caso uma pare, a outra comece a funcionar!
