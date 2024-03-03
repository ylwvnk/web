const getTimeDiff = (date: string) => {
  const diff = (new Date().getTime() - new Date(date).getTime()) / 1000

  const minutes = Math.floor(diff / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  return {
    minutes,
    hours,
    days,
    months,
    years,
    diff
  }
}

export const formatRelativeTime = (date: string, locale = 'en') => {
  const { minutes, hours, days, months, years, diff } = getTimeDiff(date)
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

  if (years > 0) {
    return rtf.format(-years, 'year')
  } else if (months > 0) {
    return rtf.format(-months, 'month')
  } else if (days > 0) {
    return rtf.format(-days, 'day')
  } else if (hours > 0) {
    return rtf.format(-hours, 'hour')
  } else if (minutes > 0) {
    return rtf.format(-minutes, 'minute')
  } else {
    return rtf.format(-diff, 'second')
  }
}
