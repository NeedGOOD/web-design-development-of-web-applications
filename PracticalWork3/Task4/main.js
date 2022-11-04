function ReverseSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr.sort();
        arr.reverse();
    }
    alert(arr);
}

var array = [ 5, 2, 1, -10, 8 ];

ReverseSort(array);