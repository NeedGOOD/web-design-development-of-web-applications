function InfoTimes() {
    let nowDate = new Date();

    let month = "";

    if (nowDate.getMonth() == 0) { month = "січня"; }
    else if (nowDate.getMonth() == 1) { month = "лютого"; }
    else if (nowDate.getMonth() == 2) { month = "березня"; }
    else if (nowDate.getMonth() == 3) { month = "квітня"; }
    else if (nowDate.getMonth() == 4) { month = "травня"; }
    else if (nowDate.getMonth() == 5) { month = "червня"; }
    else if (nowDate.getMonth() == 6) { month = "липня"; }
    else if (nowDate.getMonth() == 7) { month = "серпня"; }
    else if (nowDate.getMonth() == 8) { month = "вересня"; }
    else if (nowDate.getMonth() == 9) { month = "жовтня"; }
    else if (nowDate.getMonth() == 10) { month = "листопада"; }
    else if (nowDate.getMonth() == 11) { month = "грудня"; }

    let week = "";

    if (nowDate.getDay() == 0) { week = "неділя"; }
    else if (nowDate.getDay() == 1) { week = "понеділок"; }
    else if (nowDate.getDay() == 2) { week = "вівторок"; }
    else if (nowDate.getDay() == 3) { week = "середа"; }
    else if (nowDate.getDay() == 4) { week = "четверг"; }
    else if (nowDate.getDay() == 5) { week = "п'ятниця"; }
    else if (nowDate.getDay() == 6) { week = "субота"; }

    var elem = document.getElementById('first-block');
    
    elem.innerHTML = `Дата: ${nowDate.getDate()} ${month} ${nowDate.getFullYear()} року<br>
                      День тижня: ${week}<br>
                      Час: ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
}