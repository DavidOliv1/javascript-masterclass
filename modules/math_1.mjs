// Por meio da palavra chave export é possível exportar qualquer tipo de dado existente dentro de um módulo. Para utilizar modules no Node.js os arquivos devem ter a extensão .mjs

// Também podemos importar e exportar de forma padrão utilizando a palavra-chave default. Somente um export default é permitido por módulo. O export default permite que tenhamos classes ou funções anônimas, uma vez que não precisaremos indicar o nome real da classe ou função quando houver a importação em outro módulo.

export const PI = 3.141592;

export default function pow(base, exponential) {
  if (exponential === 0) return 1;
  return base * pow(base, exponential - 1);
}
