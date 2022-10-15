//  1- Create a function that  will  return if the weather today is good or bad (depending on your choices).


function findWeatherOptions() {
    let firstOption = 'good',
        secondOption = 'bad';
    return [firstOption, secondOption];
}
let options = findWeatherOptions();
const firstOption = options[0],
      secondOption  = options[1];
console.log(`The weather is ${options [0]}`);
console.log(`The weather is ${options [1]}`);


// Create an object that will output "This object is undefined"
let proglang = {};
console.log(`This object is ${proglang [3]}`);

