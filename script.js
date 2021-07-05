const inputText = document.querySelector('#input-text')
const button = document.querySelector('#btn')
const listContainer = document.querySelector('#list-container')

button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!inputText.value=='')makeNote(inputText.value)
    inputText.value = ''
})
let textArea;
let editButton;
let saveButton;
let crossButton;
// Make a new note
function makeNote(text){
    //list item
    const li = document.createElement('li')
    li.classList.add('item')

    //textarea container
    const div = document.createElement('div')
    div.classList.add('note')

    //textarea
    textArea = document.createElement('textarea')
    textArea.setAttribute('spellcheck', false)
    textArea.disabled = true
    textArea.classList.add('note-text')
    textArea.innerText = text;

    //cross button container
    crossButton = document.createElement('div')
    crossButton.classList.add('cross')
    crossButton.innerHTML = '<i class="fas fa-times-circle cancel"></i>'
    crossButton.addEventListener('click', deleteNote)

    //edit button
    editButton = document.createElement('button')
    editButton.classList.add('edit')
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', enableEdit)

    //save button
    saveButton = document.createElement('button')
    saveButton.classList.add('save', 'disable')
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', saveText)

    //appending items to the list
        //appending textarea to textarea container
        div.append(textArea)

        li.append(div)
        li.append(crossButton)
        li.append(editButton)
        li.append(saveButton)

        listContainer.append(li)
}
function enableEdit(){
    let li = this.parentElement
    let enableIt = li.childNodes[0].childNodes[0]
    enableIt.disabled = false;
    let savebtn = li.childNodes[3]
    savebtn.classList.remove('disable')
}

function saveText(){
    this.classList.add('disable')
    let disableIt = this.parentElement.childNodes[0].childNodes[0];
    disableIt.disabled = true;
}

function deleteNote(){
   this.parentElement.style.display = 'none'
}