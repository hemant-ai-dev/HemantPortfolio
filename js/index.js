document.addEventListener("DOMContentLoaded",function(){

const hire=document.getElementById("hireBtn");

const resume=document.getElementById("resumeBtn");

hire.addEventListener("click",function(){

window.location.href="contact.html";

});

resume.addEventListener("click",function(){

const link=document.createElement("a");

link.href="../Resume/Hemant_Chavan_Resume.pdf";

link.download="Hemant_Chavan_Resume.pdf";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

});

const experience=document.getElementById("experience");

const joiningDate=new Date(2021,0,11);

const currentDate=new Date();

let years=currentDate.getFullYear()-joiningDate.getFullYear();

let months=currentDate.getMonth()-joiningDate.getMonth();

if(currentDate.getDate()<joiningDate.getDate()){
months--;
}

if(months<0){
years--;
months+=12;
}

experience.textContent=`${years}.${months} Years | ASP.NET Core | Web API | AWS | Banking Domain`;

});