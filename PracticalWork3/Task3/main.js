function FilterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; ++i) {
        var number = arr[i];

        if (number < a || number > b) {
            arr.splice(i, 1);
            --i;
        }
    }
    alert(arr);
}

var array = [ 5, 3, 8, 1 ];

FilterRangeInPlace(array, 1, 4);