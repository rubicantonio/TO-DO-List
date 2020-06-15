var string1 = document.getElementById("text1").value;


function fn1() {
    var string1 = document.getElementById("text1").value;
    var newDiv = document.createElement("div")
    newDiv.className = "div1"
    newDiv.innerHTML = string1
    document.body.appendChild(newDiv);

}