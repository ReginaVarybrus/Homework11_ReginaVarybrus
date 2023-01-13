'use strict';

const personagesList = document.getElementById('personages-list');
const selTxt = document.getElementById('selected');
const outsideSpace = document.getElementsByTagName('body');
const btnReturn = document.getElementById('return');


outsideSpace[0].addEventListener('click', () => {
    selTxt.textContent = '';
});

btnReturn.addEventListener('click', () => {
    location.reload();
});

const actionList = {
    delete: (element) => {
      element.remove();
    }
};

function createPersonagesList (data) {
    

    for (let items of Object.values(data)) {
        if (Array.isArray(items)) {
            Object.values(items).forEach(val => {  
                
                let div = document.createElement('div');
                let ul = document.createElement('ul');
                let li_0 = document.createElement('li');
                let li_1 = document.createElement('li');
                let li_2 = document.createElement('li');
                let btn = document.createElement('button');
                
                li_0.innerText = 'id: ' + val.id;
                li_1.innerText = 'name: ' + val.name;
                li_2.innerText = 'status: ' + val.status;

                div.setAttribute('onclick', 'handleGetName(event); handleDelete(event)');
                div.setAttribute('div-name', val.name);
                div.classList.add('div__item');

                btn.innerHTML = 'delete';
                btn.setAttribute('btn-name', 'delete');
                
                div.appendChild(ul);
                div.appendChild(btn);
                ul.appendChild(li_0);
                ul.appendChild(li_1);
                ul.appendChild(li_2);
                
                personagesList.appendChild(div);
            });
        }
    }
};
createPersonagesList (personages);

function handleGetName(event) {
    selTxt.textContent = event.target.getAttribute("div-name");
    event.stopPropagation();
};

function handleDelete(event) {
    const curentRecord = event.target; // Pointer on clicked object
    const action = event.target.getAttribute('btn-name'); // Get an atribute of clicked element 
    
    if (action in actionList) {
      actionList['delete'](curentRecord.parentElement);
    }  
};

const personageDivs = document.querySelectorAll('div');

personageDivs.forEach((currentRow, index, items) => {
    currentRow.addEventListener('click', () => {
        items.forEach((item) => item.classList.remove('active'));
        currentRow.classList.add('active');
    })
});



