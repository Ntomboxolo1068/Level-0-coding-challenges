function convertNumber(num){
    
    var min = num % 60;
    var hours = (num -min) / 60;
    
    console.log(hours  + " " + "hour" + ((hours>1)?'s':'') +  ", " + min  + " " + "minute" + ((min>1)?'s':''));
}
convertNumber(133);