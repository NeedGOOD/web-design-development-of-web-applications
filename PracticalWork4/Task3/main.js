function SerBall(ekzamen) {
    let sum = 0;

    for (let serball in ekzamen) { sum += ekzamen[serball]; }

    if (sum != 0) { return sum / Object.keys(ekzamen).length; }
    return 0;
}

let ekzamen = {
    Vova: 5,
    Serg: 4,
    Sasha: 3
};
console.log(SerBall(ekzamen));