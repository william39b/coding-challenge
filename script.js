
// Oppgave nummer 1
function firstNut(number) {
    return (number > 0) - (number < 0) ;
}

//console.log(firstNut(1000))

//-------------------------------------------//

// Oppgave 2
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let fizz = i % 3 === 0 || i.toString().includes('3');
        let buzz = i % 5 === 0 || i.toString().includes('5');

        if (fizz && buzz) {
            console.log('FizzBuzz');
        } else if (fizz) {
            console.log('Fizz');
        } else if (buzz) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz(60));

