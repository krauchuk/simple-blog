const localFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const LocalDate = ({ dateString }) => {
  const splitted = dateString.split('-')
  const date = new Date(Date.UTC(splitted[0], splitted[1], splitted[2]))
  const formatted = date.toLocaleDateString('en-GB', localFormat)

  return <time dateTime={dateString}>{formatted}</time>
}
