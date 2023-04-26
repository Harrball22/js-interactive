

let message = document.querySelector("aside")



function addMovie(event){
    event.preventDefault()

    let inputField = document.querySelector("input")
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    let deleteBtn = document.createElement("button")

    movieTitle.innerHTML = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    deleteBtn.innerHTML = "x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ""
}

document.querySelector("form").addEventListener("submit", addMovie)

function deleteMovie(event){
    message.innerHTML = event.target.parentNode.textContent + " deleted!"
    event.target.parentNode.remove()

    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")

    if (event.target.classList.contains("checked")){
        message.innerHTML = event.target.innerHTML + " watched!"
    } else {
        message.innerHTML = event.target.innerHTML + " added back"
    }

    revealMessage()
}

function revealMessage(){
    message.classList.remove("hide")

    setTimeout(() => {
        message.classList.add("hide")
    }, 1000)
}
