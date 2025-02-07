function validateData() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phoneNumber").value;
    let mail = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let dob = document.getElementById("dob").value;
    let department = document.getElementById("department").value;
    let experience = document.getElementById("experience").value;
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let nameRegex = /^\[A-Za-z]$/;
    let phoneRegex = /^\+91\d{10}$/;
    let mailRegex = /^\[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]$/;

    if (!nameRegex.test(firstName)) {
        alert("Please enter a valid first name.");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("Please enter a valid last name.");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number (eg: +91XXXXXXXXXX.)");
        return false;
    }

    if (!mailRegex.test(mail)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!gender) {
        alert("Select your gender.");
        return false;
    }

    if (!dob) {
        alert("Please select your date of birth.");
        return false;
    }

    if (!department) {
        alert("Please select your department.");
        return false;
    }

    if (!experience) {
        alert("Please enter your years of experience. (Even 0yrs of experience )");
        return false;
    }

    if (skills.length === 0) {
        alert("Select at least one skill.");
        return false;
    }

    if (!userName) {
        alert("Please enter your user name.");
        return false;
    }

    if (!password) {
        alert("Set a password");
        return false;
    }

    if (!confirmPassword) {
        alert("Please confirm your password.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return false;
    }

    return true;
}