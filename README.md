# Escrevendo as Classes de Um Jogo <img src="https://static.wikia.nocookie.net/fortnite/images/2/2e/Elite_-_Icon_-_Fortnite.png/revision/latest?cb=20230531201228" width="50" style="vertical-align: middle;" />

Este é o último projeto proposto pelo Bootcamp da DIO, ele reune todos os conhecimentos adquiridos durante o curso e mostra a execução de tudo em um só código

## Ferramentas Utilizadas ⚙️
### <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="20" height="20" /> - JavaScript

Este código utiliza os seguintes recursos e ferramentas fundamentais da programação em JavaScript:

- **Variáveis**: Cada instância de herói (como `jogador1`, `jogador2`, etc.) é armazenada em variáveis para que possamos manipulá-las individualmente.
  
- **Classes e Objetos**: A classe `heroi` serve como um molde para criar heróis com atributos específicos como `nome`, `idade`, `tipo`, `ataque`, e `genero`. As instâncias (objetos) dessa classe representam heróis individuais com esses atributos.

- **Estruturas de Decisão (If)**: Dentro do método `atacar`, uma estrutura condicional (`if`) verifica o gênero do herói. Se o gênero for `'m'`, a mensagem exibe "O herói"; caso contrário, exibe "A heroína".

- **Método Personalizado (Funções)**: O método `atacar()` é uma função interna da classe `heroi`, que exibe a mensagem de ataque com base nos atributos do objeto.

- **Concatenando Strings**: As mensagens do método `atacar` utilizam template strings (`` ` ` ``) para facilitar a interpolação dos valores das propriedades do herói diretamente na mensagem exibida.

# Como o Código Funciona

1. **Criação da Classe**: A classe `heroi` é definida com cinco atributos: `nome`, `idade`, `tipo`, `ataque`, e `genero`. Ela também possui um método `atacar`, que exibe uma mensagem de ataque personalizada para o herói ou heroína.

2. **Instanciando Heróis**: São criadas quatro instâncias da classe `heroi` — `jogador1`, `jogador2`, `jogador3`, e `jogadora4` — com diferentes valores para cada atributo, incluindo o gênero.

3. **Exibindo Mensagens de Ataque**: A função `mensagem` chama o método `atacar` para cada herói, que exibe uma mensagem personalizada com o nome, tipo, idade e estilo de ataque, ajustando a saudação ("O herói" ou "A heroína") conforme o gênero.

4. **Saída Esperada**: Ao executar `mensagem()`, o console mostrará a descrição do ataque para cada herói.
