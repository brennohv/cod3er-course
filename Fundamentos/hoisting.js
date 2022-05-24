console.log('a =',a)
var a = 2 /* Variavel com VAR sofre içamento, no caso imprimi no console antes de declarar a variavel, e retornou undifined,
ele sobe o VAR e como se estivesse na seguinte ordem: var a ; console.log(a); a = 2; console.log(a). No caso ele volta undefined,
exatamente por isso pois ele ja foi declarado, mas nao colocamos valor a variavel.*/
console.log('a =',a)