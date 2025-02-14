const state = {
  taskList: [],
};

// DOM Operations
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

// console.log(taskContents);
// console.log(taskModal);
//template for card on screen
const htmlTaskContent = ({ id, title, description, type, url }) => `
    <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
    <div class='card shadow-sm task_card'>
    <div class='card-header d-flex justify-content-end task_header'>
        <button tupe='button' class='btn btn-outline-primary mr-1.5' name=${id}>
        <i class='fas fa-pencil-alt' name=${id} ></i>
        </button>
        <button tupe='button' class='btn btn-outline-danger mr-1.5' name=${id}>
        <i class='fas fa-trash-alt' name=${id} ></i>
        </button>
    
    </div>
    <div class='card-body'>
        ${
            url && 
            `<img width='100%' src=${url} alt='Card-image' class='card-img-top md-3 rounded-lg'/>`
        }
        <h4 class='card-title task_card_title'>${title}</h4>
        <p class='description trim-3-lines text-muted'>${description}</p>
    </div>
    <div class='tags text-white d-felx flex-wrap'>
     <span class='badge bg-primary m-1'>${type}</span>
    </div>
    <div class='card-footer'>
    <button type='button' class='btn btn-outline-primary float-right data-bs-toggle="modal" data-bs-target="#showTask"'>Open Task</button>
    </div>
    
    </div>
    </div>
`
//Modal body on openTask
const htmlModalContent = ({id, title,description,url})=> {
const date=new Date(parseInt(id));
return `
<div id=${id}>
        ${
            url && 
            `<img width='100%' src=${url} alt='Card-image' class='card-img-top md-3 rounded-lg'/>`
        }
        <strong class="text-muted text-sm">Created on: ${date.toDateString()}</strong>
        <h4 class='my-3'>${title}</h4>
        <p class="text-muted">${description}</p>

</div>
`

};
const updateLocalStorage = ()=> {
    localStorage.setItem(
        "tasky",
        JSON.stringify({tasks:state.taskList})
    );
};
//load initial data
