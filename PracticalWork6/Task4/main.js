function WordSorting() {
    let words = prompt();
    let string = words.split(' ');

    string.sort();
    
    alert(string);
}

WordSorting();