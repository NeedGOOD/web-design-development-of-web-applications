let man = true;

if (man == true) { document.write("Я чоловік"); }
else { document.write("Я жінка"); }
document.write("<br>");

let age = 19;

if (age < 0) { document.write("Помилка!"); }
else if (age > -1 && age < 18) { document.write("У мене юний вік"); }
else if (age > 17 && age < 31) { document.write("Я молодий"); }
else if (age > 30 && age < 51) { document.write("Я дорослий"); }
else if (age > 50 && age < 81) { document.write("Я зрілий"); }
else if (age > 80) { document.write("Я старий"); }