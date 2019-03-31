function regexChecker() {
    let firstName = document.getElementById('firstName').value;
    let firstNameRegex = /^[A-Z][a-z]*$/;
    let lastName = document.getElementById('lastName').value;
    let lastNameRegex = /^[A-Z][a-z]*$/;

    if (firstName.match(firstNameRegex) && lastName.match(lastNameRegex)) {
        alert('"Yay! Your inputs were all correct!"');
        console.log(true);
    }
    else {
        alert('"Oh no! Thats an invalid format!"');
        console.log(false);
    }
}