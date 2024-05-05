/***Mouse events***/
const paragraph = document.getElementById("myParagraph");

//Change background color to yellow when clicked
paragraph.addEventListener("click", event => {
    event.target.style.backgroundColor = "yellow"
});

//Change background color to blue when double-clicked
paragraph.addEventListener("dblclick", event => {
    event.target.style.backgroundColor = "blue"
});

//Change background color to red when mouse hovers over
paragraph.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "red"
});

//Change background color to green when mouse leaves
paragraph.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "green"
});

/***Textfield events***/
const textfield = document.getElementById("myText");

//Convert text to uppercase when its value changes
textfield.addEventListener("change", upperCase => {
    textfield.value = textfield.value.toUpperCase();
});

//Change border color to blue when textfield is focused
textfield.addEventListener("focus", event => {
    event.target.style.border = "1px solid #00f";
});

//Change border color to default when focus is removed from textfield
textfield.addEventListener("blur", event => {
    event.target.style.border = "1px solid #ccc";
});