// Note: We no longer need to say
// let subtractButton = document.getElementById("subtract_button") 
// Because HTML5 is able to recognize DOM elements by just their ID, as long as their ID name has no hyphens in it. Underscores are acceptable.

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
