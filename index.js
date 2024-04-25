//Adding validation for an empty field
document.querySelector('#add-todo').onclick = function () {
    if (document.querySelector('#newtask input').value.length === 0) {
        alert('Please enter a valid todo item.')
    }

    //Adding a new task    
    else {
        document.querySelector('#tasks').innerHTML +=
            `<div class='task'>
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button>Delete</button>
            </div>`
    }

}