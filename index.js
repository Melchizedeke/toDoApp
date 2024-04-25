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
                <button class='delete'>Delete</button>
            </div>`

        //Deleting a task
        let ongoingTask = document.querySelectorAll('.delete');
        for (let i = 0; i < ongoingTask.length; i++) {
            ongoingTask[i].onclick = function () {
                this.parentNode.remove()
            }
        }

        //Marking out a completed task
        let tasks = document.querySelectorAll('.tasks');
        for (i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('crossline');
            }
        }
    }



}