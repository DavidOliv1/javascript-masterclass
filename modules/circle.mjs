// Também podemos importar e exportar de forma padrão utilizando a palavra-chave default. Somente um export default é permitido por módulo. O export default permite que tenhamos classes ou funções anônimas, uma vez que não precisaremos indicar o nome real da classe ou função quando houver a importação em outro módulo.

import pow, { PI } from "./math_1.mjs";

export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return PI * pow(this.radius, 2);
  }
}
