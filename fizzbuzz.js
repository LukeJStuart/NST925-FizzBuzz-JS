// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    for (let i = 1; i <= 255; i++) {
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

// Now, we run the main function:
fizzbuzz();
