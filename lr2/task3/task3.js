function getLastDayOfMonth(year, month) {
    let date = new Date(year, month+1);
    date.setDate(0);
    return date.getDate();
}

document.write("Останній день місяця: ", getLastDayOfMonth(2020, 1))