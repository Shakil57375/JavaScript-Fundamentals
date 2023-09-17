const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

const findPrimeNumbers = (numbers) => {
    return numbers.filter((value) => isPrime(value));
};

console.log(findPrimeNumbers([3, 5, 6, 8, 4, 11])); // Output: [3, 5, 11]
