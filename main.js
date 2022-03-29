//Part 1
//Reference to our text input
let inputText = document.querySelector("#userInput");
let stylistText = document.querySelector("#stylist");
let userName = document.querySelector("#userName");
//Reference to e-mail input
let userEmail = document.querySelector("#userEmail");
//Reference to password inputs
let userPassword = document.querySelector("#userPassword");
let confirmPassword = document.querySelector("#confirmPassword");
//Reference to date input
let inputDate = document.querySelector("#date1");
//Reference to our submit buttons
let inputSubmit = document.querySelector("#submitButton");
let sandwichSubmit = document.querySelector("#submitButton2");
let hairAppSubmit = document.querySelector("#submitButton3");
let createAccSubmit = document.querySelector("#submitButton4");
//Reference to forms
let formOne = document.querySelector("#form1");
let formTwo = document.querySelector("#form2");
let formThree = document.querySelector("#form3");
let formFour = document.querySelector("#form4");
//Get references to my radiobuttons 
let wheatRadio = document.querySelector("#wheat");
let ryeRadio = document.querySelector("#rye");
let sourdoughRadio = document.querySelector("#sourdough");

let longRadio = document.querySelector("#long");
let shortRadio = document.querySelector("#short");
//Get references to my checkboxes
let turkeyCheckbox = document.querySelector("#turkey");
let hamCheckbox = document.querySelector("#ham");
let salamiCheckbox = document.querySelector("#salami");
let cheddarCheckbox = document.querySelector("#cheddar");
let provoloneCheckbox = document.querySelector("#provolone");
let mozzerellaCheckbox = document.querySelector("#mozzerella");
let lettuceCheckbox = document.querySelector("#lettuce");
let tomatoCheckbox = document.querySelector("#tomato");
let mustardCheckbox = document.querySelector("#mustard");
let aioliCheckbox = document.querySelector("#aioli");
let pestoCheckbox = document.querySelector("#pesto");


formOne.addEventListener("submit", function(event) {
    //forms refresh upon clicking the submit button automatically.
    //We can stop that behavior from occuring by using event.preventDefault(); which will ensure that our browser doesn't refresh the page
    event.preventDefault();
    //alert is like console.log() except it makes the text appear in a pop-window that prevents you from clicking anything else on the page until it is closed.
    alert(inputText.value);
})

formTwo.addEventListener("submit", function(event) {
    event.preventDefault();

    let breadType = "";
    if(wheatRadio.checked === true){
        breadType = "Wheat";
    } else if(ryeRadio.checked === true) {
        breadType = "Rye";
    } else if(sourdoughRadio.checked === true){
        breadType = "Sourdough";
    }

    let ingredients = [];
    if (turkeyCheckbox.checked) {
        ingredients.push("Turkey");
    } 
    if (hamCheckbox.checked) {
        ingredients.push("Ham");
    }
    if (salamiCheckbox.checked) {
        ingredients.push("Salami");
    }
    if (cheddarCheckbox.checked) {
        ingredients.push("Cheddar");
    }
    if (provoloneCheckbox.checked) {
        ingredients.push("Provolone");
    }
    if (mozzerellaCheckbox.checked) {
        ingredients.push("Mozzerella");
    }
    if (lettuceCheckbox.checked) {
        ingredients.push("Lettuce");
    }
    if (tomatoCheckbox.checked) {
        ingredients.push("Tomato");
    }
    if (mustardCheckbox.checked) {
        ingredients.push("Mustard");
    }
    if (aioliCheckbox.checked) {
        ingredients.push("Aioli");
    }
    if (pestoCheckbox.checked) {
        ingredients.push("Pesto");
    }

    ingredients.join(', ');
    console.log(ingredients);

    alert(`Your sandwich contains: Bread type: ${breadType} , Ingredients: ${ingredients.join(', ')}.`);
})

formThree.addEventListener("submit", function(event) {
    event.preventDefault();

    let hairLength = "";
    if(longRadio.checked === true){
        hairLength = "Long";
    } else if(shortRadio.checked === true) {
        hairLength = "Short";
    } 

    alert(`Haircut scheduled for ${inputDate.value} with ${stylistText.value} for ${hairLength} hair.`)
})

formFour.addEventListener("submit", function(event) {
    event.preventDefault();

    if (userName.value.length < 3) {
        alert("Error! Username must be at least 3 characters.")
    }

    if (userPassword.value === "") {
        alert("Error! Please Create Password");
    } else if (confirmPassword.value === "") {
        alert("Error! Please Confirm Password");
    } else if (userPassword.value.length < 4) {
        alert("Error! Please create a password at least 4 characters long.");    
    } else if (userPassword.value !== confirmPassword.value) {
        alert("Error! Passwords do not match, please re-enter");
    } else {
        alert(`Congratulations! You have successfully created your account. Your username is: ${userName.value}. Your e-mail is: ${userEmail.value}.`)
    }
})