// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(event){
     event.preventDefault();
     const value = grocery.value;
     const id = new Date().getTime().toString();
     if(value && !editFlag){
        const element = document.createElement('article');
        // Add class
        element.classList.add('grocery-item');
        // Add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
        // Append child
         list.appendChild(element);
        //  Display alert
        displayAlert('Alert added to the list', 'success');
        // Show container
        container.classList.add('show-container');
     }else if(value && editFlag){
        console.log("Editing");
     }else{
        displayAlert('Please enter value', 'danger');
     }
}
 
/* Display alert */
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // Remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********