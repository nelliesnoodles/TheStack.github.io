// JavaScript source code
let paragraph;
let button_element;
var count = 0;

function set_DOM() {
    paragraph = document.getElementById("the_stack")
    button_element= document.getElementById("add_to_stack")
}

function add_to_stack() {
    message = "adding to stack, process = " + count.toString() + "<br />"
    paragraph.innerHTML += message;
    count += 1
}

callback = () => {
    add_to_stack()
    message = "Call back function called, process = " + count.toString() + "<br />"
    paragraph.innerHTML += message
    count += 1
}

function no_callback() {
    message = "NO call back, process = " + count.toString() + "<br />"
    paragraph.innerHTML += message
    count += 1
}

function run() {
    window.setTimeout(callback, 500);
    window.setTimeout(no_callback, 200);
}
function setEventListeners() {
    button_element.addEventListener('click', run)
}

window.onload = function () {
    set_DOM()
    setEventListeners()
}
