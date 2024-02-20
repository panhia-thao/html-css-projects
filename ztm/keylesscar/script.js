function checkAge() {
    let age = parseInt(prompt("Enter your age:"));

    if (isNaN(age)) {
        document.getElementById("prompt").textContent = "Please enter a valid age.";
    } else if (age < 18) {
        document.getElementById("prompt").textContent = "Sorry, you are too young to drive this car. Powering off.";
    } else if (age === 18) {
        document.getElementById("prompt").textContent = "Congratulations on your first year of driving. Enjoy the ride!";
    } else if (age > 18) {
        document.getElementById("prompt").textContent = "Powering On. Enjoy the ride!";
    } 
}

