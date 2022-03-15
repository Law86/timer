const action = function() {
  console.log("Beep!")
  process.stdout.write('\x07');
}

const args = process.argv.slice(2);
args.forEach(function (val) {

  if (val === 0 || isNaN(val)) {
      console.log("No Number, No Beeps!")
  } else {
      if (val < 0) {
          console.log("Negative Number, No Beeps!")
      } else {
          if (val > 0) {
              setTimeout(action
                  , val * 1000)
          }
      }
  }
})