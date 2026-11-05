const zone = 'Asia/Kolkata';

export function dayKey(date: Date) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: zone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function shortDate(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    day: 'numeric',
    month: 'short',
  }).format(date);
}

export function longDate(date: Date) {
  const weekday = new Intl.DateTimeFormat('en-GB', { timeZone: zone, weekday: 'long' }).format(date);
  return `${weekday} ${shortDate(date)}`;
}

export function onFrontPage(date: Date, now = new Date()) {
  const cutoff = new Date(now);
  cutoff.setDate(cutoff.getDate() - 30);
  return dayKey(date) >= dayKey(cutoff);
}

export function isUpcoming(date: Date, now = new Date()) {
  return dayKey(date) >= dayKey(now);
}
