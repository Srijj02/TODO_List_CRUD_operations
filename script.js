let addform = document.getElementById('myOverlay');
let addText = document.getElementById('addText');
let date = document.getElementById('date');
let discrption = document.getElementById('discrption');
let errorMsg = document.getElementById('errorMsg');
let tasks = document.getElementById('tasks');
let addBtn = document.getElementById('addBtn');

function tst(e) {
    e.preventDefault();
    console.log(addText.value);
    console.log(typeof (date.value));
    console.log(discrption.value);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('hello');
    validate(e);
})


function openPopUp(e) {
    if (e)
        e.preventDefault();
    addform.style.display = 'block';
}

function closePopUp(e) {
    if (e) {
        e.preventDefault();
    }
    addform.style.display = 'none';
}



function validate(e) {
    if (e) {
        e.preventDefault();
    }
    if (addText.value === "" || date.value === "" || discrption.value === "") {
        errorMsg.innerHTML = "Please fill the empty fields";
        addform.style.display = 'block';
    }
    else {
        errorMsg.innerHTML = "";
        console.log(date.value);
        storeData();
    }
}

let data = [{}];

function storeData() {
    data.push({
        taskNo: addText.value,
        date: date.value,
        discrption: discrption.value
    })

    localStorage.setItem('data', JSON.stringify(data));
    console.log(JSON.stringify(data));
    add();
    errorMsg.innerHTML = "";
    addText.value = "";
    date.value = "";
    discrption.value = "";

}

function add() {
    // e.preventDefault();

    tasks.innerHTML="";
    data.map((val,index)=> {
        return (tasks.innerHTML += `<div id=${index}>
        <input id="checkBox" type="checkbox">
        <span><b>${val.taskNo}</b></span>
        <br><br>
        <span id="date">${val.date}</span>
        <p>${val.discrption}</p>
        <span class="options">
            <i onclick="editTask(${index})" id="edit" class="fa-regular fa-pen-to-square"></i>
            <i onclick="deleteTask(${index})" id="delete" class="fa-regular fa-trash-can"></i>
        </span>
    </div>`);
    })
    
    addform.style.display = 'block';
}

function deleteTask(index) {
    // ele.parentElement.parentElement.remove();
    data.splice(index,1);
    localStorage.setItem("data",JSON.stringify(data));
    add();
}

function editTask(index) {

    let val = data[index];
    
    addText.value = val.taskNo;
    date.value = val.date;
    discrption.value = val.discrption;

    deleteTask(index);

    addform.style.display = 'block';
    // val.remove();
    // localStorage.removeItem()


}


window.onload=()=> {
    data=JSON.parse(localStorage.getItem('data')) || [];
    add();
}



