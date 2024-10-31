/*

Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

*/

/*Lógica :
    - classe herói com nome, idade, tipo, ataque, método atacar
    - cada variavél instacia um tipo de herói diferente
    - criar função para exibir todos as variáveis
    - verificar genero do heroi para mudar a mansagem
*/

//CLASSES

class heroi{
    constructor(nome, idade, tipo, ataque, genero){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
        this.genero = genero
    }
    atacar(){
        if(this.genero == 'm'){
        console.log(`O heroi ${this.nome} do tipo ${this.tipo}, e de idade ${this.idade}, atacou usando ${this.ataque}`)
        }
        else{
            console.log(`A heroina ${this.nome} do tipo ${this.tipo}, e de idade ${this.idade}, atacou usando ${this.ataque}`)
        }
    }
    //ESTRUTURA DE DECISÃO
}

//Variáveis
let jogador1 = new heroi("Luis", 21, "ninja", "shuriken", 'm')
let jogador2 = new heroi("George", 21, "monge", "artes marciais", 'm')
let jogador3 = new heroi("Cauã", 21, "guerreiro", "espada", 'm')
let jogadora4 = new heroi("Amanda", 23, "maga", "magia", 'f')


// SAÍDA
//FUNÇÃO
function mensagem(){
jogador1.atacar()
jogador2.atacar()
jogador3.atacar()
jogadora4.atacar()
}

mensagem()