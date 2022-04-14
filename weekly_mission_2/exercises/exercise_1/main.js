const operations = require('./listOperations.js');
const listExported = require('./listExplorers.js');

console.log('Nombres de los explorers:');
operations.printNames(listExported.explorers);

console.log('\nEl stack de cada explorer es:');
operations.printStack(listExported.explorers);

console.log('\nLista de todos los stacks: ');
operations.listStacks(listExported.explorers);

console.log('\nLista de los explorers con javascript como stack: ');
operations.javascriptStack(listExported.explorers);

console.log('\nEl primer explorer de CDMX: ');
operations.firstCDMX(listExported.explorers);

console.log('\n')
operations.exercisesCompleted(listExported.explorers);

console.log('\n')
operations.atLeastOneFinish(listExported.explorers);

console.log('\n')
operations.everyOneFinishOnBoarding(listExported.explorers);
