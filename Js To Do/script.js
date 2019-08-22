const clear = document.querySelector("clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

function addToDo (toDO){
    const text = `<li class="item">
    <i class="fa fa-circle-thin complete"></i>
    <p class="text"> ${toDO}</p>
    <i class="fa fa-trash-o" job= "delete"></i>
    </li>`
const position = "beforeend";
list.insertAdjacentHTML(position, text);
};

document.addEventListener("keyup", function(event){
    if (event.keyCode==13){
        
    }
})



console.log(input)