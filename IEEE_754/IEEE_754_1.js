/* O IEEE 754 é um padrão de representação numérica criado em 1985 e adotado por diversas linguagens de programação como o JavaScript,
Ruby, Python e Java. */

/* O padrão IEEE 754 é uma norma internacional para representação de números de ponto flutuante em sistemas de computadores. Ele define 
o formato de como os números de ponto flutuante são armazenados na memória e como operações aritméticas são realizadas com esses 
números. Em JavaScript, os números de ponto flutuante são representados de acordo com o padrão IEEE 754 de precisão dupla, que utiliza 
64 bits para representar cada número. Isso significa que há 64 bits disponíveis para representar um único número, dos quais alguns bits 
são usados para representar o sinal do número, o expoente e a mantissa. Aqui está uma explicação básica de como um número de ponto 
flutuante é representado em JavaScript de acordo com o padrão IEEE 754:

Sinal: O bit mais significativo (bit de sinal) indica se o número é positivo ou negativo. 0 representa positivo e 1 representa negativo.

Expoente: Os próximos 11 bits representam o expoente do número, ou seja, sua ordem de grandeza ou escala. Ele define a posição do ponto 
decimal no número.

Mantissa: Os bits restantes (52 bits) representam a mantissa do número. A mantissa é a parte fracionária do número. */

// Devemos ter cuidado com alguns tipos de operação envolvendo números.

// Ao realizar operações com números decimais, podem existir resíduos decorrentes de arredondamento.

/* Quando você executa a operação 0.1 + 0.2 em JavaScript, você pode esperar um resultado de 0.3, mas isso nem sempre é o caso devido à 
natureza da representação de números de ponto flutuante em binário e as limitações de precisão associadas a ela.

Vamos analisar o que acontece:

0.1 em binário: 0.1 em binário é uma representação periódica, assim como 1/3 é em decimal. Isso significa que, embora 0.1 possa parecer 
simples em decimal, é uma fração infinita em binário. JavaScript arredonda isso para uma representação finita, mas a representação exata
não é possível em um número finito de bits.

Como temos apenas 64 bits para representar o número e 0.1 é uma representação periódica, temos que arredondá-lo para que o número se
enquadre nos 64 bits disponíveis.

0.2 em binário: Similarmente, 0.2 em binário também é uma representação periódica.

Quando você soma esses números, o resultado será afetado pela precisão finita da representação de ponto flutuante. 

Vamos ver o resultado em JavaScript:

console.log(0.1 + 0.2); // Resultado: 0.30000000000000004

Você pode ver que o resultado não é exatamente 0.3, mas 0.30000000000000004. Isso ocorre devido às limitações de precisão na 
representação de números de ponto flutuante em JavaScript. O número é muito próximo de 0.3, mas não exatamente igual devido a essas 
limitações. */

console.log(0.1 + 0.2);
console.log(666.7 - 666.6);
console.log(33.3 * 3);
console.log(12.2 / 0.1);
console.log(0.5 + 0.5);