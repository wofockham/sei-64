function quickSort (arr) {
  if (arr.length <= 1) { // base case
    return arr;
  }

  const pivot = arr.shift(); // .pop() would also work

  // O(2N)
  const lessThan = arr.filter(element => element < pivot);
  const greaterThan = arr.filter(element => element >= pivot);

  // TODO: O(N) using reduce()

  // O(N)
  // const lessThan = [];
  // const greaterThan = [];
  // arr.forEach((element) => {
  //   if (element < pivot) {
  //     lessThan.push(element);
  //   } else {
  //     greaterThan.push(element);
  //   }
  // });

  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

module.exports = quickSort;