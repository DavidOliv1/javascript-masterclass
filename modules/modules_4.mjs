import { PI, pow } from "./math.mjs";

// No ES6, ou ECMAScript 2015, foi especificado na própria linguagem baseado no conceito de importação e exportação

// A palavra chave import faz a importação de qualquer tipo de dado exportado para dentro do módulo. Para utilizar modules no Node.js os arquivos devem ter a extensão .mjs

// No ecossistema JavaScript do navegador, o uso de módulos JavaScript depende das instruções de import e export; essas instruções carregam e exportam módulos ECMAScript (ou módulos ES), respectivamente.

// O formato do módulo ES é o formato padrão oficial para empacotar código JavaScript para reutilização e a maioria dos navegadores modernos suportam nativamente os módulos.

// No Nodejs, a utilização da especificação CommomJS é o padrão. Esses módulos são carregados através da palavra-chave 'require' e suas variáveis e funções podem ser exportadas de módulos CommomJS através do module.exports. Atualmente o Node já aceita a utilização do ESM modules de forma estável, bastando, para isso, mudar a extensão do arquivo de .js para .mjs. Uma outra forma de habilitar os ESM no projeto é adicionando a linha: "type: module" dentro do package.json do projeto, dessa maneira, o Node tratará os arquivos por padrão como ESM, não sendo necessária mudar a extensão para .mjs.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return PI * pow(this.radius, 2);
  }
}

const circle = new Circle(10);
console.log(circle);
console.log(circle.area);
