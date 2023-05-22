function bubbleSort (array) {
    let iterateAgain = true; // we need to iterate at least once

    let end = array.length - 1;

    while (iterateAgain) {
        iterateAgain = false; // maybe this is the last iteration
        for (let i = 0; i < end; i++) {
            // if the next two elements are not in order
            if (array[i] > array[i + 1]) {
                // ES6 array destructuring for parallal assignment
                // [a, b] = [b, a];
                [array[i], array[i+1]] = [array[i+1], array[i]]; 
                iterateAgain = true;
            }
        }
        end--;
    }

    return array;
}

module.exports = bubbleSort;