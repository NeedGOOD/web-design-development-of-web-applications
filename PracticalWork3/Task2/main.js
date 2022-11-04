function Camelize(str) {
    var string = "";

    for (let i = 0; i < str.length; ++i) {
        if (str[i] != "-") { string += str.charAt(i); }
        else if (str[i] == "-") {
            string += str.charAt(i + 1).toUpperCase();
            ++i;
        }
    }
    document.write(string);
    document.write("<br>");
}

var sentence = "my-short-string";

document.write(sentence);
document.write("<br>");

Camelize(sentence);