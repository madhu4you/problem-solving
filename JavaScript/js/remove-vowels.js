function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  
  //////////////////////////////
  
  function removeVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }
  