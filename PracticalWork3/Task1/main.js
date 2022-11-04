function Matrix(array) {
    document.write("<table>");

    for (let i = 0; i < 3; ++i) {
        document.write("<tr>");

        for (let j = 0; j < 3; ++j) {
            document.write("<td>");
            document.write(array[i][j]);
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("<br>");
}

let arrayOne = [ [1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9] ];

Matrix(arrayOne);

function Sum(array) {
    let sum = 0;

    for (let i = 0; i < 3; ++i) {
        sum += array[i];
    }
    return sum;
}

let arrayTwo = [ 1, 2, 3 ];
let sum = Sum(arrayTwo);

alert(sum);