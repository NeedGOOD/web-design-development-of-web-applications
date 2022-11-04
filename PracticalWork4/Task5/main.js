let calculator = {
    read() {
        numberOne = Number(prompt('Введіть перше ціле число'));
        numberTwo = Number(prompt('Введіть друге ціле число'));
    },

    sum() { return numberOne + numberTwo; },

    mul() { return numberOne * numberTwo; }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());