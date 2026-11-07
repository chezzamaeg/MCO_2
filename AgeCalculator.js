// Calculates age and days until the next birthday
function ageInfo(birthDate, today = new Date()) {
  const birth = new Date(birthDate);
  const thisYearBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  const hadBirthday = thisYearBirthday <= today;

  const age = today.getFullYear() - birth.getFullYear() - (hadBirthday ? 0 : 1);
  const next = hadBirthday
    ? new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate())
    : thisYearBirthday;
  const daysUntilBirthday = Math.ceil((next - today) / (1000 * 60 * 60 * 24));

  return { age, daysUntilBirthday };
}

console.log(ageInfo("2000-05-15"));