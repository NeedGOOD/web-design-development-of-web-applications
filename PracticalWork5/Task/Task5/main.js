function SecondsPassed() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let firstDiff = now - today;
    let secondDiff = tomorrow - now;

    let elem = document.getElementById('fifth-block');
    
    elem.innerHTML = `Seconds since the beginning of the day: ${Math.round(firstDiff / 1000)}<br>
                      A second from now: ${Math.round(secondDiff / 1000)}`;
}