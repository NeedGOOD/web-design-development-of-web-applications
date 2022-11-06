function ChangedDay() {
    let date = new Date();

    let week = "";

    if (date.getDay() == 0) { week = "Неділя"; }
    else if (date.getDay() == 1) { week = "Понеділок"; }
    else if (date.getDay() == 2) { week = "Вівторок"; }
    else if (date.getDay() == 3) { week = "Середа"; }
    else if (date.getDay() == 4) { week = "Четверг"; }
    else if (date.getDay() == 5) { week = "П'ятниця"; }
    else if (date.getDay() == 6) { week = "Субота"; }

    let month = "";

    if (date.getMonth() == 0) { month = "Січень"; }
    else if (date.getMonth() == 1) { month = "Лютий"; }
    else if (date.getMonth() == 2) { month = "Березень"; }
    else if (date.getMonth() == 3) { month = "Квітень"; }
    else if (date.getMonth() == 4) { month = "Травень"; }
    else if (date.getMonth() == 5) { month = "Червень"; }
    else if (date.getMonth() == 6) { month = "Липень"; }
    else if (date.getMonth() == 7) { month = "Серпень"; }
    else if (date.getMonth() == 8) { month = "Вересень"; }
    else if (date.getMonth() == 9) { month = "Жовтень"; }
    else if (date.getMonth() == 10) { month = "Листопад"; }
    else if (date.getMonth() == 11) { month = "Грудень"; }

    let elem = document.getElementById('third-block');

    date.setTime(date.getTime() - 24 * 60 * 60 * 1000 * Number(document.getElementById('daysAgo').value));
    
    elem.innerHTML = `${week} ${month} ${date.getDate()} ${date.getFullYear()}`;
}