const testVar = {}

function superbowlWin(records) {
  let year
  const win = records.find((record) => {
    if (record.result === 'W') {
      return record
    }
  })
  if (win) {
    year = win.year
  }
  return year
}