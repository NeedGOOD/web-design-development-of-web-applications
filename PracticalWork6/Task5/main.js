function HowMuch() {
    const string = prompt();

    let sum = 0;

    for (let i = 0; i < string.length; ++i) {
        if (string.charAt(i) >= '0' && string.charAt(i) <= '9') { sum += Number(string.charAt(i)); }
    }
    return sum;
}
alert(HowMuch());