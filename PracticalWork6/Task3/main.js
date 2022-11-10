function NumberOperatorNumber() {
    const string = prompt();

    let a = 0;
    let operator = '';
    let strNumber = '';

    for (let i = 0; i < string.length; ++i) {
        if (string.charAt(i) >= '0' && string.charAt(i) <= '9') { strNumber += string.charAt(i); }
        else if (string.charAt(i) == '+' || string.charAt(i) == '-' ||
                 string.charAt(i) == '*' || string.charAt(i) == '/') {
            operator = string.charAt(i);
            a = Number(strNumber);
            strNumber = "";
        }
    }
    const b = Number(strNumber);

    let result = 0;

    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }
    alert(`${a} ${operator} ${b} = ${result}`)
}

NumberOperatorNumber();