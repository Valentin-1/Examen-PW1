const listItemsTwo = document.getElementsByTagName("li"); 
let h = 1;
setInterval (() => {
    if (h <= 20){
        const list = document.createElement("li");
        const textList = document.createTextNode(`Element ${h}`);
        list.appendChild(textList);
        document.getElementById("listId").appendChild(list);
        if (h % 2 === 0) {
            list.style.backgroundColor = "green"; 
        } else {
            list.style.backgroundColor = "violet";
        }
        h++;
    }
}, 2000);