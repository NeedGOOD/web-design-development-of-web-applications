function WordStorting() {
    let elem = document.getElementById('block');
    let words = document.getElementById('words').value;

    let string = '';
    let name = '';

    for (let i = 0; i < words.length; ++i) {
        if (words[i] == ' ') {
            name = name + string + ' ';
            string = ''
        } else { string += words.charAt(i); }
    }

    for (let i = 0; i < name.length; ++i) {
        name.sort();
    }
    elem.innerHTML = `${name}`;
}