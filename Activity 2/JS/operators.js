let f, g, addition, subtraction, multiplication, division;
f = 100;
g = 25;

addition = f + g;
subtraction = f - g;
multiplication = f * g;
division = f / g;

document.getElementById("opAddition").innerHTML = "f + g = " + addition;
document.getElementById("opSubtraction").innerHTML = "f - g = " + subtraction;
document.getElementById("opMultiplication").innerHTML = "f * g = " + multiplication;
document.getElementById("opDivision").innerHTML = "f / g = " + division;