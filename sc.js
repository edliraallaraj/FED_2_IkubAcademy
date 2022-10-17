// Weather today ?

function weatherOptions() {
    let firstOption = 'good'
    let secondOption = 'bad';
    return [firstOption, secondOption]
}

let options = weatherOptions();
    let firstOption = options[0];
    let secondOption = options[1];
    console.log(`The weather is ${options [0]}`);
    console.log(`The weather is ${options [1]}`);

    // Undefined

let favGame = {};
console.log(`My favourite game is ${favGame [4]}`);