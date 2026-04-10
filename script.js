let selectedClass = "";
let captcha = "";

function generateCaptcha() {
  captcha = Math.floor(1000 + Math.random() * 9000).toString();
  document.getElementById("captchaText").textContent = captcha;
}

function selectClass(cls) {
  selectedClass = cls;
  document.getElementById("formSection").style.display = "block";
  updateStep(2);
  generateCaptcha(); 
}

function showResult() {
  let roll = document.getElementById("roll").value;
  let school = document.getElementById("school").value;
  let admit = document.getElementById("admit").value;
  let dob = document.getElementById("dob").value;
  let userCaptcha = document.getElementById("captchaInput").value;

  let valid = true;

  document.querySelectorAll(".error").forEach(e => e.textContent = "");
  document.querySelectorAll("input").forEach(i => i.classList.remove("error-border"));

  if (roll === "" || roll.length < 5) {
    document.getElementById("rollError").textContent = "Enter valid roll number";
    document.getElementById("roll").classList.add("error-border");
    valid = false;
  }

  if (school === "") {
    document.getElementById("schoolError").textContent = "Enter school number";
    document.getElementById("school").classList.add("error-border");
    valid = false;
  }

  if (admit === "") {
    document.getElementById("admitError").textContent = "Enter admit card ID";
    document.getElementById("admit").classList.add("error-border");
    valid = false;
  }

  if (dob === "") {
    document.getElementById("dobError").textContent = "Enter DOB";
    document.getElementById("dob").classList.add("error-border");
    valid = false;
  }

  if (userCaptcha !== captcha) {
    document.getElementById("captchaError").textContent = "Incorrect security pin";
    valid = false;
  }

  if (!valid) return;

  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";
    updateStep(3);
  }, 1000);
}