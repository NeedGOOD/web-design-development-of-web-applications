function NumberOperatorNumber() {
    let elem = document.getElementById('block');
    let string = document.getElementById('number-operator-number').value;

    let strNumber = '';
    let a = 0;
    let b = 0;

    for (let i = 0; i < string.length; ++i) {
        if (string[i] >= '0' && string[i] <= '9') { 
            strNumber += string.charAt(i);
            document.write(strNumber[i] + '<br>');
        }
        else if (string[i] == '+' || string[i] == '-' ||
                 string[i] == '*' || string[i] == '/') {
            a = Number(strNumber);
            strNumber = '';
        }
    }
    b = Number(strNumber);
    document.write(b);


    function Sum(a, b) { return a + b; }
    function Difference(a, b) { return a - b; }
    function Product(a, b) { return a * b; }
    function Fraction(a, b) { return a / b; }

    for (let i = 0; i < string.length; ++i) {
        if (string[i] == '+') { 
            document.write('+');
            elem.innerHTML = `${Sum(a, b)}`; }
        else if (string[i] == '-') { 
            document.write('-');
            elem.innerHTML = `${Difference(a, b)}`; }
        else if (string[i] == '*') { 
            document.write('*');
            elem.innerHTML = `${Product(a, b)}`; }
        else if (string[i] == '/') { 
            document.write('/');
            elem.innerHTML = `${Fraction(a, b)}`; }
    }
}