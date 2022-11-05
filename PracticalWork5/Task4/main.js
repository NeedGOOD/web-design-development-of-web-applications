function InfoDate() {
    let elem = document.getElementById('fourth-block');
    let date = new Date(
        Number(document.getElementById('infoYears').value),
        Number(document.getElementById('infoMonth').value),
        0);
    elem.innerHTML = `Date: ${date.getDate()}`;
}