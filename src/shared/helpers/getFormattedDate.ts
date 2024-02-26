export const getFormattedDate = (
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' },
) => {
  return new Intl.DateTimeFormat('ru', {
    ...options,
  }).format(new Date(date))
}
