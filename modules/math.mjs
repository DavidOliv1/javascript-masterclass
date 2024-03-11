// Por meio da palavra chave export é possível exportar qualquer tipo de dado existente dentro de um módulo. Para utilizar modules no Node.js os arquivos devem ter a extensão .mjs

export const PI = 3.141592;

export function pow(base, exponential) {
  if (exponential === 0) return 1;
  return base * pow(base, exponential - 1);
}
