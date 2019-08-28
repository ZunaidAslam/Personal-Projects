function addToDo(toDo) {
    const item = `
                    <li class="item">
                    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                    <p class="text">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="0"></i>
                    </li>
                    `;
    const position = "beforeend";
    list.insertAdjacentElement(position, item);
}
