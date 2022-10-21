let loadingPage = document.querySelector(".loading-page")
window.addEventListener("load",function(){
    loadingPage.classList.add("loaded")
    inputNote.focus()
})

//selector element
let inputNote = document.querySelector("#input-note")
let inputTitle = document.querySelector("#input-title")
let addBtn = document.querySelector("#add-button")
let clearBtn = document.querySelector("#clear-button")
let notes = document.querySelector(".notes")
let btnColors = document.querySelectorAll(".btn-colors")

// Event Listeners

addBtn.addEventListener("click",crateNote)
inputNote.addEventListener("keydown",function(e){
    if(e.keyCode == 13){
        inputTitle.focus()
    } 
    if (e.keyCode == 39) {
        inputTitle.focus()
    }
})
inputTitle.addEventListener("keydown",function(e){
    if(e.keyCode == 13){
        crateNote()
    } 
    if (e.keyCode == 37) {
        inputNote.focus()
    }
})


// loop colors

btnColors.forEach(function(color){
    color.addEventListener("click",function(){
        inputNote.className = "form-control" + " " + color.id
        inputNote.setAttribute("id", color.id)
        console.log(inputNote)
    })
})


clearBtn.addEventListener("click",clear)




// functions

function crateNote(){
    // create Elements
    let article = document.createElement("article");
    let divTitle = document.createElement("div");
    let divP = document.createElement("div");
    let divBtns = document.createElement("div");
    let hTitle = document.createElement("h3");
    let pNote = document.createElement("p");
    let buttonDel = document.createElement("button");
    let buttonOk = document.createElement("button");

    // add classes
    article.className = "note-body" + " " + inputNote.id ;
    divBtns.classList.add("btn-container")
    buttonDel.className = "btn btn-danger"
    buttonOk.className = "btn btn-primary"

    // innerHTMLs
    divP.innerHTML = inputNote.value
    hTitle.innerHTML = inputTitle.value
    buttonOk.innerHTML = "OK"
    buttonDel.innerHTML = "Delete"

    // Add Document
    divTitle.append(hTitle)
    divP.append(pNote)
    divBtns.append(buttonDel,buttonOk)
    article.append(divTitle,divP,divBtns)
    notes.append(article)

    // value 0
    inputNote.value = ""
    inputTitle.value = ""
    
    // buttons Lisetener
    buttonOk.addEventListener("click",function(){
        article.classList.remove("note-body")
        article.classList.add("note-body__ok")
    })
    buttonDel.addEventListener("click",function(){
        buttonDel.parentElement.parentElement.remove()
    })    

}


function clear() {
    inputNote.value = ""
    inputTitle.value = ""
    inputNote.className = "form-control"
    inputNote.removeAttribute("id")
}





