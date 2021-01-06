let subtractButton = document.getElementById("subtract_button") // This step is actually unnecessary because HTML5 recognizes DOM elements based on their ID name, as long as their ID name has no hyphens in it. Underscores are acceptable.

add_button.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Sup")
})
