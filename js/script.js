/* Note: We no longer need to say
let subtractButton = document.getElementById("subtract_button") 
because HTML5 is able to recognize DOM elements by just their ID, as long as their ID name has no hyphens in it. Underscores are acceptable. */

//// Inverting colors of buttons when you hover over them. ////
function invertColors(event) {
    event.target.style.color = 'lightgrey' // Change font color. 
    event.target.style.backgroundColor = 'teal' // Change button color.
    event.target.style.borderColor = 'lightgrey'
}

subtract_button.addEventListener('mouseover', (event) => {
    invertColors(event)
})

add_button.addEventListener('mouseover', (event) => {
    invertColors(event)
})

//// Returning colors of buttons when you're no longer hovering over them. ////
function revertColors(event) {
    event.target.style.color = 'teal' // Return to original font color. 
    event.target.style.backgroundColor = 'lightgrey' // Return to original button color.
    event.target.style.borderColor = 'teal'
}

subtract_button.addEventListener('mouseout', (event) => {
    revertColors(event)
})

add_button.addEventListener('mouseout', (event) => {
    revertColors(event)
})


//// Changing the count based on the input and operand you select. ////
let count = parseInt(count_div.innerText)
let inputValue = input_box.value

subtract_button.addEventListener('click', (event) => {
    inputValue = input_box.value
    math('subtract')
    event.preventDefault()
})

add_button.addEventListener('click', (event) => {
    inputValue = input_box.value
    math('add')
    event.preventDefault()
})

function math(operator) {
    switch(operator) {
        case('add'): 
            count += parseInt(inputValue) 
            break
        case('subtract'):
            count -= parseInt(inputValue)
            break
    }
    count_div.innerText = count
    if (count < 0) {count_div.style.color = 'red' }
    else { count_div.style.color = 'black' }
}
