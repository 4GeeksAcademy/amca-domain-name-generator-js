let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let tld = [".com", ".net", ".us", ".io", ".ve", ".org"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < tld.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + tld[l]);
      }
    }
  }
}
