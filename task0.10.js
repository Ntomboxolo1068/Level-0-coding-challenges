function commonLetters(name1, name2){
    let characters = "";
    for (let i = 0; i < name1.length; i += 1) {
      if (characters.indexOf(name1[i]) === -1) {
        if (name2.indexOf(name1[i]) !== -1) {
          characters += name1[i];
        }
    }
 
}
return characters;
}
console.log(commonLetters("computers", "house"));

