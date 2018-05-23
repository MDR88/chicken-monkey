// const chickenMonkey = function() {
//     for (let i = 1; i <= 100; i++)

//         if (i % 5 === 0) {
//         console.log("chicken")

//     } else if (1 % 7 === 0) {
//         console.log("monkey")

//     }

// }

// chickenMonkey()


// const chickenMonkey = function() {
//         for (let i = 1; i <= 100; i++) {

for (let i = 0; i <= 100; i++) {
    const currentNumber = [i]
    if (currentNumber % 7 === 0 && currentNumber % 5 === 0) {
        console.log(currentNumber + "Chicken Monkey")
    } else if (currentNumber % 5 === 0) {
        console.log(currentNumber + "Chicken")

    } else if (currentNumber % 7 === 0) {
        console.log(currentNumber + "Monkey")

    }

}