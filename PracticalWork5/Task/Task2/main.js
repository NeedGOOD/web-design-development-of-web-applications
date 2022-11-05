function DayDate(infoDate) {
    if (infoDate.getDay() == 0) { week = "неділя"; }
    else if (infoDate.getDay() == 1) { week = "понеділок"; }
    else if (infoDate.getDay() == 2) { week = "вівторок"; }
    else if (infoDate.getDay() == 3) { week = "середа"; }
    else if (infoDate.getDay() == 4) { week = "четверг"; }
    else if (infoDate.getDay() == 5) { week = "п'ятниця"; }
    else if (infoDate.getDay() == 6) { week = "субота"; }

    var elem = document.getElementById('second-block');
    
    elem.innerHTML = `Номер дня: ${infoDate.getDate()}<br>
                      Назва тижня: ${week}`;
}

let nowDate = new Date();