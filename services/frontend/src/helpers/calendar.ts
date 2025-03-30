import { Timestamp } from '@quasar/quasar-ui-qcalendar/dist/types'

const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]
const daysShort = [
  'Вс',
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
]
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]
const monthShort = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек'
]

export const dateSort = (a: string, b: string) => {
  if (new Date(a) > new Date(b)) return 1
  if (new Date(a) < new Date(b)) return -1
  return 0
}
export const calendarLocale = {
  days,
  daysShort,
  months,
  monthShort
}
export function isEventInTimeRange (eventStart: Timestamp, eventEnd: Timestamp, firstDay: Timestamp, lastDay: Timestamp): boolean {
  // Проверяем, находится ли начало события внутри отрезка времени
  if (
    new Date(eventStart.date) >= new Date(firstDay.date) &&
    new Date(eventStart.date) <= new Date(lastDay.date)
  ) {
    return true
  }

  // Проверяем, находится ли конец события внутри отрезка времени
  if (
    new Date(eventEnd.date) >= new Date(firstDay.date) &&
    new Date(eventEnd.date) <= new Date(lastDay.date)
  ) {
    return true
  }

  // Проверяем, полностью ли событие находится внутри отрезка времени
  if (
    new Date(eventStart.date) <= new Date(firstDay.date) &&
    new Date(eventEnd.date) >= new Date(lastDay.date)
  ) {
    return true
  }

  // Если ни одно из условий выше не выполнено, возвращаем false
  return false
}
