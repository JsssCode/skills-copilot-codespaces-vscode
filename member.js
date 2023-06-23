function skillsMember() {       // Path: member.js
    var skills = document.getElementById("skills").value;
    var skills_error = document.getElementById("skills_error");
    var skills_regex = /^[a-zA-Z ]*$/;
    if (skills.length == 0) {
        skills_error.innerHTML = "Skills is required";
        return false;
    }
    else if (!skills.match(skills_regex)) {
        skills_error.innerHTML = "Only alphabets are allowed";
        return false;
    }
    else {
        skills_error.innerHTML = "";
        return true;
    }
}