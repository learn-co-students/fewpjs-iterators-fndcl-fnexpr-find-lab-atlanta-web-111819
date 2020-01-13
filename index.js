const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let found 
     record.find(function(match){
       if(match.year == 1969) {
          found = match.year
       }
      })
      return found
}