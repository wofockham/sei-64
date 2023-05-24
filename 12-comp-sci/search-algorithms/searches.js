function binarySearch (haystack, needle) {
    let start = 0;
    let end = haystack.length - 1;
    let midpoint = Math.floor((start + end) / 2); // we need the index to be an integer

    // while the needle is not found AND there are still haystack elements to consider
    while (haystack[midpoint] !== needle && start < end) {
        if (needle < haystack[midpoint]) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
        midpoint = Math.floor((start + end) / 2);
    }

    return needle === haystack[midpoint] ? midpoint : -1;
}

function recursiveBinarySearch (haystack,
                                needle,
                                start=0,
                                end=haystack.length - 1,
                                midpoint=Math.floor((start+end) / 2)) {
    if (needle === haystack[midpoint]) return midpoint; // base case: success
    if (start >= end) return -1; // base case: failure

    if (needle < haystack[midpoint]) {
        end = midpoint - 1;
    } else {
        start = midpoint + 1;
    }

    return recursiveBinarySearch(haystack, needle, start, end);
}


module.exports = {
    binarySearch,
    recursiveBinarySearch
}