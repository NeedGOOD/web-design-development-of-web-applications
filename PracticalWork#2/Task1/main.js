let sum = 0;

while (true) {
    let integer = Number(prompt('Введіть ціле число'));
    
    if (integer == 0) {
        break;
    }

    let prime = true;

    for (let i = 2; i < integer; ++i) {
        if (integer % i == 0) {
            prime = false;
        }
    }

    if (prime == true) {
        alert(integer + " - це просте число");

        let number = 0;
        number = integer;
        
        sum += number;
    }
}
document.write("sum = " + sum);