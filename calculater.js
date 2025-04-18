// Get the input box
let input = document.getElementById("result");

// Get all buttons
let buttons = document.querySelectorAll("button");

// Initialize a string to store user input
let string = "";

// Convert NodeList to array and loop through each button
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let btnText = e.target.innerText;

        if (btnText === "AC") {
            string = "";
            input.value = "";
        } else if (btnText === "DEL") {
            string = string.slice(0, -1); // remove last character
            input.value = string;
        } else if (btnText === "=") {
            try {
                string = eval(string); // calculate the result
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
