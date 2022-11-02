function IncreasesNum(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") { obj[key] += 12; }
    }
}

let clock = {
    hour: 14,
    minute: 52,
    title: "My clock"
};

IncreasesNum(clock);

console.log(clock);