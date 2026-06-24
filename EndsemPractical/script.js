
function checkNumber() {
    var numInput = document.getElementById("numberInput").value.trim();
    var resultDiv = document.getElementById("result");

    resultDiv.className = "result-display";

    if (numInput === "") {
        resultDiv.textContent = "Please enter a number first!";
        resultDiv.classList.add("error");
        return;
    }

    var n = Number(numInput);

    if (!Number.isInteger(n)) {
        resultDiv.textContent = "Please enter a whole number (no decimals)!";
        resultDiv.classList.add("warning");
        return;
    }

    if (n % 2 === 0) {
        resultDiv.textContent = n + " is an EVEN number.";
        resultDiv.classList.add("success");
    } else {
        resultDiv.textContent = n + " is an ODD number.";
        resultDiv.classList.add("success");
    }
}

window.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("numberInput");
    var button = document.getElementById("checkButton");

    button.addEventListener("click", checkNumber);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkNumber();
        }
    });
});