function getWeekDay(date) {
    const daysOfWeek = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return daysOfWeek[date.getDay()];
  }
  
  let date = new Date(2012, 0, 3); // 3 січня 2012
  alert(getWeekDay(date)); // Повинно виводити 'ВТ'
  