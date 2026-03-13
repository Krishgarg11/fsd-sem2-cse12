let students = [];

function addStudent() {
    let s = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        math: +document.getElementById("math").value,
        science: +document.getElementById("science").value,
        english: +document.getElementById("english").value
    };
    students.push(s);
    document.getElementById("output").innerHTML = "Student Added Successfully";
    ["name", "roll", "math", "science", "english"].forEach(id => document.getElementById(id).value = "");
}
function showStudents() {
    document.getElementById("output").innerHTML = students.map(s => "Name: " + s.name + ", Roll: " + s.roll).join("<br>");
}

function showAverage() {
    document.getElementById("output").innerHTML = students.map(s => {
        let avg = (s.math + s.science + s.english) / 3;
        return s.name + " Average: " + avg.toFixed(2);
    }).join("<br>");
}

function highMarks() {
    document.getElementById("output").innerHTML = students.filter(s => (s.math + s.science + s.english) / 3 > 80)
        .map(s => s.name + " Average: " + ((s.math + s.science + s.english) / 3).toFixed(2)).join("<br>");
}

function failedStudents() {
    document.getElementById("output").innerHTML = students.filter(s => (s.math + s.science + s.english) / 3 < 40)
        .map(s => s.name + " Failed (Avg: " + ((s.math + s.science + s.english) / 3).toFixed(2) + ")").join("<br>");
}

function countStudents() {
    document.getElementById("output").innerHTML = "Total Students: " + students.length;
}