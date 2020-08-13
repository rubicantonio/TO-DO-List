var string1 = document.getElementById("text1").value;
var string2 = document.getElementById("text2").value;



function fn1() {
	// NAME
    var string1 = document.getElementById("text1").value;
    var newDiv = document.createElement("li")
    newDiv.className = "li1"
    newDiv.innerHTML = string1
    document.body.appendChild(newDiv);

    // DATE
    var string2 = document.getElementById("text2").value;
    var newDIv = document.createElement("li")
    newDIv.className = "li1"
    newDIv.innerHTML = string2
    document.body.appendChild(newDIv);

}