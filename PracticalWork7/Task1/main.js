function TextSearch() {
    let elem = document.getElementById('text');
    let fullText = elem.textContent;

    let sentence = prompt();

    fullText = fullText.replaceAll(sentence, `<b>${sentence}</b>`);
    
    if (elem.textContent == fullText) {
        alert('Нічого не знайдено!');
        return;
    }
    elem.innerHTML = fullText;
}
TextSearch();