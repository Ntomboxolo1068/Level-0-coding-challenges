function Vowels(name){
    var vowelArr = [ ];
    var tempVow = name.replace(/[^aeiouAEIOU]/gi,"").split("");
    
    for(var i = 0; i < tempVow.length; i++){
        
        if(vowelArr.indexOf(tempVow[i].toLowerCase()) == -1)
        {
           vowelArr.push(tempVow[i].toLowerCase());
        }          
    }
    return "Vowels: " + vowelArr.join(", ");
}
console.log(Vowels("Umuzi"));
