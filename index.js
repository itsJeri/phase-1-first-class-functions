

// function runFiveMiles() {
//     console.log('Go for a five-mile run');
// }
// function liftWeights() {
//     console.log('Pump iron');
// }
// function swimFortyLaps() {
//     console.log('Swim 40 laps');
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }
// // exerciseRoutine(() => console.log('Stretch! Work that core!'));

// // function Monday() {
// //     exerciseRoutine(liftWeights);
// // }



// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = 'protein bar';
//     } else if (exercise === swimFortyLaps) {
//         breakfast = 'kale smoothie';
//     } else {
//         breakfast = 'granola';
//     }

//     exerciseRoutine(exercise);

//     return function () {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
// }

// const afterExercise = morningRoutine(liftWeights);


// WRITE CODE HERE

function receivesAFunction(callBack) {
    console.log(callBack());
}

function returnsANamedFunction() {
    return function helloWorld() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}