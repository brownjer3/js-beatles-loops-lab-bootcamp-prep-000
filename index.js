function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0;  i < musicians.length ; i++) {
    beatles.push(musicians[i] + " plays " + instruments [i]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (newFacts < facts.length) {
    newFacts.push(facts[i] + "!!!");
  }
  return newFacts;
}