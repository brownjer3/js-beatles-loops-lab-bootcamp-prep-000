function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0;  i < musicians.length ; i++) {
    beatles.push(musicians[i] + " plays " + instruments [i]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]
  var exclaimFacts = [];
  var i = 0;
  while (i < facts.length) {
    exclaimFacts.push(facts[i] + "!!!");
  }
  return exclaimFacts;
}