function ArraySort(arr) {
    var name = arr.slice();
    return name.sort();
}

var array = ["HTML", "JavaScript", "CSS"];

arrSorted = ArraySort(array);

alert(arrSorted);
alert(array);