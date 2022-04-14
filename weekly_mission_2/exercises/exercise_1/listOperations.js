exports.printNames = function (listInput) {
    listInput.forEach( (element) => {
        console.log(element.name);
    });
};

exports.printStack = function(listInput) {
    listInput.forEach( (element) => {
        console.log(element.stack);
    });
};

exports.listStacks  = function(listInput) {
    stackList = listInput.map( (element) => {
        return element.stack;
    });
    console.log(stackList);
};

exports.javascriptStack = function(listInput) {
    stackList = listInput.filter( (element) => 
        //element.stack === 'js';
        element.stack.includes('js'));
    console.log(stackList);
};

exports.firstCDMX = function(listInput) {
    first = listInput.find( (element) => 
        element.city === 'CDMX');
    //console.log(`El ${first.name} es el primero en la lista en pertenecer a ${first.city}`);
    console.log(first);
}

exports.exercisesCompleted = function (listInput) {
    exercisesCompleted = listInput.reduce( (cuenta,actual) => cuenta + actual.exercises_completed,0)
    console.log(`Ejercicios completados por todos los explorers: ${exercisesCompleted}`)
}

exports.atLeastOneFinish = function(listInput) {
    atLeastOne = listInput.some((element) => element.missions.frontend.exercisesFinished === true);
    if (atLeastOne) {
        console.log('Al menos uno de los explorers termino los ejercicios de frontend');
    }
    else{
        console.log('Ninguno de los explorers termino los ejercicios de frontend');
    }
}

exports.everyOneFinishOnBoarding = function(listInput) {
    everyOne = listInput.every((element) => element.missions.onboarding.isFinished === true);
    if (everyOne) {
        console.log('Todos los explorers terminaron el onboarding');
    }
    else{
        console.log('No todos los explorers terminaron el onboarding');
    }
}