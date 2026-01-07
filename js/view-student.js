const students = [
    { id: "S101", name: "Arun", dept: "CSE", year: "3rd Year" },
    { id: "S102", name: "Priya", dept: "IT", year: "2nd Year" },
    { id: "S103", name: "Karthik", dept: "ECE", year: "4th Year" },
    { id: "S104", name: "Divya", dept: "MECH", year: "1st Year" }
];

const table = document.getElementById("studentTable");

students.forEach(stu => {
    let row = table.insertRow();
    row.insertCell(0).innerText = stu.id;
    row.insertCell(1).innerText = stu.name;
    row.insertCell(2).innerText = stu.dept;
    row.insertCell(3).innerText = stu.year;
});
