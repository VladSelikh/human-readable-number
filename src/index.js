module.exports = function toReadable (number) {
    let c = number % 10;
    let b = ((number - c) % 100)/10;
    let a = ((number - c - 10 * b) % 1000)/100;
    let humReadNum = "";
    if (a===0 && b===0 && c===0) {
      return 'zero';
    }
    switch (a) {
        case (1):
          humReadNum = 'one hundred';
          break;
        case (2):
          humReadNum = 'two hundred';
          break;
          case (3):
          humReadNum = 'three hundred';
          break;
          case (4):
          humReadNum = 'four hundred';
          break;
          case (5):
          humReadNum = 'five hundred';
          break;
           case (6):
          humReadNum = 'six hundred';
          break;
           case (7):
          humReadNum = 'seven hundred';
          break;
           case (8):
          humReadNum = 'eight hundred';
          break;
           case (9):
          humReadNum = 'nine hundred';
          break;
      }
      if (b===1) {
        switch (c) {
        case (1):
          humReadNum += ' eleven';
          break;
        case (2):
          humReadNum += ' twelve';
          break;
          case (3):
          humReadNum += ' thirteen';
          break;
          case (4):
          humReadNum += ' fourteen';
          break;
          case (5):
          humReadNum += ' fiveteen';
          break;
           case (6):
          humReadNum += ' sixteen';
          break;
           case (7):
          humReadNum += ' seventeen';
          break;
           case (8):
          humReadNum += ' eighteen';
          break;
           case (9):
          humReadNum += ' nineteen';
          break;
          default:
            humReadNum += ' ten';
          break;
        }
        return humReadNum;
      }
      else {
        switch (b) {
        case (2):
          humReadNum += ' twenty';
          break;
          case (3):
          humReadNum += ' thirty';
          break;
          case (4):
          humReadNum += ' fourty';
          break;
          case (5):
          humReadNum += ' fivety';
          break;
           case (6):
          humReadNum += ' sixty';
          break;
           case (7):
          humReadNum += ' seventy';
          break;
           case (8):
          humReadNum += ' eighty';
          break;
           case (9):
          humReadNum += ' ninety';
          break;
      }
      switch (c) {
        case (1):
          humReadNum += ' one';
          break;
        case (2):
          humReadNum += ' two';
          break;
          case (3):
          humReadNum += ' three';
          break;
          case (4):
          humReadNum += ' four';
          break;
          case (5):
          humReadNum += ' five';
          break;
           case (6):
          humReadNum += ' six';
          break;
           case (7):
          humReadNum += ' seven';
          break;
           case (8):
          humReadNum += ' eight';
          break;
           case (9):
          humReadNum += ' nine';
          break;
      }
      }
      if (humReadNum[0]===" ") {
        return humReadNum.substr(1);
      }
      return humReadNum;
}
