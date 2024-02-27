/* Quando você chama uma função no JavaScript, ela retorna implicitamente undefined se não houver uma instrução return específica. 
Se você não envolver a chamada da função em console.log(), você verá apenas a saída gerada pela função, mas não o valor retornado, 
que é undefined. 

Quando você faz console.log(log()), você está imprimindo tanto a saída da função interna quanto o valor retornado pela função 
externa (que é undefined, já que a função externa não tem uma instrução return explícita). Por outro lado, quando você faz apenas 
log(), você vê apenas a saída da função interna, pois a chamada não está envolvida em console.log(), e não há instrução return 
na função externa. */


function log() {
    console.log('logado!');
}

log();
console.log(log());