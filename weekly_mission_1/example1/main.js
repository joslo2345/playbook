//1. Creación de un objeto con propiedades

let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

//2. Declaración de un objeto con variables locales y públicas

const myModule = (() =>{
    // Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto";
    const privateBar = [1,2,3,4];
    const baz = "Soy un valor que va a ser expuesto";

    // Variables para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }
return exported;
})()

console.log(myModule);