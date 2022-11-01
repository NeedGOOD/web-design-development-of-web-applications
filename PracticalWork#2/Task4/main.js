let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i = 0; i < daysOfWeek.length; ++i) {
    document.write(daysOfWeek[i]);
    document.write("<br>");
}

for (let i = daysOfWeek.length - 1; i >= 0; --i) { document.write(daysOfWeek[i]); }
document.write("<br>");

let lastDay = daysOfWeek.pop();

daysOfWeek.unshift(lastDay);
document.write(daysOfWeek);