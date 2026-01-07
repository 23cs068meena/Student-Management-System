function registerStudent() {
    let id = document.getElementById("sid").value.trim();
    let name = document.getElementById("sname").value.trim();
    let dept = document.getElementById("dept").value.trim();
    let year = document.getElementById("year").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let msg = document.getElementById("msg");

    if (id === "" || name === "" || dept === "" || year === "" || phone === "") {
        msg.style.color = "red";
        msg.innerText = "Register Successful!!";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Registration Successful!";
}
