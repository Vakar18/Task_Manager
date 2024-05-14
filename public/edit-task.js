const taskIDDOM = document.querySelector('.task-edit-id');
const taskTitleDOM = document.querySelector('.task-edit-title');
const taskDescDOM = document.querySelector('.task-edit-desc');
const taskCompletedDOM = document.querySelector('.task-edit-completed');
const editFormDOM = document.querySelector('.single-task-form');
const editBtnDOM = document.querySelector('.task-edit-btn');
const formAlertDOM = document.querySelector('.form-alert');
const params = window.location.search;
const id = new URLSearchParams(params).get('id');
let tempTitle;
let tempDesc;

const showTask = async () => {
    try {
        const { data: { singleTask } } = await axios.get(`/api/v1/tasks/${id}`);
        const { _id: taskID, completed, title, description } = singleTask;

        taskIDDOM.textContent = taskID;
        taskTitleDOM.value = title;
        taskDescDOM.value = description;
        tempTitle = title;
        tempDesc = description;
        if (completed) {
            taskCompletedDOM.checked = true;
        }
    } catch (error) {
        console.log(error);
    }
};

showTask();

editFormDOM.addEventListener('submit', async (e) => {
    editBtnDOM.textContent = 'Loading...';
    e.preventDefault();
    try {
        const title = taskTitleDOM.value;
        const description = taskDescDOM.value;
        const completed = taskCompletedDOM.checked;

        const { data: { updatedTask } } = await axios.patch(`/api/v1/tasks/${id}`, {
            title,
            description,
            completed,
        });

        const { _id: taskID, completed: updatedCompleted, title: updatedTitle, description: updatedDescription } = updatedTask;

        taskIDDOM.textContent = taskID;
        taskTitleDOM.value = updatedTitle;
        taskDescDOM.value = updatedDescription;
        tempTitle = updatedTitle;
        tempDesc = updatedDescription;
        if (updatedCompleted) {
            taskCompletedDOM.checked = true;
        }
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = 'Success, edited task';
        formAlertDOM.classList.add('text-success');
    } catch (error) {
        console.error(error);
        taskTitleDOM.value = tempTitle;
        taskDescDOM.value = tempDesc;
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = 'Error, please try again';
    }
    editBtnDOM.textContent = 'Edit';
    setTimeout(() => {
        formAlertDOM.style.display = 'none';
        formAlertDOM.classList.remove('text-success');
    }, 3000);
});
