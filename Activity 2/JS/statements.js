let salary, tax, subAmount, amount;

salary = 20000;
tax = .05;
subAmount = salary * tax;
amount = salary - subAmount;

document.getElementById("statements").innerHTML =
    "The amount that the employee recieved with the deduction of the tax is " + amount + ".";