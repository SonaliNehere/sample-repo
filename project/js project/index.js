const taskContainer = document.querySelector(".task_container");

let golbalStore = [];

const generateNewCard = (taskData) =>  `
<div class="col-md-6 col-lg-4"  >
  <div class="card text-center">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i>
      </button>
      <button type="button" class="btn btn-outline-danger" id =${taskData.id} 
      onclick="deleteCard.apply(this,arguments)">
      <i class="fas fa-trash" id =${taskData.id} onclick="deleteCard.apply(this,arguments)"></i>
      </button>
    </div>
    <img src="${taskData.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.Description}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
    <div class="card-footer text-muted">
      <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
  </div>
</div>`
;

const loadInitialCardData = () => {
  //access local storage to get tasky card data

  const getCardData = localStorage.getItem("tasky");

  //convert from string to normal object

  const {cards} = JSON.parse(getCardData);

  //loop over those array of task object to create HTML card,

  cards.map((cardObject) => {
    // inject it into DOM
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

     //update our globalstore

    golbalStore.push(cardObject);
  });

}


const saveChanges = () => {
    const taskData = {
        id : `${Date.now()}`,//unique number for id
        imageUrl : document.getElementById("imageurl").value, //document is parent of DOM
        taskTitle : document.getElementById("tasktitle").value ,
        taskType : document.getElementById("tasktype").value,
        taskDescription : document.getElementById("taskdescription").value,
    };
    
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

    golbalStore.push(taskData);

    localStorage.setItem("tasky", JSON.stringify({cards:golbalStore})); //an object
    // it is use to add your data to localstorage,
     //tasky act as id. we are using array to retain all data if we pass taskData
     // it will replace first data
};

const deleteCard = (event) => {
  event = window.event;

  //id
  const targetId = event.target.id; 
  const tagname = event.target.tagname; // output of button

  //match the id of the element with the id inside globalstore
  //if match found remove it

  var golbalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
  localStorage.setItem("tasky",JSON.stringify({cards:golbalStore}));


 // contact parent
 if(tagname === "BUTTON"){
   return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
  }
  else{
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  }

};

//Issues

//page refresh will cause data to be deleted -> local storage ->5MB

//local storage called as API -> Application Programming Interface

// localstorage ->  is our Application
//Access application via ->programming
//Interface as a middle man

//local storage with some method -> javascript
//we are accesing local storage programatically by javascript using functions that's what called API


//Features
//Delete the card
//Edit the card
//Open the card