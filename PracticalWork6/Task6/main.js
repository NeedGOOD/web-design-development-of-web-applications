function NameFile() {
    const string = prompt();

    let nameFile = '';

    let have = false;

    for (let i = string.length - 1; i >= 0; --i) {
        if (string[i] == '\\') {
            break;
        }

        if (have) {
            nameFile += string[i];
        }

        if (string[i] == '.') {
            have = true;
        }
    }
    return nameFile.split("").reverse().join("");
}
alert(NameFile());