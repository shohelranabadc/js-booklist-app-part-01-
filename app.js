const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const tbody = document.querySelector('tbody');


function addList(){
    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Fill input field please!");
    } else {
        const newRow = document.createElement('tr')

        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);


        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        tbody.appendChild(newRow);

        title.value = "";
        author.value = "";
        year.value = "";
    }
};

btn.addEventListener("click", addList);

title.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addList();
    }
});

author.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addList();
    }
});

year.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addList();
    }
});



