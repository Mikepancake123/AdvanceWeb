const names = ["Joseph", "Patrick", "Rochelle"];

document.getElementById("arrMethod1").innerHTML = names.join(" - ");
document.getElementById("arrMethod2").innerHTML = names.pop();
names.push("Carmen");
document.getElementById("arrMethod3").innerHTML = names;