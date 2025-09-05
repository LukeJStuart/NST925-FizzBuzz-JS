const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to FizzBuzz!');
console.log('You can choose how far to count and which rules to apply.');
console.log('');
console.log('First, enter the maximum number to count up to (e.g. 100):');
rl.question('Max number: ', (numAnswer) => {
    const max = parseInt(numAnswer);
    if (isNaN(max) || max < 1) {
        console.log('Please enter a valid positive integer.');
        rl.close();
        return;
    }

    console.log('\nRule options available:');
    console.log('  3  - Fizz: Multiples of 3');
    console.log('  5  - Buzz: Multiples of 5');
    console.log('  7  - Bang: Multiples of 7');
    console.log(' 11  - Bong: Multiples of 11 (overrides other words)');
    console.log(' 13  - Fezz: Multiples of 13');
    console.log(' 17  - Reverse: Multiples of 17 (reverses word order)');
    console.log('\nEnter rules as a comma-delimited list (e.g. 3,5,7,11,13,17):');

    rl.question('Rules: ', (rulesAnswer) => {
        const rules = rulesAnswer.split(',').map(r => r.trim()).filter(r => r.length > 0);
        fizzbuzz(max, rules);
        rl.close();
    });
});

function fizzbuzzValue(i, rules) {
    let output = [];
    let multipleOfEleven = rules.includes('11') && i % 11 === 0;
    if (rules.includes('3') && i % 3 === 0 && !multipleOfEleven) output.push("Fizz");
    if (rules.includes('13') && i % 13 === 0) output.push("Fezz");
    if (rules.includes('5') && i % 5 === 0 && !multipleOfEleven) output.push("Buzz");
    if (rules.includes('7') && i % 7 === 0 && !multipleOfEleven) output.push("Bang");
    if (multipleOfEleven) output.push("Bong");
    if (rules.includes('17') && i % 17 === 0) output.reverse();
    return output.join("") || i.toString();
}

function fizzbuzz(max, rules) {
    for (let i = 1; i <= max; i++) {
        console.log(fizzbuzzValue(i, rules));
    }
}

module.exports = { fizzbuzz, fizzbuzzValue };