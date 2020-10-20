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
}
