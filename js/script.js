function adminLogin() {
    alert("Admin Login Page");
}

function teacherLogin() {
    alert("Teacher Login Page");
}

function studentLogin() {
    alert("Student Login Page");
}
function adminLoginCheck() {
    let username = document.getElementById("adminUser").value;
    let password = document.getElementById("adminPass").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "admin-dashboard.html";
    } else {
        document.getElementById("error").innerText =
            "Invalid Admin Credentials!";
    }
    function goToAdminLogin() {
    window.location.href = "admin-login.html";
}
function teacherLoginCheck() {
    let username = document.getElementById("teacherUser").value;
    let password = document.getElementById("teacherPass").value;

    // Demo Teacher credentials
    if (username === "teacher" && password === "teacher123") {
        window.location.href = "teacher-dashboard.html";
    } else {
        document.getElementById("teacherError").innerText =
            "Invalid Teacher Credentials!";
    }
}


}
