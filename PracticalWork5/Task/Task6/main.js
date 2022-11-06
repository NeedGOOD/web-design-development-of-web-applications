let elem = document.getElementById("button");
let sixth = document.getElementById("sixth-block");

elem.addEventListener("click", function () {
    let year = document.getElementById('year').value;
    let halfAge = 'Половина: ';
    let age = 'Вік: ';
    let millennium = 'Тисячоліття: ';

    var number = Math.trunc(year / 100) * 100;

    number = year - number;

    if (year % 100 > 0) {
        if (number >= 50) {
            if (year % 100 >= 50) {
                if (year % 1000 >= 500) {
                    sixth.innerHTML = `${halfAge}2<br>
                                       ${age}${Math.round(year / 100)}<br>
                                       ${millennium}${Math.round(year / 1000)}`;
                } else {
                    sixth.innerHTML = `${halfAge}2<br>
                                       ${age}${Math.round(year / 100)}<br>
                                       ${millennium}${Math.round(year / 1000) + 1}`;;
                }
            } else {
                if (year % 1000 >= 500) {
                    sixth.innerHTML = `${halfAge}2<br>
                                       ${age}${Math.round(year / 100) + 1}<br>
                                       ${millennium}${Math.round(year / 1000)}`;
                } else {
                    sixth.innerHTML = `${halfAge}2<br>
                                       ${age}${Math.round(year / 100) + 1}<br>
                                       ${millennium}${Math.round(year / 1000) + 1}`;;
                }
            }
        } else {
            if (year % 100 >= 50) {
                if (year % 1000 >= 500) {
                    sixth.innerHTML = `${halfAge}1<br>
                                       ${age}${Math.round(year / 100)}<br>
                                       ${millennium}${Math.round(year / 1000)}`;
                } else {
                    sixth.innerHTML = `${halfAge}1<br>
                                       ${age}${Math.round(year / 100)}<br>
                                       ${millennium}${Math.round(year / 1000) + 1}`;;
                }
            } else {
                if (year % 1000 >= 500) {
                    sixth.innerHTML = `${halfAge}1<br>
                                       ${age}${Math.round(year / 100) + 1}<br>
                                       ${millennium}${Math.round(year / 1000)}`;
                } else {
                    sixth.innerHTML = `${halfAge}1<br>
                                       ${age}${Math.round(year / 100) + 1}<br>
                                       ${millennium}${Math.round(year / 1000) + 1}`;;
                }
            }
        }
    }
});