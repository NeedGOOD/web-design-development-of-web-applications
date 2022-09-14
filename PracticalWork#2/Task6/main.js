let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

document.write("<table>");

for (let i = 0; i < 3; ++i) {
    document.write("<tr>");

    for (let j = 0; j < 3; ++j) {
        document.write("<td>");
        document.write(array[i][j]);
        document.write("</td>")
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br>");

for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
        array[i][j] = 0;
    }
    array[i][i] = 1;
}
document.write("<table>");

for (let i = 0; i < 3; ++i) {
    document.write("<tr>");

    for (let j = 0; j < 3; ++j) {
        document.write("<td>");
        document.write(array[i][j]);
        document.write("</td>")
    }
    document.write("</tr>");
}
document.write("</table>");
