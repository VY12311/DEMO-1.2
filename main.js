console.log("Windows PowerShell");
console.log("Copyright (C) Microsoft Corporation. All rights reserved.");
console.log("");
console.log("Try the new cross-platform PowerShell https://aka.ms/pscore6");
console.log("");
console.log("PS D:\workspace>");
var inputsa = [];
var inputsb = [];
function para1wrr() {
    for (var i = 1; i <= 6; i++) {
       inputsa.push(document.getElementById("Para1_box_"+i).value);
    };
    document.getElementById("para1wr").innerHTML = inputsa.join(". ");
};
function para2wrr() {
    for (var k = 1; k <= 6; k++) {
        inputsb.push(document.getElementById("Para2_box_"+k).value);
     };
     document.getElementById("para2wr").innerHTML = inputsb.join(". ");
};