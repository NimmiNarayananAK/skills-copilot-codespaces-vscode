function skillsMember() {
    var skills = document.getElementById("skills").value;
    if (skills == "") {
        document.getElementById("skillsError").innerHTML = "Skills is required";
        document.getElementById("skillsError").style.color = "red";
        return false;
    }
    else {
        document.getElementById("skillsError").innerHTML = "";
        return true;
    }
}