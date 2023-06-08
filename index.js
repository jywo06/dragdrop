/* Initially we make variables of the lists,dragbox and drop box*/


let lists=document.getElementsByClassName("list");
let rightBox=document.getElementById("right");
let leftBox=document.getElementById("left");

//TO DRAG AND DROP
for(list of lists){
    //We iterate through each list item and find which item is dragged and add a class called dragging inorder to give it a colour on dragging
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

       selected.classList.add("dragging");
    });
    //Below code removes that colour when the dragging process is done
    list.addEventListener("dragend", function(e) {
        let selected = e.target;
        selected.classList.remove("dragging");
    });
    //The below lines of code is important as 2 .addEvenListener makes sure that the color is put only if it is dragged and dropped in the rightbox and avoiding unnecssary colouring
    list.addEventListener("dragenter", function(e) {
        let selected = e.target;
        selected.querySelector(".drag-overlay").classList.add("dragging");
    });
    list.addEventListener("dragleave", function(e) {
        let selected = e.target;
        selected.querySelector(".drag-overlay").classList.remove("dragging");
    });
    //This allows to prevent the default action that belonging to the event.
    rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
    })
    //Here we listen for drop, where once flagged we remove the color property and append the selected item onto right box
    rightBox.addEventListener("drop",function(e){
            let selected = document.querySelector(".list.dragging");
            selected.classList.remove("dragging");
            rightBox.appendChild(selected);
            selected=null;
            document.getElementById("message").innerHTML = "Item has been successfully dropped!!!";
    })
}

// RESET BUTTON, MESSAGE

let resetButton = document.getElementById("reset");
let originalOrder = Array.from(leftBox.children);

resetButton.addEventListener("click", function() {
    for (let element of originalOrder) {
        leftBox.appendChild(element);
    }
    document.getElementById("message").innerHTML = "";
});