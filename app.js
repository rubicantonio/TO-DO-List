 function deleteItem(){
    $("li").last().remove()

}



function addItem() {
	// NAME
    var string1 = document.getElementById("text1").value;
    console.log(string1)


    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(string1));
    ul.appendChild(li);
            // DATE




    /*
    var string2 = document.getElementById("text2").value;
    var newDIv = document.createElement("li")
    newDIv.className = "li1"
    newDIv.innerHTML = string2
    document.body.appendChild(newDIv);
    */

}
