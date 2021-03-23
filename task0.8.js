function convertNumber(num){
    
    var min = num % 60;
    var hours = (num -min) / 60;
    
    console.log(hours  + " " + "hour(s)" + " " + ", " + min  + " " + "minute(s)");
}
convertNumber(77);