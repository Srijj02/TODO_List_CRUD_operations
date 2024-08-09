let addform = document.getElementById('myOverlay');
let addText = document.getElementById('addText');
let date = document.getElementById('date');
let discrption = document.getElementById('discrption');
let errorMsg = document.getElementById('errorMsg');
let myOverlay = document.getElementById('myOverlay');
let tasks = document.getElementById('tasks');
let addBtn = document.getElementById('addBtn');

function tst(e) {
    e.preventDefault();
    console.log(addText.value);
    console.log(typeof (date.value));
    console.log(discrption.value);
}


console.log("hello");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('helooooooooooo');
    // console.log(dateTime.value);
    // console.log(date.value);
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
        myOverlay.style.display = "block";
    }
    else {
        errorMsg.innerHTML = "";
        // let len = dateTime.value.length;

        // for (let i = 0; i < 10; i++) {
        //     dateValue += dateTime.value.charAt(i);
        // }

        // for (let i = 11; i < len; i++) {
        //     timeValue += dateTime.value.charAt(i)
        // }
        console.log(date.value);
        storeData();
    }
}




let data = [{}];

function storeData() {
    console.log("hiiii");
    data.push({
        taskNo: addText.value,
        date: date.value,
        discrption: discrption.value
    })
    console.log("hiiii22");

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
            <i onclick="editTask(this)" id="edit" class="fa-regular fa-pen-to-square"></i>
            <i onclick="deleteTask(this)" id="delete" class="fa-regular fa-trash-can"></i>
        </span>
    </div>`);
    })
    
    myOverlay.style.display = "none";
}

function deleteTask(ele) {
    ele.parentElement.parentElement.remove();
    data.splice(ele.parentElement.parentElement,1);
    localStorage.setItem("data",JSON.stringify(data));
}

function editTask(ele) {

    let val = ele.parentElement.parentElement;
    myOverlay.style.display = "block";




    // console.log(val.children[1].children[0].innerHTML);
    // console.log(val.children[4].innerHTML);
    // console.log(val.children[5].innerHTML);
    // console.log(val.children[6].innerHTML);



    // console.log(val.children[4].innerHTML.trim()+"T"+val.children[5].innerHTML.trim());

    addText.value = val.children[1].children[0].innerHTML;
    date.value = val.children[4].innerHTML;
    discrption.value = val.children[5].innerHTML;

    deleteTask(ele);

    // val.remove();
    // localStorage.removeItem()


}


window.onload=()=> {
    data=JSON.parse(localStorage.getItem('data')) || [];
    add();
}



