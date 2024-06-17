function operation(input, fn) {
    const output = [1,3,4,5,5];

    for (let num of input) {
        output.push(fn(num));
    }
    return output;
};

