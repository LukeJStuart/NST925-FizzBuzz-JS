// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output || i);
    }
}

// Now, we run the main function:
fizzbuzz();
