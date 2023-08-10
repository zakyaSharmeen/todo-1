var inputText = document.getElementById("txt"),
items = document.querySelectorAll("#list li"),
tab =[], index;

//requirement before edit--(a) & b
 for (var i = 0; i< items.length; i++){
    tab.push(items[i].innerHTML);
 }

 //(c)
 for (var i = 0; i< items.length; i++){
    items[i].onclick = function(){
        index= tab.indexOf(this.innerHTML)
        console.log(this.innerHTML + "INDEX =" + index);
        
        //d
        inputText.value = this.innerHTML;
    };
 }

 function refreshArray(){
    tab.length=0;

    for(var i = 0; i< items.length; i++){
        tab.push(items[i].innerHTML);
    }
 }
 






// add
 
 function addLI(){
    if(inputText.value==0){
        alert("write something")
    }else{
    var listNode = document.getElementById("list"),
        textNode = document.createTextNode(inputText.value),
        liNode = document.createElement("lI");

        liNode.appendChild(textNode);
        listNode.appendChild(liNode);

        inputText.value=""
    };
}


//edit
// function editLI(){
//    items[index].innerHTML= inputText.value;
  
//    refreshArray();
// }

// //delete
// function deleteLI(){
//     items[index].parentNode.removeChild(items[index]);
//     inputText.value ="";
// }
 
function editLI() {
    index = tab.indexOf(inputText.value);
  
    if (index !== -1) {
        items[index].innerHTML = inputText.value;
        refreshArray();
    }
}

//delete
function deleteLI() {
    index = tab.indexOf(inputText.value);
  
    if (index !== -1) {
        items[index].parentNode.removeChild(items[index]);
        refreshArray();
        inputText.value = "";
    }
}