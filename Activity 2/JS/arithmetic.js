let r, s, add, sub, mul, div;
r = 10;
s = 5;

add = r + s;
sub = r - s;
mul = r * s;
div = r / s;

document.getElementById("arithAddition").innerHTML = "r + s = " + add;
document.getElementById("arithSubtraction").innerHTML = "r - s = " + sub;
document.getElementById("arithMultiplication").innerHTML = "r * s = " + mul;
document.getElementById("arithDivision").innerHTML = "r / s = " + div;