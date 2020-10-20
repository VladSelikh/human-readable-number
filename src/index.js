module.exports = function toReadable (number) {
    let c = number % 10;
    let b = ((number - c) % 100)/10;
    let a = ((number - c - 10 * b) % 1000)/100;
    let humReadNum = "";
    if (a===0 && b===0 && c===0) {
      return 'zero';
    }
}
