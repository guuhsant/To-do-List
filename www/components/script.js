const localStorageKey = 'to-do-list-VN';

function validateIfExistsNewTask()
{
    let values     = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.querySelector('#input-new-task').value;
    let exists     = values.find(x => x.name == inputValue);
    return !exists ? false : true
}
function newTask(){
    const input = document.querySelector('#input-new-task')

    if(!input.value){
        input.style.border = '1px solid red'
        alert('Escreva algo para adicionar alguma task')
       
    }
    else if(validateIfExistsNewTask())
    {
        alert('Já existe uma task com essa descrição')
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues();
    }
    input.value = ''
}
function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.querySelector('#to-do-list')
    list.innerHTML = '';

    for(let i=0; i<values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id="btn-ok" onclick='removeItem("${values[i]['name']}")' ></button></li>`
    }
}
function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index, 1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}
showValues()