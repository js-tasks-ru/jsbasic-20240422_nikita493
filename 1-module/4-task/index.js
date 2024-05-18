const words = ['1xBet', 'XXX'];
function checkSpam(str) {
  for (let i = 0; i < words.length; i++) {
    if (str.toUpperCase().includes(words[i].toUpperCase())) {
      return true;
    }
    }
    return false;
}



