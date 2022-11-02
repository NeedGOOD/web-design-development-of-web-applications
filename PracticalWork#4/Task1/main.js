let programmer = {
    name: "Vlad",
    surname: "Yakusevych"
};
console.log(programmer);

programmer.name = "Olexsandr";
console.log(programmer);

delete programmer.name;
console.log(programmer);