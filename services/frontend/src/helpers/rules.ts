export const dateRule = (date: string) => /^(0?[1-9]|[12][0-9]|3[01])[.-](0?[1-9]|1[012])[.-]\d{4}$/.test(date)
export const numberRule = (val: number) => (val && val > 1) || 'Укажите нормальную стоимость'
export const required = (val: any) => ![null, undefined, ''].includes(val) || 'Обязательно для заполнения'
