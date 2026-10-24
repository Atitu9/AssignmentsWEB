const userProfile = {
name: "Magzhan",
birthYear: 2006,
isDeveloper: true,
hobbies: ["Programming", "Gaming", "Music"]
};
const currentYear = new Date().getFullYear();
let age = currentYear - userProfile.birthYear;
let ageInMonths = age * 12;

function displayProfile() {
document.getElementById("profileName").textContent = userProfile.name;
document.getElementById("profileBirthYear").textContent = userProfile.birthYear;
document.getElementById("profileDeveloper").textContent = userProfile.isDeveloper ? "Yes" : "No";
document.getElementById("profileAge").textContent = age;
document.getElementById("profileMonths").textContent = ageInMonths;
document.getElementById("hobbiesCount").textContent = userProfile.hobbies.length;
document.getElementById("profileHobbies").textContent = userProfile.hobbies.join(", ");
}
const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
event.preventDefault();

const username = document.getElementById("username").value.trim();
const birthYear = Number(document.getElementById("birthYear").value);
const currentYear = new Date().getFullYear();
if (username === "") {
    document.getElementById("formMessage").textContent = "Please enter your username";
    return;
}
if (!Number.isInteger(birthYear) ||birthYear < 1900 || birthYear > currentYear) {
    document.getElementById("formMessage").textContent = "Please enter a valid birth year";
    return;
}
userProfile.name = username;
userProfile.birthYear = birthYear;
age = currentYear - userProfile.birthYear;
ageInMonths = age * 12;
displayProfile();
document.getElementById("formMessage").textContent = "Profile updated successfully";
console.log("Updated Profile:", userProfile);
console.log("Current Age:", age);
console.log("Age in Months:", ageInMonths);
});
const hobbiesList = document.getElementById("hobbiesList");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

addButton.addEventListener("click", function() {
const hobby = prompt("Enter a new hobby:");

if (hobby === null || hobby.trim() === "") {
  document.getElementById("listMessage").textContent = "No hobby was added";
  return;
}
const newHobby = hobby.trim();
const listItem = document.createElement("li");
listItem.textContent = newHobby;
hobbiesList.appendChild(listItem);
userProfile.hobbies.push(newHobby);
displayProfile();
document.getElementById("listMessage").textContent = "Hobby added successfully";
console.log("Hobbies:", userProfile.hobbies);
});
removeButton.addEventListener("click", function() {
if (hobbiesList.lastElementChild === null) {
document.getElementById("listMessage").textContent = "The list is already empty";
return;
}
userProfile.hobbies.pop();
hobbiesList.lastElementChild.remove();
displayProfile();
document.getElementById("listMessage").textContent = "Last hobby removed successfully";
console.log("Hobbies:", userProfile.hobbies);
});
displayProfile();