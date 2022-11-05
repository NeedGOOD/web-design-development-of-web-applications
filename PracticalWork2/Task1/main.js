let sum = 0;

while (true) {
    let integer = Number(prompt('Введіть ціле число'));
    
    if (integer == 0) { break; }

    let prime = true;

    for (let i = 2; i < integer; ++i) {
        if (integer % i == 0) { prime = false; }
    }

    if (prime) {
        alert(integer + " - це просте число");

        let number = 0;
        number = integer;
        
        sum += number;
    } else { alert(integer + " - це не просте число")}
}
document.write("Sum = " + sum);