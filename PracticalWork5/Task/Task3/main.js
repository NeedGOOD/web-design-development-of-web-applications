function InfoDate() {
    let date = new Date();

    let week = "";

    if (nowDate.getDay() == 0) { week = "Неділя"; }
    else if (nowDate.getDay() == 1) { week = "Понеділок"; }
    else if (nowDate.getDay() == 2) { week = "Вівторок"; }
    else if (nowDate.getDay() == 3) { week = "Середа"; }
    else if (nowDate.getDay() == 4) { week = "Четверг"; }
    else if (nowDate.getDay() == 5) { week = "П'ятниця"; }
    else if (nowDate.getDay() == 6) { week = "Субота"; }

    let month = "";

    if (nowDate.getMonth() == 0) { month = "Січень"; }
    else if (nowDate.getMonth() == 1) { month = "Лютий"; }
    else if (nowDate.getMonth() == 2) { month = "Березень"; }
    else if (nowDate.getMonth() == 3) { month = "Квітень"; }
    else if (nowDate.getMonth() == 4) { month = "Травень"; }
    else if (nowDate.getMonth() == 5) { month = "Червень"; }
    else if (nowDate.getMonth() == 6) { month = "Липень"; }
    else if (nowDate.getMonth() == 7) { month = "Серпень"; }
    else if (nowDate.getMonth() == 8) { month = "Вересень"; }
    else if (nowDate.getMonth() == 9) { month = "Жовтень"; }
    else if (nowDate.getMonth() == 10) { month = "Листопад"; }
    else if (nowDate.getMonth() == 11) { month = "Грудень"; }

    let elem = document.getElementById('third-block');

    date.setTime(date.getTime() - 24 * 60 *  60 * 1000 * Number(document.getElementById('daysAgo').value));
    
    elem.innerHTML = `${week} ${month} ${date.getDate()} ${date.getFullYear()}`;
}