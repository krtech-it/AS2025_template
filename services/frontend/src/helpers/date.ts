export const dateFormat = 'DD.MM.YYYY'
export const dateFormatISO = 'YYYY-MM-DDTHH:SS:mm'
export const now = Date.now()

export function convertDateRuUtc (date: string): string {
  const d = date.split('.').reverse()
  return `${d[0]}-${d[1]}-${d[2]}T00:00:00`
}
