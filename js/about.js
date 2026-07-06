document.addEventListener("DOMContentLoaded", function () {

    // Download Resume Button
    const resumeButton = document.getElementById("resumeBtn");
    resumeButton.addEventListener("click", downloadResume);

    // Back to Home Button
    const backButton = document.getElementById("backBtn");
    backButton.addEventListener("click", backToHome);

});

function downloadResume() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "../Resume/Hemant_Chavan_Resume.pdf";
    downloadLink.download = "Hemant_Chavan_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function backToHome() {
    window.location.href = "index.html";
}

var a = document.querySelector(".para");

const joiningDate = new Date(2021, 0, 11);
const currentDate = new Date();

let years = currentDate.getFullYear() - joiningDate.getFullYear();
let months = currentDate.getMonth() - joiningDate.getMonth();

if (currentDate.getDate() < joiningDate.getDate()) {
    months--;
}

if (months < 0) {
    years--;
    months += 12;
}

a.textContent = `I'm a passionate Senior .NET Developer with ${years}.${months} years of experience in designing and developing enterprise web applications using ASP.NET Core, C#, Web API, SQL Server and AWS.`;