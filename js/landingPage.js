function getAkanMaleName(value) {
  console.log("switch value", value);
  switch (value) {
    case 0:
      return "Kwasi";
    case 1:
      return "Kwadwo";
    case 2:
      return "Kwabena";
    case 3:
      return "Kwaku";
    case 4:
      return "Yaw";
    case 5:
      return "Kofi";
    case 6:
      return "Kwame";
  }
}
function getAkanFemaleName(value) {
  console.log("switch value", value);
  switch (value) {
    case 0:
      return "Akosua";
    case 1:
      return "Adwoa";
    case 2:
      return "Abenaa";
    case 3:
      return "Akua";
    case 4:
      return "Yaa";
    case 5:
      return "Afua";
    case 6:
      return "Ama";
  }
}

function getAkanName() {
  // get input values
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let gender = Array.from(document.getElementsByName("gender")).find(
    (r) => r.checked
  ).value;
  submitOK = "true";

  if (isNaN(day) || day <= 0 || day > 31) {
    document.getElementById("dayError").innerHTML =
      "The day must be a number between 0 and 31";
    submitOK = "false";
  }
  if (isNaN(month) || month <= 0 || month > 12) {
    document.getElementById("monthError").innerHTML =
      "The month must be a number between 0 and 12";
    // alert("The month must be a number between 0 and 12");
    submitOK = "false";
  }

  if (submitOK == "false") {
    return false;
  }
  let CC = year.slice(0, 2);
  let YY = year.slice(-2);
  let MM = month;
  let DD = day;

  let dayOfWeek =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

  if (gender === "male") {
    let name = getAkanMaleName(Math.trunc(dayOfWeek));
    document.getElementById("akanName").innerHTML = `Your Akan Name is ${name}`;
  } else {
    let name = getAkanFemaleName(Math.trunc(dayOfWeek));
    document.getElementById("akanName").innerHTML = `Your Akan Name is ${name}`;
  }
  event.preventDefault();
}
