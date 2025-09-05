const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
    const max = parseInt(answer);
    if (isNaN(max) || max < 1) {
        console.log('Please enter a valid positive integer.');
        rl.close();
        return;
    }
    fizzbuzz(max);
    rl.close();
});

function fizzbuzz(max) {
    for (let i = 1; i <= max; i++) {
        let output = [];
        let multipleOfEleven = i % 11 === 0;
        if (i % 3 === 0 && !multipleOfEleven) output.push("Fizz");
        if (i % 13 === 0) output.push("Fezz");
        if (i % 5 === 0 && !multipleOfEleven) output.push("Buzz");
        if (i % 7 === 0 && !multipleOfEleven) output.push("Bang");
        if (multipleOfEleven) output.push("Bong");
        if (i % 17 === 0) output.reverse();
        console.log(output.join("") || i);
    }
}
