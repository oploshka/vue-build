const monthName = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
];
// const days = [
//   'Воскресенье',
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота'
// ];

export default (date) => {
  // fix
  if (!date) { return ''; }
  if (typeof date === 'string') { date = new Date(date); }

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  const mm = date.getMonth();
  // if (mm < 10) mm = '0' + mm
  const yyyy = date.getFullYear();
  const n = date.getDay();
  // return days[n] + ' ' + dd + ' ' + monthName[mm] + '   ' + yyyy;
  return dd + ' ' + monthName[mm] + '   ' + yyyy;
};
