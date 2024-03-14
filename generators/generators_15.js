// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa

// Podemos criar uma função generator colocando o * ao lado da palavra function.

// Além disso, é possível utilizar generators para sincronizar chamadas assíncronas de forma similar ao async/await. Os generators são a base da implementação do async/await

function sum(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

function async(fn) {
  const gen = fn();
  asyncR(gen);
}

function asyncR(gen, result) {
  const obj = gen.next(result);
  if (obj.done) return;
  obj.value.then(result => {
    asyncR(gen, result)
  });
}

async(function* () {
  const a = yield sum(2, 2);
  const b = yield sum(4, 4);
  const result = yield sum(a, b);
  console.log(result);
});
