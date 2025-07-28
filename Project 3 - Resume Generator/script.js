function addWEBox() {
  // Create new work experience text box
  let newWorkObj = document.createElement("textarea");
  newWorkObj.classList.add("form-control");
  newWorkObj.classList.add("mb-3");
  newWorkObj.setAttribute("rows", 3);
  newWorkObj.setAttribute("placeholder", "Enter your work experience");

  // Get element to add it before
  let weBtnCntObj = document.getElementById("weBtnContainer");
  let weDivObj = document.getElementById("weDiv");
  weDivObj.insertBefore(newWorkObj, weBtnCntObj);
}

function addEduBox() {
  // Create new education text box
  let newEduBoxObj = document.createElement("textarea");
  newEduBoxObj.classList.add("mb-3");
  newEduBoxObj.classList.add("form-control");
  newEduBoxObj.setAttribute("rows", 3);
  newEduBoxObj.setAttribute("placeholder", "Enter your education");

  // Get element to add it before
  let eduDivObj = document.getElementById("educationDiv");
  let eduBtnCntObj = document.getElementById("eduBtnContainer");
  eduDivObj.insertBefore(newEduBoxObj, eduBtnCntObj);
}

function generateResume() {
  // Set personal info
  document.getElementById("nameT").innerHTML = document.getElementById("name").value;
  document.getElementById("phoneT").innerHTML = document.getElementById("phone").value;
  document.getElementById("addressT").innerHTML = document.getElementById("address").value;
  document.getElementById("linkedInT").innerHTML = document.getElementById("linkedIn").value;
  document.getElementById("githubT").innerHTML = document.getElementById("github").value;
  document.getElementById("websiteLinkT").innerHTML = document.getElementById("websiteLink").value;

  // Hide form and show resume
  document.getElementById("question-form").style.display = "none";
  document.getElementById("resume-page").style.display = "block";
}

function printResume() {
  window.print();
}
