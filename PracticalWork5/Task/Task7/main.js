function StoryDate() {
    let elem = document.getElementById('seventh-block');
    let firstDate = document.getElementById('started-date').value;
    let secondDate = document.getElementById('end-date').value;
    let startDate = new Date(firstDate);
    let endDate = new Date(secondDate);
    let difference = new Date(endDate - startDate);
    
    elem.innerHTML = `years = ${difference.getFullYear() - 1970}<br>
                      months = ${difference.getMonth()}<br>
                      days = ${difference.getDate()}`;
}