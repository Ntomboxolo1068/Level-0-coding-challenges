function areaOfTriangle(sideA,sideB,sideC)
{
var perimeter = (sideA + sideB + sideC) / 2;
var area =  Math.sqrt(perimeter * ((perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC)));
console.log(area);
 return area;
}
areaOfTriangle(2,4,3);
